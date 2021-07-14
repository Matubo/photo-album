import { connect } from 'react-redux';
/* import stateMap from './listOfAlbumsStateMap'; */
import PhotoCard from '../photoCard/photoCard';
import './listOfAlbums.css';

function getCardsDOMArray(albums, callback) {
  let DOMArray = [];
  for (let i = 0; i < albums.length; i++) {
    DOMArray.push(
      <PhotoCard
        id={albums[i]['id']}
        url={albums[i]['url']}
        title={albums[i]['title']}
        callback={callback}
        length={albums[i]['length']}
      ></PhotoCard>
    );
  }
  console.log(DOMArray);
  return DOMArray;
}

function Albums(props) {
  const { fetching, albums, setNextStage } = props;
  return fetching ? (
    <div className="preloader">Ожидайте</div>
  ) : (
    <div className="cards-container">
      {getCardsDOMArray(albums, setNextStage)}
    </div>
  );
}

function stateMap(state) {
  return {
    albums: state.albums,
    fetching: state.fetching,
  };
}

export default Albums /* connect(stateMap)(Albums) */;
