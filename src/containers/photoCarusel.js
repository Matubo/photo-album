import '../themes/photoCarusel.css';
import { useState } from 'react';
import { NextButton, PreviousButton } from '../components/switchButton';

function PhotoCarusel(props) {
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
      className="carusel_body"
      onClick={(e) => {
        if (e.target.className == 'carusel_body') {
          props.changePopUPStatus();
        }
      }}
    >
      <img
        src={props.photos[currentPhotoId]['url']}
        className="carusel_element"
        onClick={nextPhoto}
        alt="error"
      ></img>
      <NextButton callback={nextPhoto}></NextButton>
      <PreviousButton callback={previousPhoto}></PreviousButton>
      <p className="carusel_title">{props.photos[currentPhotoId]['title']}</p>
    </div>
  );
}

export default PhotoCarusel;
