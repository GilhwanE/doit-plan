import React from 'react';
import { Todo } from '../modle';
import { AiFillEdit, AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const handleDone = (id: number) => {};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <ul className="icon__list">
        <li className="icon">
          <AiFillEdit />
        </li>
        <li className="icon">
          <AiFillDelete />
        </li>
        <li className="icon" onClick={() => handleDone(todo.id)}>
          <AiFillCheckSquare />
        </li>
      </ul>
    </form>
  );
};

export default SingleTodo;
