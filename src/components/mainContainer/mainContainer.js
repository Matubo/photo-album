import React, { useState, useEffect } from 'react';
import store from '../../store/store';
import CardContainer from '../cardContainer/cardContainer';
import './mainContainer.css';

function ContainerTemplate() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
  }, []);
  //I need another solution for body (this solution is shieeeeet)
  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
    } else {
      setTheme('dark');
      document.body.style.backgroundColor = '#292929';
    }
  }

  return (
    <div className="main" data-them={theme}>
      //turn to a'beautiful' element
      <button
        onClick={changeTheme}
        style={{ position: 'absolute', zIndex: 10000 }}
      >
        change style
      </button>
      <div className="main_heading">
        <p className="main_heading_name">Gallery</p>
      </div>
      <CardContainer store={store}></CardContainer>
    </div>
  );
}

export default ContainerTemplate;
