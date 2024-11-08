import React, { Component } from 'react';

class NewCarsSection extends Component {
  render() {
    return (
      <section id="new-cars" className="new-cars">
        <div className="container">
          <div className="section-header">
            <p>checkout <span>the</span> latest cars</p>
            <h2>newest cars</h2>
          </div>
          <div className="new-cars-content">
            <div className="owl-carousel owl-theme" id="new-cars-carousel">
              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="assets/images/new-cars-model/ncm1.png" alt="Chevrolet Camaro" />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">Chevrolet Camaro <span>ZA100</span></a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <button className="welcome-btn new-cars-btn" onClick={() => window.location.href='#'}>
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="assets/images/new-cars-model/ncm2.png" alt="BMW Series-3 Wagon" />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">BMW Series-3 Wagon</a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <button className="welcome-btn new-cars-btn" onClick={() => window.location.href='#'}>
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="new-cars-item">
                <div className="single-new-cars-item">
                  <div className="row">
                    <div className="col-md-7 col-sm-12">
                      <div className="new-cars-img">
                        <img src="assets/images/new-cars-model/ncm3.png" alt="Ferrari 488 Superfast" />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="new-cars-txt">
                        <h2><a href="#">Ferrari 488 Superfast</a></h2>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="new-cars-para2">
                          Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </p>
                        <button className="welcome-btn new-cars-btn" onClick={() => window.location.href='#'}>
                          view details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewCarsSection;
