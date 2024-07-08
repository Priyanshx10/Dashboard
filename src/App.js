import React from 'react';
import './app.css';
import Sidebar from './Component/SideBar Section/Sidebar'; 
import Body from './Component/Body Section/Body';

const App = () => {
  return (
    <div className='container flex'>
      <Sidebar />
      <Body/>
    </div>
  );
};

export default App;
