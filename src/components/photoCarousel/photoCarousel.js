import './photoCarousel.css';
import { useState } from 'react';
import { NextButton, PreviousButton } from '../switchButton/switchButton';

function PhotoCarousel(props) {
  const { id, photos, changePopUPStatus } = props;
  let [currentPhotoId, setCurrentPhotoId] = useState(id);

  function nextPhoto() {
    if (currentPhotoId < photos.length - 1) {
      setCurrentPhotoId(currentPhotoId + 1);
    } else {
      setCurrentPhotoId(0);
    }
  }

  function previousPhoto() {
    if (currentPhotoId > 0) {
      setCurrentPhotoId(currentPhotoId - 1);
    } else {
      setCurrentPhotoId(photos.length - 1);
    }
  }

  return (
    <div
      className="carousel_body"
      onClick={(e) => {
        if (e.target.className == 'carousel_body') {
          changePopUPStatus();
        }
      }}
    >
      <img
        src={photos[currentPhotoId]['url']}
        className="carousel_element"
        onClick={nextPhoto}
        alt="error"
      ></img>
      <NextButton callback={nextPhoto}></NextButton>
      <PreviousButton callback={previousPhoto}></PreviousButton>
      <p className="carousel_title">{photos[currentPhotoId]['title']}</p>
    </div>
  );
}

export default PhotoCarousel;
