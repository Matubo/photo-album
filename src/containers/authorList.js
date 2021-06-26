import { connect } from 'react-redux';
import CardWithoutBackground from '../components/authorCard/authorCard';

function getCardsArray(authors, callback) {
  let array = [];
  for (let i = 0; i < authors.length; i++) {
    array.push(
      <CardWithoutBackground
        author={authors[i]['username']}
        authorId={authors[i]['id']}
        callback={callback}
      ></CardWithoutBackground>
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
