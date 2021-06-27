import { connect } from 'react-redux';
import stateMap from './listOfAlbumsStateMap';
import PhotoCard from '../photoCard/photoCard';
import './listOfAlbums.css';

function getCardsDOMArray(albums, callback) {
  let DOMArray = [];
  for (let i = 0; i < albums.length; i++) {
    DOMArray.push(
      <div>
        <PhotoCard
          id={albums[i]['id']}
          url={albums[i]['url']}
          title={albums[i]['title']}
          callback={callback}
          length={albums[i]['length']}
        ></PhotoCard>
      </div>
    );
  }
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

export default connect(stateMap)(Albums);
