import React from 'react';

const SideBar = ({Nav, setNav}) => (
    <div id="page-wrapper">
        {/* <!-- 사이드바 --> */}
        <div id="sidebar-wrapper" className={Nav && 'activation'}>
            <ul class="sidebar-nav">
                <li class="sidebar-brand" onClick={setNav}>
                    <a href="#"><i class="fas fa-times-circle fa-lg"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-home"></i>&nbsp; 홈</a>
                </li>
                <li>
                    <a href="https://trimm.bike/ko/main/" target="_blank"><i class="fas fa-tablet-alt"></i>&nbsp; 제품 설명</a>
                </li>
                <li>
                    <a href="https://trimm.bike/ko/product/trimm-one-pre-order/" target="_blank"><i
                        class="fas fa-hand-holding"></i>&nbsp; 사전 구매</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-map-signs"></i>&nbsp; 오시는 길</a>
                </li>
                <li>
                    <a href="#" onclick="ChangeLanguage()"><i class="fa fa-language fa-lg"></i>&nbsp; 한영 변환</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/trimmbike/"><i class="fa fa-instagram fa-lg"></i>&nbsp; Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/trimmbikecomputer/"><i class="fa fa-facebook fa-lg"></i>&nbsp; Facebook</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCzsilV9p11bt_T3PhUEnYww"><i class="fa fa-youtube fa-lg"></i>&nbsp;Youtube</a>
                </li>
                {/* <!-- <li>
                    <i
                        class="fas fa-times-circle fa-lg"
                        id="exit_nav"
                        onclick="toggleNav(2)"
                    ></i>
                </li>
                --> */}
            </ul>
        </div>
    </div>
)

export default SideBar;