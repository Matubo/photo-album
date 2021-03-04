import '../themes/card.css';

function Card(props) {
  if (props.url != undefined) {
    return (
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="card"
        onClick={() => {
          props.callback(props.id);
        }}
      >
        <p>{props.id}</p>
      </div>
    );
  }
  return (
    <div
      className="card"
      onClick={() => {
        props.callback(props.id);
      }}
    >
      <p>{props.data}</p>
    </div>
  );
}

export default Card;
