import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import InputFelid from './components/inputFelid';
import ToDoList from './components/ToDoList';
import { Todo } from './modle';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completeTodo, setCompleteTodos] = useState<Todo[]>([]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completeTodo;

    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompleteTodos(complete);
    setTodos(active);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(''); // 입력창 초기화
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header className="header">오늘의 할일</header>
        <InputFelid todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          completeTodo={completeTodo}
          setCompleteTodos={setCompleteTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
