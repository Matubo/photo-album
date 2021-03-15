import '../themes/card.css';

function CardWithoutBackground(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.callback(props.id);
      }}
    >
      <p className="card_author">{props.username}</p>
    </div>
  );
}

function CardWithBackground(props) {
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

export { CardWithoutBackground, CardWithBackground };
