import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import ListOfAuthors from '../components/listOfAuthors/listOfAuthors';
import ListOfAlbums from '../components/listOfAlbums/listOfAlbums';
import PhotoList from './photoList';
import preloaderIMG from '../img/preloader.png';

function Container(props) {
  const {
    stage,
    fetching,
    authors,
    albums,
    photos,
    setAuthorsStage,
    setPhotosStage,
    setAlbumsStage,
    setPreviousStage,
  } = props;

  useEffect(() => {
    setAuthorsStage();
  }, []);

  if (fetching) {
    return (
      <div className="preloader">
        <img
          src={preloaderIMG}
          className="preloader_img"
          alt="Загрузка..."
        ></img>
      </div>
    );
  }

  if (stage == 1) {
    return (
      <>
        <ListOfAuthors
          authors={authors}
          setNextStage={setAlbumsStage}
        ></ListOfAuthors>
      </>
    );
  }

  if (stage == 2) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Albums"
        ></StagePanel>
        <ListOfAlbums
          albums={albums}
          setNextStage={setPhotosStage}
        ></ListOfAlbums>
      </>
    );
  }

  if (stage == 3) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Photos"
        ></StagePanel>
        <PhotoList photos={photos}></PhotoList>
      </>
    );
  }
}

function stateMap(store) {
  return {
    stage: store.stage,
    authors: store.authors,
    albums: store.albums,
    photos: store.photos,
    fetching: store.fetching,
  };
}

function dispatchMap(dispatch) {
  return {
    setPhotosStage: (id) => dispatch({ type: 'GETNEWPHOTOS', id: id }),
    setAlbumsStage: (id) => dispatch({ type: 'GETNEWALBUMS', id: id }),
    setAuthorsStage: () => dispatch({ type: 'GETNEWAUTHORS' }),
    setPreviousStage: () => dispatch({ type: 'SETPREVIOUSSTAGE' }),
  };
}

export default connect(stateMap, dispatchMap)(Container);
