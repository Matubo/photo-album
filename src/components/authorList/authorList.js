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

function Authors(props) {
  const { fetching, authors, setNextStage } = props;
  return fetching ? (
    <div className="preloader">Ожидайте</div>
  ) : (
    getCardsDOM(authors, setNextStage)
  );
}

export default Authors;
