import React, { useState, useEffect } from 'react';

export default function Search({searchText, onChange}) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
  }, [searchText]);

  const getInputComponent = () => {
    if (!isShown)
      return null;
    const onChangeInput = (event) => {
      onChange(event.target.value);
    };
    return (
      <input type="text" value={searchText} onChange={onChangeInput} />
    );
  };

  const onClickToggle = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={onClickToggle}>
        &#128269; 
      </button>
      {getInputComponent()}
    </div>
  );
}

