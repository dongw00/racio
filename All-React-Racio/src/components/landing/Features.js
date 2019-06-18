import React from 'react';

import './menu';


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
            <div className="Bigtable h-75 col-12 px-0">
              <div id="table1">
                <div id="table_btn2">
                  <img src={require("../../assets/images/app-promo/icon/battery-full-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn3">
                  <img src={require("../../assets/images/app-promo/icon/compass-regular.svg")} className="icon_feature" />
                </div>
                <div id="table_btn4">
                  <img src={require("../../assets/images/app-promo/icon/phone-volume-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn5">
                  <img src={require("../../assets/images/app-promo/icon/globe-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn6">
                  <img src={require("../../assets/images/app-promo/icon/chart-line-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn7">
                  <img src={require("../../assets/images/app-promo/icon/heartbeat-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn8">
                  <img src={require("../../assets/images/app-promo/icon/file-export-solid.svg")} className="icon_feature" />
                </div>
                <div id="table_btn9">
                  <img src={require("../../assets/images/app-promo/icon/shield-alt-solid.svg")} className="icon_feature" />
                </div>

              </div>
              <div id="table_back">
                <img className="img_set" src={require("../../assets/images/app-promo/trimm_bike.jpg")} />
              </div>


              <div id="table2" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Renewable Energy
                    <br />
                  </h3>
                </div>
                <div className="text_lower">
                  <div className="youtube_frame">
                    <div className="youtube">
                      <iframe width="590" height="330" src="https://www.youtube.com/embed/BoqG7lmPCBI" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                        style={{ position: "absolute", width: "95%", height: "100%" }}></iframe>
                    </div>
                  </div>
                  {/* [신재생 에너지, 배터리 걱정 NO! 태양광 핸드폰 충전기]               
                            태양광 충전기는 당신이 충전을 해야 하는 귀찮음으로부터 벗어날 수 있도록 해줍니다.(물론, 햇빛이 비치는 날이어야겠죠^^)
                            또한 태양광 충전기를 통해서 당신을 정기적인 충전과 배터리의 고갈로부터 자유롭게 해 줄 겁니다. */}
                </div>
              </div>

              <div id="table3" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Powerful Navi for Map
                    <br />
                  </h3>
                </div>
                <div className="text_lower">
                  <div className="text_half_left">
                    <img src={require("../../assets/images/app-promo/text/Map.jpg")} className="text_img" />
                  </div>
                  <div className="text_half_right">
                    오프라인 캐싱<br />(Offline Caching)
                    {/* <img src={require("../../assets/images/app-promo/Powerful for Map.gif")} className="text_img1" /> */}
                  </div>
                  {/* 자전거로 이동하는 것은 자동차와 다릅니다. 그래서 우리는 경로 설계 메커니즘에 많은 노력에 기울였습니다.
                      더 이상 당신의 데스크탑에서 번거롭게 사용하지 말고, 스마트폰을 몇 번 탭하면 자동으로 목적지까지 최적 경로가 지정됩니다. */}
                  {/* 을 사용하면 네트워크에 연결할 수 없는 지역에서도 지도를 사용할 수 있습닏.  */}
                  {/* 저장된 지도 정보를 사용하여 휴대폰 데이터와 배터리를 아낄 수도 있습니다. 
                      만약 당신이 이미 GPX 파일이 있다면, 가져와서 재생만 시키면 됩니다. 
                      Trimm One 전용 앱을 사용하면 복잡한 경로를 쉽게 계획할 수 있습니다. 
                      자전거를 타기 전에 또는 여행을 떠나기 위해 스마트폰으로 장거리 계획을 할 때 최대 30포인트를 설정할 수 있습니다. 
                      OpenStreetMap™은 최신 지도로 목적지에 도달하는 가장 좋은 방법을 찾습니다. 여행이 끝나면 언제든지 경로를 저장하고 다시 불러올 수도 있습니다. */}
                </div>
              </div>
              <div id="table4" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Message & Call
                    <br />
                  </h3>
                </div>


                <div className="text_lower">
                  [문자 메시지 및 전화 통화 알림 ]<br />
                  라이딩 도중 중요한 전화나 메시지를 놓치지 마세요.


                  <div className="text_img3">
                    <div className="youtube_frame">
                      <div className="youtube">
                        <iframe width="590" height="330"
                          src="https://trimm.bike/wp-content/uploads/2019/03/c6e05d55ebeebda578b01f2da59a8a36_original.gif"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen style={{ position: "absolute", width: "95%", height: "100%" }}></iframe>
                      </div>
                    </div>
                  </div>
                  {/* [문자 메시지 및 전화 통화 알림]<br/>
                        라이딩 도중 중요한 전화나 메시지를 놓치지 마세요. 카카오톡, 페이스북, 인스타그램, 라인, 아이메시지, 스냅챗 등 타사 응용 프로그램에서도 알림을 수신할 수 있습니다.
                        이전에는 없었던 매끈한 디자인의 자전거 컴퓨터, trimm One은 고급스러운 알루미늄 케이스를 채택하였습니다.
                        다양한 메탈 소재의 색상은 당신의 자전거에 특별함을 선사합니다.
                        큰 화면이 반드시 무거워 보이는 외관을 의미하는 것은 아닙니다. trimm One은 8.5mm의 얇은 두께로 스마트폰을 연상시킵니다. */}
                </div>
              </div>
              <div id="table5" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Multilingual support
                    <br />
                  </h3>
                </div>
                <div className="text_lower">
                  <div className="text_half_left">
                    <img src={require("../../assets/images/app-promo/text/world.svg")} className="text_img2" />
                  </div>
                  <div className="text_half_right">
                    <div className="Multilingual_support">
                      <h4>Support</h4>
                      English <br />
                      Español <br />
                      Française <br />
                      Português <br />
                      Italiano <br />
                      Deutsche <br />
                      Nederlands <br />
                      中文 <br />
                      日本語 <br />
                      한국어 <br />
                    </div>
                  </div>
                  {/* <div className="text_half_left">
                          
                        </div>
                        <div className="text_half_right">
                          <h4>
                            Support
                          </h4>
                            English <br>
                            Español <br>
                            Française <br>
                            Português <br>
                            Italiano <br>
                            Deutsche <br>
                            Nederlands <br>
                            中文
                            日本語
                            한국어
                            당신의 언어가 없나요? 저희에게 연락주세요!(support@trimm.bike)
                        </div>   */}
                </div>
                {/* trimm One은 English, Español, Française, Português, Italiano, Deutsche, Nederlands, 中文, 日本語, 한국어를 지원합니다. 
                        당신의 언어가 없나요? 저희에게 연락주세요!(support@trimm.bike) */}

              </div>
              <div id="table6" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Dashboard
                    <br />
                  </h3>
                </div>
                {/* [Trimm One만의 대쉬보드!]<br/> */}
                {/* 나의 주행기록에 대한 데이터를 모니터링 하고 인사이트를 얻을 수 있습니다. */}
                <div className="text_lower">
                  <img src={require("../../assets/images/app-promo/dashboard.png")} className='text_img3' />
                </div>
              </div>
              <div id="table7" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Health
                    <br />
                  </h3>
                </div>

              </div>
              <div id="table8" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Data Synchronization
                    <br />
                  </h3>
                </div>
                <div className="text_lower text_nanum_pen">
                  [언제어디서나 데이터를 동기화! ]<br />
                  TrimmOne에 들어있는 나의 주행기록 데이터를 PC로 동기화시켜 볼 수 있습니다.<br />
                  <img src={require("../../assets/images/app-promo/Synchronization.png")} className="text_img3" />
                  {/*
                        trimm One은 스마트폰 앱의 아바타와 같습니다.
                        당신이 스마트폰에서 하는 모든 것은 trimm One에 즉각 반영됩니다.
                        물론 그 반대도 가능합니다. 이동 중에는 스마트폰의 편리함을 이길 수 있는 것은 없습니다. 
                        작은 화면과 버튼으로 고생하지 마세요. 스마트폰 앱을 사용하여 trimm One을 편리하게 사용해보세요.
                        당신이 자전거 컴퓨터에서 가장 중요하게 생각하는 요인은 무엇인가요?
                        화면의 크기? 해상도? 저전력?
                        3.2인치의 sharp memory LCD는 위에서 언급한 모든 것을 만족시킬 수 있습니다.
                        200dpi의 해상도와 높은 색 대비는 훌륭한 가독성을 보장합니다.
                        */}
                </div>
              </div>
              <div id="table9" className="tableDefault">
                <div className="text_upper">
                  <h3 className="text_head">
                    Aesthetic design
                    <br />
                  </h3>
                </div>

                <div className="text_lower">
                  [TrimmOne만의 깔끔한 디자인! ]<br />
                  다양한 메탈 소재의 색상은 당신의 자전거에 특별함을 선사합니다.
                  <div className="text_img3">
                    <div className="youtube_frame">
                      <div className="youtube">
                        <iframe width="590" height="330"
                          src="https://trimm.bike/wp-content/uploads/2019/03/9f51572f54f277425e37c343252949b1_original.gif"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen style={{ position: "absolute", width: "95%", height: "100%" }}></iframe>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* </div> */}
            {/* </div> */}

          </div>
        </div>


      </div>
    </div>
  </div>
);

export default Features;
