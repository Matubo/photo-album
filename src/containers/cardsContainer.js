import authorsStore from '../stores/authorsStore';
import albumsStore from '../stores/albumsStore';
import photosStore from '../stores/photosStore';
import { useState } from 'react';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import AuthorsList from './authorsList';
import AlbumsList from './albumsList';
import PhotosList from './photosList';
import PhotoCarusel from './photoCarusel';
import { React } from 'react';

function Container(props) {
  let [viewingStage, setViewingStage] = useState(1);
  let [popUPStatus, setPopUPState] = useState({ displayed: false, id: 0 });
  function setAlbumsStage(id) {
    albumsStore.dispatch({ type: 'GETNEWALBUMS', id: id });
    setViewingStage(2);
  }
  function setPhotosStage(id) {
    console.log(id);
    photosStore.dispatch({ type: 'GETNEWPHOTOS', id: id });
    setViewingStage(3);
  }
  function backButtonEvent(id) {
    setViewingStage(id);
  }
  function setPopUPStatus(id = 0) {
    console.log(id);
    if (popUPStatus.displayed == false) {
      setPopUPState({ displayed: true, id: id });
    } else {
      setPopUPState({ displayed: false, id: 0 });
    }
  }

  if (viewingStage == 1) {
    return (
      <AuthorsList store={authorsStore} callback={setAlbumsStage}></AuthorsList>
    );
  }
  if (viewingStage == 2) {
    return (
      <>
        <StagePanel
          callback={backButtonEvent}
          id={1}
          name="Albums"
        ></StagePanel>
        <AlbumsList store={albumsStore} callback={setPhotosStage}></AlbumsList>
      </>
    );
  }
  if (viewingStage == 3) {
    return (
      <>
        <StagePanel
          callback={backButtonEvent}
          id={2}
          name="Photos"
        ></StagePanel>
        <PhotosList store={photosStore} callback={setPopUPStatus}></PhotosList>
        {popUPStatus.displayed ? (
          <PhotoCarusel
            callback={setPopUPStatus}
            store={photosStore}
            id={popUPStatus.id}
          ></PhotoCarusel>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Container;
