import React from 'react';

import trimmDevice from '../../assets/images/app-promo/Trimm_Device.png';
import front_pink from '../../assets/images/features/front_pink.png';
import front_red from '../../assets/images/features/front_red.png';
import front_skyblue from '../../assets/images/features/front_skyblue.png';

const Features = () => (
  <div id="app-features" className="app-features section">
    <div className="container-fluid">
      <div className="row h-100">
        <div
          id="left_feature"
          className="col-lg-6 col-md-12 col-sm-12 px-0 py-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 py-4" />
            <div className="col-lg-3 col-md-3 col-sm-3 col-2" />
            <div className="col-lg-5 col-md-6 col-sm-6 col-8">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={front_pink}
                      alt="pink_device"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={front_red}
                      alt="red_device"
                    />
                  </div>
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src={front_skyblue}
                      alt="skyblue_device"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="app-screenshot col-lg-4 col-md-12 col-sm-12 px-0 py-5">
          <img
            className="mt-auto mb-auto"
            src={trimmDevice}
            alt="App Screenshot - Shards App Promo Demo Page"
          />
        </div>

        {/* <!-- App Features Wrapper --> */}
        <div className="app-features-wrapper col-lg-4 col-md-6 col-sm-12 py-5 mx-auto">
          <div className="container">
            <h3 className="section-title underline--left my-5" id="text_fit0">
              trimm만의 특징
            </h3>
            <div className="feature py-4 d-flex">
              <div className="icon text-white bg-success mr-5">
                <i className="fa fa-refresh" />
              </div>
              <div>
                <h5 id="text_fit1">편리함</h5>
                <p id="text_fit1_sub">
                  누구나 쉽게 사용할 수 있는 간편하고 깔끔한 UI
                </p>
              </div>
            </div>

            <div className="feature py-4 d-flex">
              <div className="icon text-white bg-success mr-5">
                <i className="fa fa-shield" />
              </div>
              <div>
                <h5 id="text_fit2">보안성</h5>
                <p id="text_fit2_sub">철저하고 완벽하게 개인 정보 보호</p>
              </div>
            </div>

            <div className="feature py-4 d-flex">
              <div className="icon text-white bg-success mr-5">
                <i className="fa fa-share" />
              </div>
              <div>
                <h5 id="text_fit3">데이터 공유</h5>
                <p id="text_fit3_sub">파일 시스템을 통한 데이터 관리</p>
              </div>
            </div>

            <div className="feature py-4 d-flex">
              <div className="icon text-white bg-success mr-5">
                <i className="fa fa-globe" />
              </div>
              <div>
                <h5 id="text_fit4">어디서나 쉽게!</h5>
                <p id="text_fit4_sub">
                  언제 어디서나 사용할 수 있는 trimm One!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
