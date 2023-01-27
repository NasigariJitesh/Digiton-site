import logo from "../../../../assets/images/logos/logo-white-three.png";

export default function FooterHomeNine() {
  return (
    <footer className="main-footer footer-nine pt-100 rel z-1">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-30">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="text">
                Integer gravida posuere lacus et suscipit. Pellentesque sed
                ipsum sollicitudin, fermentum nibh elementum, dignissim leo. In
                hac habitasse platea dictumst.
              </div>
              <div className="social-style-two mt-30">
                <a href="http://facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="http://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="footer-widget link-widget">
              <h3 className="footer-title">Marketplace</h3>
              <ul className="list-style-two">
                <li>
                  <a href="#">All NFTs</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Collectibles</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Trading Cards</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="footer-widget link-widget">
              <h3 className="footer-title">Resoures</h3>
              <ul className="list-style-two">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Platform Status</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h3 className="footer-title">Subscribe</h3>
              <p>
                Aenean volutpat in massa at euismod. Phasellus quis viverra
                lacus, ac interdum
              </p>
              <form action="#" method="post">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  required=""
                />
                <button type="button" value="submit">
                  <i className="fa fa-location-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area mt-50 py-15">
        <div className="container">
          <div className="copyright-inner">
            <p>© 2022. Restly All rights reserved.</p>
            <button
              type="button"
              className="scroll-top scroll-to-target"
              data-target="html"
            >
              <span className="fa fa-angle-up"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
