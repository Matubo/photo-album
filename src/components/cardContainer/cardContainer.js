import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import './cardContainer.css';
import StagePanel from '../stagePanel/stagePanel';
import AuthorList from '../authorList/authorList';
import AlbumsList from '../albumList/albumList';
import PhotoList from '../photoList/photoList';
import preloaderIMG from '../../assets/img/preloader.png';

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
      <div className="card_container">
        <AuthorList
          authors={authors}
          setNextStage={setAlbumsStage}
        ></AuthorList>
      </div>
    );
  }

  if (stage == 2) {
    return (
      <>
        <StagePanel
          setPreviousStage={setPreviousStage}
          name="Albums"
        ></StagePanel>
        <div className="card_container">
          <AlbumsList
            albums={albums}
            setNextStage={setPhotosStage}
          ></AlbumsList>
        </div>
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
        <div className="card_container">
          <PhotoList photos={photos}></PhotoList>
        </div>
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
