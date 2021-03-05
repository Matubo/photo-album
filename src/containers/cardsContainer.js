import autorsStore from '../stores/authorsStore';
import albumsStore from '../stores/albumsStore';
import photoesStore from '../stores/photoesStore';
import { useState } from 'react';
import '../themes/cardsContainer.css';
import BackPanel from '../components/backPanel';
import AuthorsList from './authorsList';
import AlbumsList from './albumsList';
import PhotoesList from './photoesList';
import PhotoCarusel from './photoCarusel';
import { React } from 'react';

function Container(props) {
  let [stage, setStage] = useState(1);
  let [popUp, setPopUp] = useState({ state: false, id: 0 });
  function authorCallBack(id) {
    console.log(id);
    albumsStore.dispatch({ type: 'GETNEWALBUMS', id: id });
    setStage(2);
  }
  function albumCallBack(id) {
    console.log(id);
    photoesStore.dispatch({ type: 'GETNEWPHOTOES', id: id });
    setStage(3);
  }
  function backButtonCallBack(id) {
    setStage(id);
  }
  function popUpCallBack(id = 0) {
    console.log(id);
    if (popUp.state == false) {
      setPopUp({ state: true, id: id });
    } else {
      setPopUp({ state: false, id: 0 });
    }
  }

  if (stage == 1) {
    return (
      <AuthorsList store={autorsStore} callback={authorCallBack}></AuthorsList>
    );
  }
  if (stage == 2) {
    return (
      <>
        <BackPanel
          callback={backButtonCallBack}
          id={1}
          name="Albums"
        ></BackPanel>
        <AlbumsList store={albumsStore} callback={albumCallBack}></AlbumsList>
      </>
    );
  }
  if (stage == 3) {
    return (
      <>
        <BackPanel
          callback={backButtonCallBack}
          id={2}
          name="Photos"
        ></BackPanel>
        <PhotoesList
          store={photoesStore}
          callback={popUpCallBack}
        ></PhotoesList>
        {popUp.state ? (
          <PhotoCarusel
            callback={popUpCallBack}
            store={photoesStore}
            id={popUp.id}
          ></PhotoCarusel>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Container;
