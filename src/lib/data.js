import axios, { AxiosError } from 'axios';

export async function fetchData(endpoint, pageSize, pageNum, filterKey, filterValue) {
  const skip = pageNum * pageSize;
  let url = `${endpoint}?limit=${pageSize}&skip=${skip}`;
  if (filterKey && filterValue)
    url = `${endpoint}/filter?key=${encodeURIComponent(filterKey)}`
      + `&value=${encodeURIComponent(filterValue)}&limit=${pageSize}&skip=${skip}`;
  const response = await axios.get(getUrl(url));
  return response.data;
}

function getUrl(url) {
  return `https://dummyjson.com/${url}`;
}

