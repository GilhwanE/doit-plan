import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../modle';
import SingleTodo from './singleTodo';

import './style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completeTodo: Todo[];
  setCompleteTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({
  todos,
  setTodos,
  completeTodo,
  setCompleteTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver} ? 'dragactive' : ''`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <h1 className="todos__heading">해야할일</h1>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver} ? 'dragcomplete' : ''`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="todos__heading">완료한 일</h1>
            {completeTodo.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={completeTodo}
                key={todo.id}
                setTodos={setCompleteTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
