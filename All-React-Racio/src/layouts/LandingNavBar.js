import React, { useState } from 'react';

import SideBar from './LandingSideBar';
import SocialIcons from '../components/landing/SocialIcons';

import trimmImg from '../assets/images/trimm.png';

import '../components/landing/menu';

const NavBar = () => {
    const [Nav, setNav] = useState(false);
    return (
        <div>
            <SideBar Nav={Nav} setNav={() => (setNav(false))} />
            {/* <!-- Navigation --> */}
            <div className="container">
                <nav
                    id="highest_nav"
                    className="navbar fixed-top navbar-expand-lg navbar-dark pt-1 pb-1">
                    <a className="navbar-brand mr-5" href="">
                        <img src={trimmImg} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => (setNav(true))}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <i className="fas fa-caret-right fa-lg" id="toolbar_menu"></i>
                        <div>
                            <ul className="navbar-nav ml-auto">
                                <li>&nbsp;</li>
                                <li className="nav-item active dynamic_underline">
                                    <a className="nav-link" href="#" id="tag0">홈<span className="sr-only">(current)</span></a>
                                </li>
                                <li>&nbsp;</li>
                                <li className="nav-item dynamic_underline">
                                    <a className="nav-link" href="https://trimm.bike/ko/main/" target="_blank" id="tag3">제품 설명</a>
                                </li>
                                <li>&nbsp;</li>
                                <li className="nav-item dynamic_underline">
                                    <a className="nav-link" href="https://trimm.bike/ko/product/trimm-one-pre-order/" target="_blank"
                                        id="tag4">사전 예약구매</a>
                                </li>
                            </ul>
                        </div>
                        <SocialIcons />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;