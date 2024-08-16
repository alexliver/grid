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
      <input type="text" value={val} onChange={onChangeInput} />
    );
  };

  const onClickToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={onClickToggle}>
        {column}
      </button>
      {getInputComponent()}
    </div>
  );
}

