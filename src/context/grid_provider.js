import React, { useState, useMemo } from 'react';
import GridContext from './grid_context';

function GridProvider({columns, children}) {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [filterKey, setFilterKey] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [searchText, setSearchText] = useState('');

  const updateFilter = (key, value) => {
    setFilterKey(key);
    setFilterValue(value);
    if (value)
      setSearchText('');
  };

  const updateSearch = (value) => {
    setSearchText(value);
    if (value) {
      setFilterKey(null);
      setFilterValue(null);
    }
  };

  const totalPages = useMemo(() => {
    return Math.ceil(total/pageSize);
  }, [total, pageSize]);

  return (
    <GridContext.Provider value={{ 
        data, 
        updateFilter, 
        updateSearch, 
        setPageNum, 
        setPageSize, 
        setData, 
        setIsLoading,
        setTotal,
        pageSize, 
        pageNum, 
        isLoading, 
        totalPages, 
        columns, 
        searchText,
        filterKey,
        filterValue,
      }}>
      {children}
    </GridContext.Provider>
  );
}

export default GridProvider;

