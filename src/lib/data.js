import axios  from 'axios';

export async function fetchData(endpoint, pageSize, pageNum, filterKey, filterValue, searchText, 
    filterAsSearch) {
  const skip = pageNum * pageSize;
  const pagingString = `limit=${pageSize}&skip=${skip}`;
  let url = `${endpoint}?${pagingString}`;
  if (filterKey && filterValue) {
    if (filterAsSearch)
      url = `${endpoint}/search?q=${encodeURIComponent(filterValue)}&${pagingString}`;
    else
      url = `${endpoint}/filter?key=${encodeURIComponent(filterKey)}`
        + `&value=${encodeURIComponent(filterValue)}&${pagingString}`;
  } else if (searchText)
    url = `${endpoint}/search?q=${encodeURIComponent(searchText)}&${pagingString}`;
  const response = await axios.get(getUrl(url));
  return response.data;
}

function getUrl(url) {
  return `https://dummyjson.com/${url}`;
}

