import React from 'react';

const Features = () => (
    <div id="app-features" className="app-features section">
        <div className="container-fluid">
            <div className="row">
                <div className="app-screenshot col-lg-4 col-md-12 col-sm-12 px-0 py-5">
                    <img className="mt-auto mb-auto" src={require("../../assets/images/app-promo/Trimm_Device.png")}
                        alt="App Screenshot - Shards App Promo Demo Page" />
                </div>

                {/* <!-- App Features Wrapper --> */}
                <div className="app-features-wrapper col-lg-4 col-md-6 col-sm-12 py-5 mx-auto">
                    <div className="container">
                        <h3 className="section-title underline--left my-5" id="text_fit0">
                            trimm만의 특징
                        </h3>
                        <div className="feature py-4 d-flex">
                            <div className="icon text-white bg-success mr-5">
                                <i className="fa fa-refresh"></i>
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
                                <i className="fa fa-shield"></i>
                            </div>
                            <div>
                                <h5 id="text_fit2">보안성</h5>
                                <p id="text_fit2_sub">
                                    철저하고 완벽하게 개인 정보 보호
                                </p>
                            </div>
                        </div>

                        <div className="feature py-4 d-flex">
                            <div className="icon text-white bg-success mr-5">
                                <i className="fa fa-share"></i>
                            </div>
                            <div>
                                <h5 id="text_fit3">데이터 공유</h5>
                                <p id="text_fit3_sub">
                                    파일 시스템을 통한 데이터 관리
                  </p>
                            </div>
                        </div>

                        <div className="feature py-4 d-flex">
                            <div className="icon text-white bg-success mr-5">
                                <i className="fa fa-globe"></i>
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