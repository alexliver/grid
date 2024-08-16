import React, { useState, useEffect } from 'react';

export default function TextFilter({column, value, onChange}) {
  const [isShown, setIsShown] = useState(false);
  const [filterText, setFilterText] = useState(null);

  useEffect(() => {
    setFilterText(value);
  }, [value]);

  const getInputComponent = () => {
    if (!isShown)
      return null;
    const onChangeInput = (event) => {
      onChange(event.target.value);
      setFilterText(event.target.value);
    };
    let val = filterText;
    if (filterText === null)
      val = ''
    return (
      <div className="filter-input-container">
        <input type="text" value={val} onChange={onChangeInput} />
      </div>
    );
  };

  const onClickToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="text-search-comp">
      <div className="toggle-button-wrapper">
        <button onClick={onClickToggle}>
          {column}
        </button>
      </div>
      {getInputComponent()}
    </div>
  );
}

