import React from 'react';

import Table from './Table';
import 'bootstrap';


const Features = () => (
  // {/* Features Section */}
  <div id="app-features" className="app-features section">
    <div className="container-fluid">
      <div className="row h-100">
        <div id="left_feature" className="col-lg-6 col-md-12 col-sm-12 px-0 py-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 py-4"></div>
            <div className="col-lg-12 py-4"></div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-2"></div>
            <div className="col-lg-5 col-md-6 col-sm-6 col-8">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={require('../../assets/images/features/front_pink.png')} alt=""/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={require('../../assets/images/features/front_skyblue.png')} alt=""/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={require('../../assets/images/features/front_red.png')} alt=""/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          {/* <img className="mt-auto mb-auto" src={require("../../assets//app-promo/Trimm_Device.png" /> */}
        </div>

        {/* App Features Wrapper */}
        {/* <div className="app-features-wrapper col-lg-3"></div> */}
        <div id="right_feature" className="col-lg-6 col-md-12 col-sm-12 py-5 px-0">
          <div className="well px-0 w-100 h-100">
            {/* <div className="col-lg-12"> */}
            <div className="col-12 w-100 px-0">
              <h3 className="section-title underline--left my-5" id="text_fit0">
                Trimm One 소개
              </h3>
            </div>
            {/* </div> */}
            {/* <div id="features_table"> */}
            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-12"> */}
            <Table />

              


              
            {/* </div> */}
            {/* </div> */}

          </div>
        </div>


      </div>
    </div>
  </div>
);

export default Features;
