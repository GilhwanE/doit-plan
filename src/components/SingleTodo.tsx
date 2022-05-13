import React from 'react';
import { Todo } from '../modle';
import { AiFillEdit, AiFillDelete, AiFillCheckSquare } from 'react-icons/ai';
import ToDoList from './ToDoList';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <ul className="icon__list">
        <li className="icon">
          <AiFillEdit />
        </li>
        <li className="icon" onClick={() => handleDelete(todo.id)}>
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
