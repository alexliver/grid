import axios, { AxiosError } from 'axios';

export async function fetchData(endpoint, pageSize, pageNum) {
  const skip = pageNum * pageSize;
  const url = `${endpoint}?limit=${pageSize}&skip=${skip}`;
  const response = await axios.get(getUrl(url));
  return response.data;
}

function getUrl(url) {
  return `https://dummyjson.com/${url}`;
}

