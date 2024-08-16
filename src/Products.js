import React, { useState, useEffect } from 'react';
import Grid from './component/grid';
import GridSearch from './component/grid_search';
import TextFilter from './component/text_filter';
import SelectFilter from './component/select_filter';
import GridProvider from './context/grid_provider';
import GridDataFetcher from './context/grid_data_fetcher';

function App() {
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
    <GridProvider columns={columns} >
      <GridDataFetcher endpoint={'products'} filterAsSearch={true} />
      <Grid>
        <GridSearch>
          <TextFilter column="title" />
          <TextFilter column="brand" />
          <SelectFilter column="category">
            <option value="laptop">laptops</option>
          </SelectFilter>
        </GridSearch>
      </Grid>
    </GridProvider>
  );
}

export default App;

