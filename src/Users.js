import React, { useState, useEffect } from 'react';
import Grid from './component/grid';

function App() {
  const columns = [
    "firstName", "lastName", "maidenName", "age", "gender", "email", "username", "bloodGroup", 
    "eyeColor",
  ];
  return (
    <Grid columns={columns} endpoint={'users'} />
  );
}

export default App;
