import React, { Component } from 'react';
import Typed from 'typed.js';


class MainText extends Component {
  componentDidMount() {
    const options = {
      strings: ['Trimm Application', 'better life!'],
      typeSpeed: 100,
      startDelay: 300,
      backDelay: 1500,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <span ref={(el) => { this.el = el; }} className="welcome-heading text-white typed-cursor"></span>
    );
  }
}

export default MainText;