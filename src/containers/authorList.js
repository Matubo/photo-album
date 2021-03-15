import { connect } from 'react-redux';
import Card from '../components/card';

function getCardsArray(autors, callback) {
  let array = [];
  for (let i = 0; i < autors.length; i++) {
    array.push(
      <Card
        username={autors[i]['username']}
        id={autors[i]['id']}
        callback={callback}
      ></Card>
    );
  }
  return array;
}

function Autors(props) {
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }

  return (
    <div className="cards_container">
      {getCardsArray(props.autors, props.setNextStage)}
    </div>
  );
}

function stateMap(state) {
  return {
    autors: state.authors,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Autors);
