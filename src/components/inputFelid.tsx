import React from 'react';
import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // 아무것도 반환하지 않는다.
}

const InputFelid = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="오늘 뭐 하지?"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Enter
      </button>
    </form>
  );
};

export default InputFelid;
