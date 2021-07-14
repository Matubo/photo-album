import '../themes/baseContainer.css';
import ContentContainer from './contentContainer';
import React, { useState, useEffect } from 'react';
import preloaderIMG from '../img/preloader.png';
import store from '../store/store';

function ContainerTemplate() {
  return (
    <div className="main">
      <div className="main_heading">
        <p className="main_heading_name">PhotoGallery</p>
      </div>
      <ContentContainer store={store}></ContentContainer>
    </div>
  );
}

export default ContainerTemplate;
