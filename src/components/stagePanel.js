import '../themes/stagePanel.css';
import imgURL from '../img/arrow.png';

function StagePanel(props) {
  return (
    <div className="content_heading">
      <div className="content_heading_name">{props.name}</div>
      <img
        className="content_heading_button"
        src={imgURL}
        onClick={() => {
          props.backButtonEvent();
        }}
      />
    </div>
  );
}

export default StagePanel;
