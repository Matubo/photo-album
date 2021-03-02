import '../themes/card.css';

function Card(props) {
  return (
    <div className="card">
      <p>{props.data['username']}</p>
    </div>
  );
}

export default Card;
