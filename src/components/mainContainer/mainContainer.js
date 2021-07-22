import React from 'react';
import store from '../../store/store';
import CardContainer from '../cardContainer/cardContainer';
import './mainContainer.css';

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
