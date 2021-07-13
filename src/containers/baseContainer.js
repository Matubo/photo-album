import '../themes/baseContainer.css';
import ContentContainer from './contentContainer';
import React, { useState, useEffect } from 'react';
import preloaderIMG from '../img/preloader.png';
import store from '../store/store';

function ContainerTemplate() {
  let [preloaderStatus, setPreloaderStatus] = useState({ displayed: true });
  let [viewingStage, setViewingStage] = useState(1);
  useEffect(() => {
    store.dispatch({ type: 'GETNEWAUTHORS' });
  }, []);

  store.subscribe(() => {
    if (!store.getState().fetching) {
      setPreloaderStatus({ displayed: false });
    }
    if (store.getState().fetching) {
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
      <ContentContainer
        stage={viewingStage}
        setStage={setViewingStage}
        store={store}
      ></ContentContainer>
    </div>
  );
}

export default ContainerTemplate;
