import '../themes/baseContainer.css';
import CardContainer from '../components/cardContainer/cardContainer';
import React from 'react';
import store from '../store/store';

function ContainerTemplate() {
  return (
    <div className="main">
      <div className="main_heading">
        <p className="main_heading_name">Gallery</p>
      </div>
      <CardContainer store={store}></CardContainer>
    </div>
  );
}

export default ContainerTemplate;
