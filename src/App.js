import React from 'react';
import './App.css';
import ClassTypeList from './components/ClassTypeList';
import CoachesList from './components/CoachesList';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🥋 MMA Class Management</h1>
        <p>Manage your martial arts academy with ease</p>
      </header>
      <div className="dashboard">
        <ClassTypeList />
        <CoachesList />
        <StudentsList />
      </div>
    </div>
  );
}

export default App;
