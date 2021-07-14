import { React } from 'react';
import { connect } from 'react-redux';
import '../themes/cardsContainer.css';
import StagePanel from '../components/stagePanel';
import ListOfAuthors from '../components/listOfAuthors/listOfAuthors';
import ListOfAlbums from '../components/listOfAlbums/listOfAlbums';
import PhotoList from './photoList';
import preloaderIMG from '../img/preloader.png';
function Container(props) {
  /* let [stage, setstage] = useState(1); */
  let {
    stage,
    fetching,
    authors,
    albums,
    photos,
    setPhotosStage,
    setAlbumsStage,
    setPreviousStage,
  } = props;

  if (fetching) {
    return <img src={preloaderIMG} className="preloader_img"></img>;
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
    store: store,
  };
}

function dispatchMap(dispatch) {
  return {
    setPhotosStage: (id) => dispatch({ type: 'GETNEWPHOTOS', id: id }),
    setAlbumsStage: (id) => dispatch({ type: 'GETNEWALBUMS', id: id }),
    setPreviousStage: (id) => dispatch({ type: 'SETPREVIOUSSTAGE' }),
  };
}

export default connect(stateMap, dispatchMap)(Container);
