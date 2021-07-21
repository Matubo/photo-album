import PhotoCard from '../photoCard/photoCard';

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
  return DOMArray;
}

function Albums(props) {
  const { albums, setNextStage } = props;
  return getCardsDOMArray(albums, setNextStage);
}

export default Albums;
