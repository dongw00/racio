import React from 'react';

import FirebaseLogin from './Login';
import SocialIcons from './SocialIcons';

import trimmImg from '../../assets/images/trimm.png';
import iphoneMockImg from '../../assets/images/app-promo/iphone_black.png';

const Welcome = () => (
  <div className="welcome d-flex justify-content-center flex-column">
    <div className="container">
      {/* <!-- Navigation --> */}
      <nav
        id="highest_nav"
        className="navbar fixed-top navbar-expand-lg navbar-dark pt-1 pb-1">
        <a className="navbar-brand mr-5" href=".#">
          <img src={trimmImg} alt="Card cap" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onclick="toggleNav(1)">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <i className="fas fa-caret-right fa-lg" id="toolbar_menu" />
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href=".#" id="tag0">
                  홈 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".#" id="tag3">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 제품 설명
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=".#" id="tag4">
                  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 기타 서비스
                </a>
              </li>
            </ul>
          </div>
          <SocialIcons />
        </div>
      </nav>
      {/* <!-- / Navigation --> */}
    </div>
    {/* <!-- .container --> */}

    {/* <!-- Inner Wrapper --> */}
    <div className="inner-wrapper mt-auto mb-auto container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
          <FirebaseLogin />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-12 py-5 ml-auto">
          <img
            className="iphone-mockup ml-auto"
            src={iphoneMockImg}
            alt="iPhone App Mockup"
          />
        </div>
      </div>
    </div>
    {/* <!-- / Inner Wrapper --> */}
  </div>
);

export default Welcome;
