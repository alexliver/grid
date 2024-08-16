import React, { useContext, useEffect } from 'react';
import {fetchData} from '../lib/data';
import GridContext from './grid_context';

function GridDataFetcher({ endpoint, filterAsSearch }) {
  const { 
    setData, 
    setIsLoading, 
    setTotal, 
    pageSize, 
    pageNum, 
    filterKey, 
    filterValue, 
    searchText, 
    setPageNum,
  } = useContext(GridContext);

  const updateData = async () => {
    setIsLoading(true);
    const data = await fetchData(endpoint, pageSize, pageNum, filterKey, filterValue, searchText, 
        filterAsSearch);
    setData(data[endpoint]);
    setTotal(data.total);
    setIsLoading(false);
    if (data[endpoint].length == 0 )
      setPageNum(0);
  };

  useEffect(() => {
    updateData();
  }, [pageNum, pageSize, filterKey, filterValue, searchText]);

  return null; 
}

export default GridDataFetcher;
