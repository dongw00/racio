import React from 'react';
import ChangeLanguage from './Language';

const SocialIcons = () => (
  <ul className="header-social-icons navbar-nav ml-auto">
    <li className="nav-item" onClick={ChangeLanguage()}>
      <a className="nav-link" href=".#">
        <i className="fa fa-language fa-lg" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.instagram.com/trimmbike/">
        <i className="fa fa-instagram fa-lg" />
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        href="https://www.facebook.com/trimmbikecomputer/">
        <i className="fa fa-facebook fa-lg" />
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        href="https://www.youtube.com/channel/UCzsilV9p11bt_T3PhUEnYww">
        <i className="fa fa-youtube fa-lg" />
      </a>
    </li>
  </ul>
);

export default SocialIcons;
