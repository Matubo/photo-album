import '../themes/card.css';

function CardWithoutBackground(props) {
  return (
    <div
      className="card_author"
      onClick={() => {
        props.callback(props.id);
      }}
    >
      <p className="card_author_name">{props.username}</p>
    </div>
  );
}

function CardWithBackground(props) {
  return (
    <div className="card">
      {props.length ? <div className="card_length">{props.length}</div> : <></>}
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
