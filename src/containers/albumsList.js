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
          id={props.albums[i]['id']}
          url={props.albums[i]['url']}
          title={props.albums[i]['title']}
          callback={props.setNextStage}
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
    title: state.title,
  };
}

export default connect(stateMap)(Albums);
