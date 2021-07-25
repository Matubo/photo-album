import { useEffect, useState } from 'react';
import switch_arrow from '../../assets/img/switch_arrow.png';
import './switchButton.css';

function NextButton(props) {
  const { callback } = props;

  let [scrollBarIndent, setScrollBarIndent] = useState({
    right: '0px',
  });

  function setNewRightIdent() {
    let newScrollBarIndent =
      window.innerWidth - document.body.clientWidth + 'px';
    setScrollBarIndent({
      right: newScrollBarIndent,
    });
  }

  useEffect(() => {
    setNewRightIdent();
  }, []);

  window.onresize = function () {
    setNewRightIdent();
  };

  return (
    <div className="next_button" style={scrollBarIndent} onClick={callback}>
      <img src={switch_arrow} alt="->"></img>
    </div>
  );
}

function PreviousButton(props) {
  return (
    <div className="previous_button" onClick={props.callback}>
      <img src={switch_arrow} alt="<-"></img>
    </div>
  );
}

export { NextButton, PreviousButton };
