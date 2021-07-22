import './stagePanel.css';
import imgURL from '../../assets/img/arrow.png';

function StagePanel(props) {
  const { name, setPreviousStage } = props;
  return (
    <div className="content_heading">
      <div className="content_heading_name">{name}</div>
      <img
        className="content_heading_button back_button"
        src={imgURL}
        onClick={() => {
          setPreviousStage();
        }}
        alt="Houston, we have a problem"
      />
    </div>
  );
}

export default StagePanel;
