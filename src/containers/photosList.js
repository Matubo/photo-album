import { connect } from 'react-redux';
import Card from '../components/card';

function Photos(props) {
  console.log(props.state);
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }
  let cardsArray = [];
  for (let i = 0; i < props.photos.length; i++) {
    cardsArray.push(
      <Card
        url={props.photos[i]['url']}
        data={i}
        callback={props.callback}
      ></Card>
    );
  }
  return <div className="cards_container">{cardsArray}</div>;
}

function stateMap(state) {
  return {
    photos: state.photos,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Photos);
