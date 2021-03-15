import { connect } from 'react-redux';
import { useState } from 'react';
import Card from '../components/card';
import PhotoCarusel from './photoCarusel';

function getCardsArray(photos, callback) {
  let array = [];
  for (let i = 0; i < photos.length; i++) {
    array.push(
      <Card
        url={photos[i]['url']}
        id={i}
        title={photos[i]['title']}
        callback={callback}
      ></Card>
    );
  }
  return array;
}

function Photos(props) {
  let [popUPStatus, setPopUPState] = useState({ displayed: false, id: 0 });

  function setPopUPStatus(id = 0) {
    console.log(id);
    if (popUPStatus.displayed == false) {
      setPopUPState({ displayed: true, id: id });
    } else {
      setPopUPState({ displayed: false, id: 0 });
    }
  }

  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }

  return (
    <>
      <div className="cards_container">
        {getCardsArray(props.photos, setPopUPStatus)}
      </div>
      {popUPStatus.displayed ? (
        <PhotoCarusel
          setPopUpStatus={setPopUPStatus}
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
