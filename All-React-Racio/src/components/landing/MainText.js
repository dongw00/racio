import React from 'react';
import Typed from 'typed.js';

export default class MainText extends React.Component {
  componentDidMount() {
    const options = {
      strings: ['Act for better life!', 'Trimm Application'],
      typeSpeed: 100,
      startDelay: 300,
      backDelay: 1500,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };
    this.typed = new Typed(this.el, options);
  }

  render() {
    return (
      <span
        ref={el => (this.el = el)}
        id="typed"
        className="welcome-heading text-white typed-cursor"
      />
    );
  }
}
