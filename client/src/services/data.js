import axios from 'axios'
const baseUrl = '/api/records'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const DataService = { getAll }

export default DataService
