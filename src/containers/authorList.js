import { connect } from 'react-redux';
import { CardWithoutBackground as Card } from '../components/card';

function getCardsArray(authors, callback) {
  let array = [];
  for (let i = 0; i < authors.length; i++) {
    array.push(
      <Card
        username={authors[i]['username']}
        id={authors[i]['id']}
        callback={callback}
      ></Card>
    );
  }
  return array;
}

function authors(props) {
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }

  return (
    <div className="cards_container">
      {getCardsArray(props.authors, props.setNextStage)}
    </div>
  );
}

function stateMap(state) {
  return {
    authors: state.authors,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(authors);
