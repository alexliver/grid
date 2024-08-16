import Grid from './component/grid';
import GridFilter from './component/grid_filter';
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
        <GridFilter>
          <TextFilter column="title" />
          <TextFilter column="brand" />
          <SelectFilter column="category">
            <option value="laptop">laptops</option>
          </SelectFilter>
        </GridFilter>
      </Grid>
    </GridProvider>
  );
}

export default App;

