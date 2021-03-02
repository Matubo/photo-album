import autorsStore from '../stores/autorsStore';
import Card from '../components/card';
import '../themes/cardsContainer.css';
import { ReactFragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Container(props) {
  console.log(props);
  useEffect(() => {
    autorsStore.dispatch({ type: 'GETNEWAUTORS' });
  }, []);
  let [inset, insetset] = useState(1);
  useEffect(() => {
    if (!autorsStore.getState().fetching) {
    }
  });
  return (
    <div className="cards_container">
      {props.fetching ? (
        <div>Ожидайте {inset}</div>
      ) : (
        <Card data={props.authors[0]}></Card>
      )}
    </div>
  );
}

function stateMap(state) {
  return {
    authors: state.authors,
    fetching: state.fetching,
  };
}

export default connect(stateMap)(Container);
