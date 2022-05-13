import React, { useState } from 'react';
import './App.css';
import InputFelid from './components/inputFelid';
import ToDoList from './components/ToDoList';
import { Todo } from './modle';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(''); // 입력창 초기화
    }
  };

  return (
    <div className="App">
      <header className="header">오늘의 할일</header>
      <InputFelid todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
