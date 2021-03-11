import { connect } from 'react-redux';
import { useState } from 'react';
import Card from '../components/card';
import PhotoCarusel from './photoCarusel';

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

  let cardsArray = [];
  for (let i = 0; i < props.photos.length; i++) {
    cardsArray.push(
      <Card
        url={props.photos[i]['url']}
        id={i}
        title={props.photos[i]['title']}
        callback={setPopUPStatus}
      ></Card>
    );
  }

  return (
    <>
      <div className="cards_container">{cardsArray}</div>
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
