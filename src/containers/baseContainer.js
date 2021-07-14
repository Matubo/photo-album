import '../themes/baseContainer.css';
import ContentContainer from './contentContainer';
import React from 'react';
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
