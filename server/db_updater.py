import requests
import bs4
import csv
import time
import math
import json
from datetime import datetime

now = datetime.now()
counter = 0
last_page_not_reached = True

#  Get total number of pages estimate
url = 'https://koronavirus.gov.hu/elhunytak'
res = requests.get(url)
res.raise_for_status()
soup = bs4.BeautifulSoup(res.text, 'html.parser')
largest_death_id_element = soup.select('td.views-field-field-elhunytak-sorszam')
largest_death_id = math.ceil(float(largest_death_id_element[0].getText().strip()))
estimated_number_of_pages = int(largest_death_id / 50 + 1)

record_list = []
current_id = int(largest_death_id)

# Parse each page and collect the ages of deaths.
while last_page_not_reached:
  url = f'https://koronavirus.gov.hu/elhunytak?page={counter}'
  res = requests.get(url)
  res.raise_for_status()
  soup = bs4.BeautifulSoup(res.text, 'html.parser')
  id_elements = soup.select('td.views-field-field-elhunytak-sorszam')
  age_elements = soup.select('td.views-field-field-elhunytak-kor')
  sex_elements = soup.select('td.views-field-field-elhunytak-nem')
  comorbidities_elements = soup.select('td.views-field-field-elhunytak-alapbetegsegek')

  for i in range(len(id_elements)):
    record = {
      'id': current_id,
      'sex': str(sex_elements[i].getText().strip().lower()),
      'age': int(age_elements[i].getText().strip()),
      'comorbidities': str(comorbidities_elements[i].getText().strip().lower())
    }
    record_list.append(record)
    current_id -= 1

  # Check if last page has been reached
  if not (soup.find('li', class_='pager-last')):
    last_page_not_reached = False
  counter += 1

# Create JSON file of records.
dt_string = now.strftime("%Y.%m.%d %H:%M:%S")

data_object = {
  "last-update-timestamp": dt_string,
  "records": record_list
}
with open('db.json', 'w') as f:
  json.dump(data_object, f, indent=2)




