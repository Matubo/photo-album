import { useEffect, useState } from 'react';
import switch_arrow from '../img/switch_arrow.png';
import '../themes/switchButton.css';

function NextButton(props) {
  let [nextButtonProperty, setNextButtonProperty] = useState({
    right: '0px',
  });

  useEffect(() => {
    let newProperty = window.innerWidth - document.body.clientWidth + 'px';
    if (newProperty != nextButtonProperty.right) {
      setNextButtonProperty({
        right: newProperty,
      });
    }
  });

  return (
    <div
      className="next_button"
      style={nextButtonProperty}
      onClick={props.callback}
    >
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
