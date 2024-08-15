import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';

function App() {
  const columns = [
    "firstName", "lastName", "maidenName", "age", "gender", "email", "username", "bloodGroup", 
    "eyeColor",
  ];
  const [filterKey, setFilterKey] = useState(null);
  const [filterValue, setFilterValue] = useState(null);

  const onChangeFilter = (column) => {
    return (text) => {
      if (text) {
        setFilterKey(column);
        setFilterValue(text);
      } else {
        if (filterKey == column)
          setFilterValue(text);
      }
    };
  };

  const getFilterText = (column) => {
    if (column == filterKey)
      return filterValue;
    return null;
  };

  return (
    <Grid columns={columns} endpoint={'users'} filterKey={filterKey} filterValue={filterValue}>
      <GridSearch>
        <TextFilter column="Email" filterText={getFilterText("email")} 
            onChange={onChangeFilter("email")} />
      </GridSearch>
    </Grid>
  );
}

export default App;
