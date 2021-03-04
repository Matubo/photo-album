import '../themes/baseTemplate.css';
import authorsStore from '../stores/authorsStore';
import CardContainer from './cardsContainer';
import { useState, useEffect } from 'react';

function BaseTemplate() {
  let [preloaderStatus, setPreloaderStatus] = useState(true);
  useEffect(() => {
    authorsStore.dispatch({ type: 'GETNEWAUTHORS' });
  }, []);

  authorsStore.subscribe(() => {
    if (!authorsStore.getState().fetching) {
      setPreloaderStatus(false);
    }
    if (authorsStore.getState().fetching) {
      setPreloaderStatus(true);
    }
  });

  return (
    <div className="main">
      <div className="main_heading">
        <p className="main_heading_name">PhotoGallery{preloaderStatus}</p>
      </div>
      {preloaderStatus ? (
        <div className="preloader">Ожидайте</div>
      ) : (
        <CardContainer></CardContainer>
      )}
    </div>
  );
}

export default BaseTemplate;
