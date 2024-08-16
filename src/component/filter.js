import React, { useState, useEffect } from 'react';

export default function Filter({column, children}) {
  const [isShown, setIsShown] = useState(false);

  const getInputComponent = () => {
    if (!isShown)
      return null;
    return (
      <div className="filter-input-container">
        {children}
      </div>
    );
  };

  const onClickToggle = () => {
    setIsShown(!isShown);
  };

  let buttonWrapperClassName = "toggle-button-wrapper";
  if (isShown)
    buttonWrapperClassName += " active";
  return (
    <div className="text-search-comp">
      <div className={buttonWrapperClassName}>
        <button onClick={onClickToggle}>
          {column}
        </button>
      </div>
      {getInputComponent()}
    </div>
  );
}


