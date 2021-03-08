import '../themes/photoCarusel.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { NextButton, PreviousButton } from '../components/switchButton';

function PhotoCarusel(props) {
  let [photoID, setPhotoID] = useState(props.id);
  function nextPhoto() {
    console.log('next ' + photoID);
    if (photoID < props.photos.length - 1) {
      setPhotoID(photoID + 1);
    } else {
      setPhotoID(0);
    }
  }
  function previousPhoto() {
    console.log('prev ' + photoID);
    if (photoID > 0) {
      setPhotoID(photoID - 1);
    } else {
      setPhotoID(props.photos.length - 1);
    }
  }
  return (
    <div
      className="carusel_body"
      onClick={(e) => {
        if (e.target.className == 'carusel_body') {
          props.callback();
        }
      }}
    >
      <img
        src={props.photos[photoID]['url']}
        className="carusel_element"
        onClick={nextPhoto}
      ></img>
      <NextButton callback={nextPhoto}></NextButton>
      <PreviousButton callback={previousPhoto}></PreviousButton>
    </div>
  );
}

function stateMap(state) {
  return {
    photos: state.photos,
  };
}

export default connect(stateMap)(PhotoCarusel);
