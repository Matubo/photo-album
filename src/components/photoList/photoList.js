import { useState } from 'react';
import CardWithPhoto from '../cardWithPhoto/cardWithPhoto';
import PhotoCarusel from '../photoCarousel/photoCarousel';

function getCardsArray(photos, callback) {
  let array = [];
  for (let i = 0; i < photos.length; i++) {
    array.push(
      <CardWithPhoto
        url={photos[i]['url']}
        id={i}
        title={photos[i]['title']}
        callback={callback}
      ></CardWithPhoto>
    );
  }
  return array;
}

function Photos(props) {
  const { photos } = props;
  let [popUPStatus, setPopUPStatus] = useState({ displayed: false, id: 0 });

  function changePopUPStatus(id = 0) {
    console.log(id);
    if (popUPStatus.displayed == false) {
      setPopUPStatus({ displayed: true, id: id });
    } else {
      setPopUPStatus({ displayed: false, id: 0 });
    }
  }

  return (
    <>
      {getCardsArray(photos, changePopUPStatus)}
      {popUPStatus.displayed ? (
        <PhotoCarusel
          changePopUPStatus={changePopUPStatus}
          photos={photos}
          id={popUPStatus.id}
        ></PhotoCarusel>
      ) : (
        <></>
      )}
    </>
  );
}

export default Photos;
