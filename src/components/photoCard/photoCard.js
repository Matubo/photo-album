import './photoCard.css';

function PhotoCard(props) {
  const { length, callback, url, id, title } = props;
  if (length) {
    return (
      <div className="card photo_card">
        <div className="card__length">{length}</div>
        <div
          className="card__img-active"
          style={{
            backgroundImage: `url(${url})`,
          }}
          onClick={() => {
            callback(id);
          }}
        ></div>
        <p className="card__title" title={title}>
          {title}
        </p>
      </div>
    );
  } else {
    return (
      <div className="card photo_card">
        <div
          className="card__img"
          style={{
            backgroundImage: `url(${url})`,
          }}
          onClick={() => {
            callback(id);
          }}
        ></div>
        <p className="card__title" title={title}>
          {title}
        </p>
      </div>
    );
  }
}

export default PhotoCard;
