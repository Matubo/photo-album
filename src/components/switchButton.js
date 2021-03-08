import switch_arrow from '../img/switch_arrow.png';
import '../themes/switchButton.css';

function NextButton(props) {
  return (
    <div className="next_button" onClick={props.callback}>
      <img src={switch_arrow}></img>
    </div>
  );
}

function PreviousButton(props) {
  return (
    <div className="previous_button" onClick={props.callback}>
      <img src={switch_arrow}></img>
    </div>
  );
}

export { NextButton as NextButton, PreviousButton as PreviousButton };
