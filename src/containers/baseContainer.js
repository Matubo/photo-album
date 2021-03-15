import '../themes/baseContainer.css';
import authorStore from '../stores/authorStore';
import ContentContainer from './contentContainer';
import React, { useState, useEffect } from 'react';
import preloaderIMG from '../img/preloader.png';

function ContainerTemplate() {
  let [preloaderStatus, setPreloaderStatus] = useState({ displayed: true });
  useEffect(() => {
    authorStore.dispatch({ type: 'GETNEWAUTHORS' });
  }, []);

  authorStore.subscribe(() => {
    if (!authorStore.getState().fetching) {
      setPreloaderStatus({ displayed: false });
    }
    if (authorStore.getState().fetching) {
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
      <ContentContainer></ContentContainer>
    </div>
  );
}

export default ContainerTemplate;
