import '../themes/baseTemplate.css';
import authorsStore from '../stores/authorsStore';
import MainContentContainer from './mainContentContainer';
import React, { useState, useEffect } from 'react';
import preloaderIMG from '../img/preloader.png';

function BaseTemplate() {
  let [preloaderStatus, setPreloaderStatus] = useState({ displayed: true });
  useEffect(() => {
    authorsStore.dispatch({ type: 'GETNEWAUTHORS' });
  }, []);

  authorsStore.subscribe(() => {
    if (!authorsStore.getState().fetching) {
      setPreloaderStatus({ displayed: false });
    }
    if (authorsStore.getState().fetching) {
      setPreloaderStatus({ displayed: true });
    }
  });

  return preloaderStatus.displayed ? (
    <div className="preloader">
      <img src={preloaderIMG} className="preloader_img"></img>
    </div>
  ) : (
    <div className="main">
      <div className="main_heading">
        <p className="main_heading_name">PhotoGallery</p>
      </div>
      <MainContentContainer></MainContentContainer>
    </div>
  );
}

export default BaseTemplate;
