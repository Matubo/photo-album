import './stagePanel.css';
import imgURL from '../../assets/img/arrow.png';

function StagePanel(props) {
  return (
    <div className="content_heading">
      <div className="content_heading_name">{props.name}</div>
      <img
        className="content_heading_button back_button"
        src={imgURL}
        onClick={() => {
          props.setPreviousStage();
        }}
      />
    </div>
  );
}

export default StagePanel;
