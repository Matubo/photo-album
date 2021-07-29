import React, { useState, useEffect } from 'react';
import store from '../../store/store';
import CardContainer from '../cardContainer/cardContainer';
import ThemeSwitcher from '../themeSwitcher/themeSwitcher';
import lightIMG from '../../assets/img/sun.png';
import darkIMG from '../../assets/img/moon.png';
import './mainContainer.css';

function ContainerTemplate() {
  const [theme, setTheme] = useState({ state: 'light', img: lightIMG });

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
  }, []);
  //I need another solution for body (this solution is shieeeeet)
  function changeTheme() {
    if (theme.state === 'dark') {
      setTheme({ state: 'light', img: lightIMG });
      document.body.style.backgroundColor = '#fff';
    } else {
      setTheme({ state: 'dark', img: darkIMG });
      document.body.style.backgroundColor = '#292929';
    }
  }

  return (
    <div className="main" data-them={theme.state}>
      <div className="main_heading">
        <ThemeSwitcher callback={changeTheme} img={theme.img}></ThemeSwitcher>
        <p className="main_heading_name">Gallery</p>
      </div>
      <CardContainer store={store}></CardContainer>
    </div>
  );
}

export default ContainerTemplate;
