import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';
import SelectFilter from './component/select_filter';

function App() {
  //repeat the steps for the products page (filters are: Title, Brand, and, Category and tabs are: ALL and Laptops)
  const columns = [
    "title",
    "category",
    "price",
    "discountPercentage",
    "rating",
    "stock",
    "brand",
    "sku",
    "weight",
    "warrantyInformation",
    "shippingInformation",
    "availabilityStatus",
  ];
  return (
    <Grid columns={columns} endpoint={'products'} >
      <GridSearch >
      </GridSearch>
    </Grid>
  );
}

export default App;

