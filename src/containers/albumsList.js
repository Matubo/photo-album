import { connect } from 'react-redux';
import Card from '../components/card';

function Albums(props) {
  console.log(props.state);
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }
  let cardsArray = [];
  for (let i = 0; i < props.albums.length; i++) {
    cardsArray.push(
      <div>
        <Card
          data={props.albums[i]['id']}
          id={props.albums[i]['id']}
          url={props.albums[i]['url']}
          callback={props.callback}
        ></Card>
      </div>
    );
  }
  return <div className="cards_container">{cardsArray}</div>;
}

function stateMap(state) {
  return {
    albums: state.albums,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Albums);
