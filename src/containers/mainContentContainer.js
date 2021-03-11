import authorsStore from '../stores/authorsStore';
import albumsStore from '../stores/albumsStore';
import photosStore from '../stores/photosStore';
import { useState } from 'react';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import AuthorsList from './authorsList';
import AlbumsList from './albumsList';
import PhotosList from './photosList';
import { React } from 'react';

function Container(props) {
  let [viewingStage, setViewingStage] = useState(1);

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
    setViewingStage(viewingStage - 1);
  }

  if (viewingStage == 1) {
    return (
      <AuthorsList
        store={authorsStore}
        setNextStage={setAlbumsStage}
      ></AuthorsList>
    );
  }
  if (viewingStage == 2) {
    return (
      <>
        <StagePanel
          backButtonEvent={backButtonEvent}
          name="Albums"
        ></StagePanel>
        <AlbumsList
          store={albumsStore}
          setNextStage={setPhotosStage}
        ></AlbumsList>
      </>
    );
  }
  if (viewingStage == 3) {
    return (
      <>
        <StagePanel
          backButtonEvent={backButtonEvent}
          name="Photos"
        ></StagePanel>
        <PhotosList store={photosStore}></PhotosList>
      </>
    );
  }
}

export default Container;
