import { connect } from 'react-redux';
import CardWithoutBackground from '../authorCard/authorCard';

function getCardsDOM(authors, callback) {
  let DOMArray = [];
  for (let i = 0; i < authors.length; i++) {
    DOMArray.push(
      <CardWithoutBackground
        author={authors[i]['username']}
        authorId={authors[i]['id']}
        callback={callback}
      ></CardWithoutBackground>
    );
  }
  return DOMArray;
}

function authors(props) {
  const { fetching, authors, setNextStage } = props;

  return fetching ? (
    <div className="preloader">Ожидайте</div>
  ) : (
    <div className="cards_container">{getCardsDOM(authors, setNextStage)}</div>
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
