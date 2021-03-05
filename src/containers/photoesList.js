import { connect } from 'react-redux';
import Card from '../components/card';

function Photoes(props) {
  console.log(props.state);
  if (props.fetching) {
    return <div className="preloader">Ожидайте</div>;
  }
  let cardsArray = [];
  for (let i = 0; i < props.photoes.length; i++) {
    cardsArray.push(
      <Card
        url={props.photoes[i]['url']}
        data={i}
        callback={props.callback}
      ></Card>
    );
  }
  return <div className="cards_container">{cardsArray}</div>;
}

function stateMap(state) {
  return {
    photoes: state.photoes,
    id: state.id,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Photoes);
