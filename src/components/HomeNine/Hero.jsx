import hero from "../../assets/images/hero/hero-eight.png";

export default function Hero() {
  return (
    <section className="hero-section-eight z-1 rel" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content-eight mr-10 rmr-0 py-160 rpy-100">
              <span className="sub-title d-block wow fadeInUp delay-0-2s">
                Best NFT Marketplace
              </span>
              <h1 className="wow fadeInUp delay-0-4s mb-30">
                Discover & Collect your favorite computerized NFT's
              </h1>
              <p className="wow fadeInUp delay-0-6s">
                Aliquam at neque at ipsum ullamcorper commodo. Aenean venenatis
                magna sodales venenatis dictum.
              </p>
              <div className="hero-btns mt-30 wow fadeInUp delay-0-8s">
                <a
                  href="about.html"
                  className="theme-btn gradient-btn-one mt-10"
                >
                  Explore Now
                </a>
                <a
                  href="about.html"
                  className="theme-btn gradient-btn-two mt-10"
                >
                  Create NFT
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-end">
            <div className="hero-eight-image wow fadeInUp delay-0-8s">
              <img src={hero} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
