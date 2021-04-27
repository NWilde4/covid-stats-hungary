import axios from 'axios'
const baseUrl = '/api/last-update'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const timestampService = { getAll }

export default timestampService
