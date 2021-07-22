import './photoCarousel.css';
import { useState } from 'react';
import { NextButton, PreviousButton } from '../switchButton/switchButton';

function PhotoCarousel(props) {
  let [currentPhotoId, setCurrentPhotoId] = useState(props.id);

  function nextPhoto() {
    if (currentPhotoId < props.photos.length - 1) {
      setCurrentPhotoId(currentPhotoId + 1);
    } else {
      setCurrentPhotoId(0);
    }
  }

  function previousPhoto() {
    if (currentPhotoId > 0) {
      setCurrentPhotoId(currentPhotoId - 1);
    } else {
      setCurrentPhotoId(props.photos.length - 1);
    }
  }

  return (
    <div
      className="carousel_body"
      onClick={(e) => {
        if (e.target.className == 'carousel_body') {
          props.changePopUPStatus();
        }
      }}
    >
      <img
        src={props.photos[currentPhotoId]['url']}
        className="carousel_element"
        onClick={nextPhoto}
        alt="error"
      ></img>
      <NextButton callback={nextPhoto}></NextButton>
      <PreviousButton callback={previousPhoto}></PreviousButton>
      <p className="carousel_title">{props.photos[currentPhotoId]['title']}</p>
    </div>
  );
}

export default PhotoCarousel;
