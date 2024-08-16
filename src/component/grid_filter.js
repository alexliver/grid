import React  from 'react';

export default function GridFilter({children, filterKey, filterValue, onChangeFilter}) {
  const childrenWithProps = React.Children.map(children, child => {
    let value = filterValue;
    if (filterKey !== child.props.column)
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
