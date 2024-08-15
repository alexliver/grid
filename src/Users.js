import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';
import SelectFilter from './component/select_filter';

function App() {
  const columns = [
    "firstName", "lastName", "maidenName", "age", "gender", "email", "username", "bloodGroup", 
    "eyeColor", "birthDate",
  ];

  return (
    <Grid columns={columns} endpoint={'users'} >
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
  );
}

export default App;
