import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';
import SelectFilter from './component/select_filter';
import GridProvider from './context/grid_provider';
import GridDataFetcher from './context/grid_data_fetcher';

function App() {
  const columns = [
    "firstName", "lastName", "maidenName", "age", "gender", "email", "username", "bloodGroup", 
    "eyeColor", "birthDate",
  ];

  return (
    <GridProvider columns={columns} >
      <GridDataFetcher endpoint={'users'} />
      <Grid>
        <GridSearch >
          <TextFilter column="firstName" />
          <TextFilter column="email" />
          <TextFilter column="birthDate" />
          <SelectFilter column="gender">
            <option value="male">male</option>
            <option value="female">female</option>
          </SelectFilter>
        </GridSearch>
      </Grid>
    </GridProvider>
  );
}

export default App;
