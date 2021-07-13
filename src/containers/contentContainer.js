import { React } from 'react';
import { connect } from 'react-redux';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import ListOfAuthors from '../components/listOfAuthors/listOfAuthors';
import ListOfAlbums from '../components/listOfAlbums/listOfAlbums';
import PhotoList from './photoList';

function Container(props) {
  /* let [stage, setstage] = useState(1); */
  let { stage, setStage, authors, albums, photos, getPhotos, getAlbums } =
    props;
  function setAlbumsStage(id) {
    getAlbums(id);
    setStage(2);
    console.log(stage);
  }

  function setPhotosStage(id) {
    getPhotos(id);
    setStage(3);
    console.log(stage);
  }

  function setPreviousStage() {
    if (stage > 1) {
      setStage(stage - 1);
    }
    console.log(stage);
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
    authors: store.authors,
    albums: store.albums,
    photos: store.photos,
    fetching: store.fetching,
  };
}

function dispatchMap(dispatch) {
  return {
    getPhotos: (id) => dispatch({ type: 'GETNEWPHOTOS', id: id }),
    getAlbums: (id) => dispatch({ type: 'GETNEWALBUMS', id: id }),
  };
}

export default connect(stateMap, dispatchMap)(Container);
