import basics from "../json/basics.json";

function Hero(props){
    return <div className="hero">
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    {basics.slider.map((image, index) => {
        return <div className={`carousel-item ${index === 0 ? "active" : ""} amcarousel`} key={image.url}>
        <img src={image.url} className="d-block w-100" alt={image.alt}/>
      </div>
    })}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
}

export default Hero