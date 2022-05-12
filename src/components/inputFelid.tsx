import React from 'react';
import './style.css';
const InputFelid = () => {
  return (
    <form className="input">
      <input type="input" placeholder="오늘 뭐 하지?" className="input__box" />
      <button className="input__submit" type="submit">
        🔽
      </button>
    </form>
  );
};

export default InputFelid;
