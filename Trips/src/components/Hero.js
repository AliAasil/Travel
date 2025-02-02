import "./Hero.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {/* <img alt="HeroImg" src={props.HeroImg} /> */}
        <img src={props.HeroImg} alt="HeroImg" className="HeroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
