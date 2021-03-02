import '../themes/baseTemplate.css';
import autorsStore from '../stores/autorsStore';
import CardContainer from './cardsContainer';
import { useState, useEffect } from 'react';

function BaseTemplate() {
  return (
    <div className="main">
      <div className="main_heading">
        <p className="main_heading_name">PhotoGallery</p>
      </div>
      <CardContainer></CardContainer>
    </div>
  );
}

export default BaseTemplate;
