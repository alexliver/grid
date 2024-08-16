import React, { useState, useEffect } from 'react';
import Filter from './filter'

export default function TextFilter({column, value, onChange}) {
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
      <input type="text" value={val} onChange={onChangeInput} />
    );
  };

  return (
    <Filter column={column} >
      {getInputComponent()}
    </Filter>
  );
}

