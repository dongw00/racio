import React, {useState, Nav} from 'react';

import FirebaseLogin from './Login';

import iphoneMockImg from '../../assets/images/app-promo/iphone_black.png';

const Welcome = () => {
  return (
    <div className="welcome d-flex justify-content-center flex-column">
      {/* <!-- Inner Wrapper --> */}
      <div className="inner-wrapper mt-auto mb-auto container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 mt-auto mb-auto mr-3">
            <FirebaseLogin />
          </div>
          <div className="col-lg-4 col-md-5 col-sm-11 py-5 ml-auto">
            <img className="iphone-mockup trimm_phone ml-auto"
              src={iphoneMockImg}
              alt="iPhone App Mockup"
            />
          </div>
        </div>
      </div>
      {/* <!-- / Inner Wrapper --> */}
    </div>
  );
}

export default Welcome;
