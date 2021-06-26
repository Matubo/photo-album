import { connect } from 'react-redux';
import { useState } from 'react';
import PhotoCard from '../components/photoCard/photoCard';
import PhotoCarusel from './photoCarusel';

function getCardsArray(photos, callback) {
  let array = [];
  for (let i = 0; i < photos.length; i++) {
    array.push(
      <PhotoCard
        url={photos[i]['url']}
        id={i}
        title={photos[i]['title']}
        callback={callback}
      ></PhotoCard>
    );
  }
  return array;
}

function Photos(props) {
  let [popUPStatus, setPopUPStatus] = useState({ displayed: false, id: 0 });

  function changePopUPStatus(id = 0) {
    console.log(id);
    if (popUPStatus.displayed == false) {
      setPopUPStatus({ displayed: true, id: id });
    } else {
      setPopUPStatus({ displayed: false, id: 0 });
    }
  }

  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }

  return (
    <>
      <div className="cards_container">
        {getCardsArray(props.photos, changePopUPStatus)}
      </div>
      {popUPStatus.displayed ? (
        <PhotoCarusel
          changePopUPStatus={changePopUPStatus}
          photos={props.photos}
          id={popUPStatus.id}
        ></PhotoCarusel>
      ) : (
        <></>
      )}
    </>
  );
}

function stateMap(state) {
  return {
    photos: state.photos,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Photos);
