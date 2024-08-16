import React, { useState, useEffect } from 'react';
import Filter from './filter'

export default function SelectFilter({column, value, onChange, children}) {
  const [filterText, setFilterText] = useState(null);

  useEffect(() => {
    setFilterText(value);
  }, [value]);

  const getInputComponent = () => {
    const onChangeInput = (event) => {
      onChange(event.target.value);
      setFilterText(event.target.value);
    };
    let val = filterText;
    if (filterText === null)
      val = ''
    return (
      <select value={val} onChange={onChangeInput} >
        <option value="">all</option>
        {children}
      </select>
    );
  };

  return (
    <Filter column={column}>
      {getInputComponent()}
    </Filter>
  );
}


