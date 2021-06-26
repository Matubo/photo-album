import './authorCard.css';

function AuthorCard(props) {
  const { callback, authorId, author } = props;
  return (
    <div
      className="card"
      onClick={() => {
        callback(authorId);
      }}
    >
      <p className="card__author-name">{author}</p>
    </div>
  );
}

export default AuthorCard;
