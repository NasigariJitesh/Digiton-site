import background from "../../assets/images/call-action/call-action-bg.png";

export default function CallAction() {
  return (
    <section className="call-action-four-area">
      <div className="container">
        <div
          className="call-action-four rel z-1 p-70 pb-80 rpx-55 wow fadeInUp delay-0-2s"
          style={{ background: `url(${background})` }}
        >
          <div className="section-title mb-35">
            <h2>Truly, Madly, Deeply in love with This NFT collection.</h2>
          </div>
          <a href="contact.html" className="theme-btn style-twelve">
            Connect NFT
          </a>
          <div className="right-image wow fadeInUp delay-0-4s">
            <img
              src={
                require(`../../assets/images/call-action/call-action-right.png`)
                  .default
              }
              alt="Call To Action"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
