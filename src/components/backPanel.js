import '../themes/backPanel.css';
import imgURL from '../img/arrow.png';

function BackPanel(props) {
  return (
    <div className="content_heading">
      <div className="content_heading_name">{props.name}</div>
      <img
        className="content_heading_button"
        src={imgURL}
        onClick={() => {
          props.callback(props.id);
        }}
      />
    </div>
  );
}

export default BackPanel;
