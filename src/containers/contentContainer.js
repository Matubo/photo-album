import { React, useState } from 'react';
import { connect } from 'redux';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import ListOfAuthors from '../components/listOfAuthors/listOfAuthors';
import ListOfAlbums from '../components/listOfAlbums/listOfAlbums';
import PhotoList from './photoList';
import store from '../store/store';

function Container(props) {
  let [viewingStage, setViewingStage] = useState(1);

  function setAlbumsStage(id) {
    store.dispatch({ type: 'GETNEWALBUMS', id: id });
    setViewingStage(2);
    console.log(viewingStage);
  }

  function setPhotosStage(id) {
    store.dispatch({ type: 'GETNEWPHOTOS', id: id });
    setViewingStage(3);
    console.log(viewingStage);
  }

  function setPreviousStage() {
    if (viewingStage > 1) {
      setViewingStage(viewingStage - 1);
    }
    console.log(viewingStage);
  }

  if (viewingStage == 1) {
    return (
      <>
        <ListOfAuthors
          store={store}
          setNextStage={setAlbumsStage}
        ></ListOfAuthors>
        <button
          onClick={() => {
            store.dispatch({ type: 'GETNEWAUTHORS' });
          }}
        >
          TEST
        </button>
      </>
    );
  }

  if (viewingStage == 2) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Albums"
        ></StagePanel>
        <ListOfAlbums
          store={store}
          setNextStage={setPhotosStage}
        ></ListOfAlbums>
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
        <PhotoList store={store}></PhotoList>
      </>
    );
  }
}

export default Container;
