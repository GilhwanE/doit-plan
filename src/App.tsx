import React, { useState } from 'react';
import './App.css';
import InputFelid from './components/inputFelid';
import { Todo } from './modle';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <header className="header">오늘의 할일</header>
      <InputFelid todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
