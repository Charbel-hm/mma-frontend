import React from 'react';
import ClassTypeList from './components/ClassTypeList';
import CoachesList from './components/CoachesList';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className="App">
      <h1>MMA Class Management</h1>
      <ClassTypeList />
      <CoachesList />
      <StudentsList />
    </div>
  );
}

export default App;
