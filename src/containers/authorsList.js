import { connect } from 'react-redux';
import Card from '../components/card';

function Autors(props) {
  console.log(props.state);
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }
  let cardsArray = [];
  for (let i = 0; i < props.authors.length; i++) {
    cardsArray.push(
      <Card
        data={props.authors[i]['username']}
        id={props.authors[i]['id']}
        callback={props.callback}
      ></Card>
    );
  }
  return <div className="cards_container">{cardsArray}</div>;
}

function stateMap(state) {
  return {
    authors: state.authors,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Autors);
