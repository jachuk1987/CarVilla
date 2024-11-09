import React, { Component } from 'react';
// Import your icon images
import carIcon from '../images/car-icon.png';
import repairIcon from '../images/repair-icon.png';
import insuranceIcon from '../images/insurance-icon.png';

class ServiceSection extends Component {
  render() {
    return (
      <section id="service" className="service">
        <div className="container">
          <div className="service-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <img src={carIcon} alt="Car Icon" />
                  </div>
                  <h2><a href="#">Largest dealership <span>of</span> cars</a></h2>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <img src={repairIcon} alt="Repair Icon" />
                  </div>
                  <h2><a href="#">Unlimited repair warranty</a></h2>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-service-item">
                  <div className="single-service-icon">
                    <img src={insuranceIcon} alt="Insurance Icon" />
                  </div>
                  <h2><a href="#">Insurance support</a></h2>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
