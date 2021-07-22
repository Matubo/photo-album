import './cardWithPhoto.css';

function PhotoCard(props) {
  const { length, callback, url, id, title } = props;

  return (
    <div className="card photo_card">
      {length ? <div className="card__length">{length}</div> : <></>}
      <div
        className={length ? 'card__img card__img-active' : 'card__img'}
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

export default PhotoCard;
