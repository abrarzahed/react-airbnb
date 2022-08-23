// import heroImg from "../images/hero.png"

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src="../images/hero.png" alt="" />
      <div className="hero-content">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
        <button className="hero-btn">Become a Host</button>
      </div>
    </div>
  );
}
