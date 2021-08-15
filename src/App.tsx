import SideNavigation from './components/SideNavigation/SideNavigation';
import React from 'react';
import MainBody from 'components/MainBody/MainBody';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <SideNavigation></SideNavigation>
      <MainBody></MainBody>
    </div>
  );
}

export default App;
