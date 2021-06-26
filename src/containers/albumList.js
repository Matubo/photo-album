import { connect } from 'react-redux';
import PhotoCard from '../components/photoCard/photoCard';

function getCardsArray(albums, callback) {
  let array = [];
  for (let i = 0; i < albums.length; i++) {
    array.push(
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
  return array;
}

function Albums(props) {
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }

  return (
    <div className="cards_container albums_cards_container">
      {getCardsArray(props.albums, props.setNextStage)}
    </div>
  );
}

function stateMap(state) {
  return {
    albums: state.albums,
    fetching: state.fetching,
    title: state.title,
  };
}

export default connect(stateMap)(Albums);
