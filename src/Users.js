import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';

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
      </GridSearch>
    </Grid>
  );
}

export default App;
