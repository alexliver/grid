import React, { useContext } from 'react';
import Loading from './loading';
import Search from './search';
import ReactPaginate from 'react-paginate';
import GridContext from '../context/grid_context';

export default function Page({children}) {
  const { 
    data, 
    updateFilter, 
    updateSearch, 
    setPageNum, 
    setPageSize, 
    pageSize, 
    pageNum, 
    isLoading, 
    columns, 
    totalPages, 
    searchText,
    filterKey,
    filterValue,
  } = useContext(GridContext);

  const getTableHeaderComponent = () => {
    const cells = columns.map(col => (
      <td>{col}</td>
    ));
    return (<tr>{cells}</tr>);
  };

  const getTableBodyComponent = () => {
    return data.map(item => {
      const tds = columns.map(col => (
        <td>{item[col]}</td>
      ));
      return (<tr>{tds}</tr>);
    });
  };

  const getTableComponent = () => {
    return (
      <table>
        <thead>
          {getTableHeaderComponent()}
        </thead>
        <tbody>
          {getTableBodyComponent()}
        </tbody>
      </table>
    )
  };

  const getPageSizeSelectComponent = () => {
    const onChangePageSize = (event) => {
      setPageSize(event.target.value);
    };
    return (
      <div>
        <select value={pageSize} onChange={onChangePageSize}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    );
  };

  const getPagingComponent = () => {
    const onClickPaging = (event) => {
      setPageNum(event.selected);
    };
    return (
      <ReactPaginate
        pageCount={totalPages}
        forcePage={pageNum}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={onClickPaging}
        containerClassName="pagination"
        activeClassName="active"
      />
    );
  };

  const getFilterComponent = () => {
    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, { filterKey, filterValue, onChangeFilter: updateFilter });
    });
    return childrenWithProps;
  };

  const getSearchComponent = () => {
    return (
      <div>
        <Search searchText={searchText} onChange={updateSearch} />
      </div>
    );
  };

  return (
    <div>
      {isLoading?<Loading />:null}
      {getPageSizeSelectComponent()}
      {getSearchComponent()}
      {getFilterComponent()}
      {getTableComponent()}
      {getPagingComponent()}
    </div>
  );
}
