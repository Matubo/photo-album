import autorsStore from '../stores/autorsStore';
import Card from '../components/card';
import '../themes/cardsContainer.css';
import { ReactFragment, useEffect, useState } from 'react';

function Container() {
  let [inset, insetset] = useState(1);
  useEffect(() => {
    autorsStore.dispatch({ type: 'GETNEWAUTORS' });
  }, []);
  let newComponents = [];
  autorsStore.subscribe(() => {
    if (autorsStore.getState() != undefined) {
      let data = autorsStore.getState();
      console.log(data);

      /*     if (!autorsStore.getState().fetching) {
      let data = autorsStore.getState();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]['username']);
        newComponents.push(<Card data={data[i]}></Card>);
      }
      insetset(0);
    } */
    }
  });
  return (
    <div className="cards_container">
      {inset ? <div>Ожидайте</div> : newComponents}
    </div>
  );
}

export default Container;
