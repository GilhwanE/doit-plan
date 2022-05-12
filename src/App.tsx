import React from 'react';
import './App.css';
import InputFelid from './components/inputFelid';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">오늘의 할일</header>
      <InputFelid />
    </div>
  );
};

export default App;
