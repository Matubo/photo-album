import '../themes/photoCarusel.css';
import { connect } from 'react-redux';
function PhotoCarusel(props) {
  return (
    <div
      className="carusel_body"
      onClick={() => {
        props.callback();
      }}
    >
      <img src={props.photoes[props.id]['url']}></img>
    </div>
  );
}

function stateMap(state) {
  return {
    photoes: state.photoes,
  };
}

export default connect(stateMap)(PhotoCarusel);
