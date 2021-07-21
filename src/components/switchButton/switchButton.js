import { useEffect, useState } from 'react';
import switch_arrow from '../../assets/img/switch_arrow.png';
import './switchButton.css';

function NextButton(props) {
  let [scrollBarIndent, setScrollBarIndent] = useState({
    right: '0px',
  });

  useEffect(() => {
    let newScrollBarIndent =
      window.innerWidth - document.body.clientWidth + 'px';
    setScrollBarIndent({
      right: newScrollBarIndent,
    });
  }, []);

  window.onresize = function () {
    let newScrollBarIndent =
      window.innerWidth - document.body.clientWidth + 'px';
    setScrollBarIndent({
      right: newScrollBarIndent,
    });
  };

  return (
    <div
      className="next_button"
      style={scrollBarIndent}
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

export { NextButton, PreviousButton };
