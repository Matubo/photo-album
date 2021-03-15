import '../themes/card.css';

function Card(props) {
  if (props.username != undefined) {
    return (
      <div
        className="card"
        onClick={() => {
          props.callback(props.id);
        }}
      >
        <p className="card_autor">{props.username}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div
          className="card_img"
          style={{
            backgroundImage: `url(${props.url})`,
          }}
          onClick={() => {
            props.callback(props.id);
          }}
        ></div>
        <p className="card_title">{props.title}</p>
      </div>
    );
  }
}

export default Card;
