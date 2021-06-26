import { React, useState } from 'react';
import authorStore from '../stores/authorStore';
import albumStore from '../stores/albumStore';
import photoStore from '../stores/photoStore';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import ListOfAuthors from '../components/listOfAuthors/listOfAuthors';
import AlbumList from './albumList';
import PhotoList from './photoList';

function Container(props) {
  let [viewingStage, setViewingStage] = useState(1);

  function setAlbumsStage(id) {
    albumStore.dispatch({ type: 'GETNEWALBUMS', id: id });
    setViewingStage(2);
  }

  function setPhotosStage(id) {
    photoStore.dispatch({ type: 'GETNEWPHOTOS', id: id });
    setViewingStage(3);
  }

  function setPreviousStage() {
    if (viewingStage > 1) {
      setViewingStage(viewingStage - 1);
    }
  }

  if (viewingStage == 1) {
    return (
      <ListOfAuthors
        store={authorStore}
        setNextStage={setAlbumsStage}
      ></ListOfAuthors>
    );
  }

  if (viewingStage == 2) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Albums"
        ></StagePanel>
        <AlbumList store={albumStore} setNextStage={setPhotosStage}></AlbumList>
      </>
    );
  }

  if (viewingStage == 3) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Photos"
        ></StagePanel>
        <PhotoList store={photoStore}></PhotoList>
      </>
    );
  }
}

export default Container;
