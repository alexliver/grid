import React, { useState, useEffect } from 'react';
import Loading from './loading';
import {fetchData} from '../lib/data';
import ReactPaginate from 'react-paginate';

export default function Page({columns, endpoint}) {
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const updateData = async () => {
    setIsLoading(true);
    const data = await fetchData(endpoint, pageSize, pageNum);
    setData(data[endpoint]);
    setTotal(data.total);
    setIsLoading(false);
  };

  useEffect(() => {
    updateData();
  }, [pageNum, pageSize]);


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
    const totalPages = Math.ceil(total/pageSize);
    return (
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={onClickPaging}
        containerClassName="pagination"
        activeClassName="active"
      />
    );
  };

  return (
    <div>
      {isLoading?<Loading />:null}
      {getPageSizeSelectComponent()}
      {getTableComponent()}
      {getPagingComponent()}
    </div>
  );
}
