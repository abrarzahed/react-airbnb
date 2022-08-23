export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card--top"
        style={{ backgroundImage: `url(${props.item.img})` }}
      >
        {props.item.openSpot > 0 && (
          <button className="card--top__btn">{props.item.status}</button>
        )}
      </div>
      <div className="card--bottom">
        <h4 className="card--bottom__header">
          <strong>{props.item.country}</strong>
          <small>
            ⭐ {props.item.rating}({props.item.reviewCount})
          </small>
        </h4>
        <p className="card--bottom__info card-info">4,490 kilometers</p>
        <p className="card--bottom__date card-info">Feb 8 - 13</p>
        <p className="card--bottom__price">
          <strong>${props.item.price}</strong> / night
        </p>
      </div>
    </div>
  );
}
