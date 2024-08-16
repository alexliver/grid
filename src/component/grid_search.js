import React, { useState, useEffect } from 'react';

export default function GridSearch({children, filterKey, filterValue, onChangeFilter}) {
  const childrenWithProps = React.Children.map(children, child => {
    let value = filterValue;
    if (filterKey != child.props.column)
      value = null;
    const onChangeInput = (val) => {
      onChangeFilter(child.props.column, val);
    };
    return React.cloneElement(child, { onChange: onChangeInput, value });
  });
  return (
    <div className="filters-comp">{childrenWithProps}</div>
  );
}
