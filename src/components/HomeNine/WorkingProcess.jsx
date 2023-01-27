export default function WorkingProcess() {
  return (
    <section className="work-progress-area-five rel z-1 pt-110 pb-90 rpt-90 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-65">
          <span className="sub-title">How It Works</span>
          <h2>Create and Sell Your NFTs</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="work-progress-item-five wow fadeInUp delay-0-2s">
              <div className="icon-number">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/work-progress/icon-1.png`)
                        .default
                    }
                    alt="Icon"
                  />
                </div>
                <span className="number">01</span>
              </div>
              <h3>Set Up Your Wallet</h3>
              <p>Praesent euismod eu elit id maximus. Donec</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="work-progress-item-five mt-50 wow fadeInUp delay-0-4s">
              <div className="icon-number">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/work-progress/icon-2.png`)
                        .default
                    }
                    alt="Icon"
                  />
                </div>
                <span className="number">02</span>
              </div>
              <h3>Create Collection</h3>
              <p>Praesent euismod eu elit id maximus. Donec</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="work-progress-item-five wow fadeInUp delay-0-6s">
              <div className="icon-number">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/work-progress/icon-3.png`)
                        .default
                    }
                    alt="Icon"
                  />
                </div>
                <span className="number">03</span>
              </div>
              <h3>Add Your NFT</h3>
              <p>Praesent euismod eu elit id maximus. Donec</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="work-progress-item-five mt-50 wow fadeInUp delay-0-8s">
              <div className="icon-number">
                <div className="icon">
                  <img
                    src={
                      require(`../../assets/images/work-progress/icon-4.png`)
                        .default
                    }
                    alt="Icon"
                  />
                </div>
                <span className="number">04</span>
              </div>
              <h3>List For Sale</h3>
              <p>Praesent euismod eu elit id maximus. Donec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
