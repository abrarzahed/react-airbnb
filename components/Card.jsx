import card1Img from "../src/assets/images/card1.jpg";

export default function Card(props) {
  return (
    <div className="card">
      <div
        className="card--top"
        style={{ backgroundImage: `url(${card1Img})` }}
      >
        <button className="card--top__btn">SOLD OUT</button>
      </div>
      <div className="card--bottom">
        <h4 className="card--bottom__header">
          <strong>Abiansemal, Indonesia</strong> <small>⭐ 4.8</small>
        </h4>
        <p className="card--bottom__info card-info">4,490 kilometers</p>
        <p className="card--bottom__date card-info">Feb 8 - 13</p>
        <p className="card--bottom__price">
          <strong>$360</strong> night
        </p>
      </div>
    </div>
  );
}
