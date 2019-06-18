import React from 'react';

import Welcome from '../components/landing/Welcome';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import OurBlog from '../components/landing/OurBlog';
import Subscribe from '../components/landing/Subscribe';
import Footer from '../components/landing/Footer';
import NavBar from '../layouts/LandingNavBar';

import '../components/landing/Table'

import '../assets/css/index.css';
import '../assets/css/login.css';
import '../assets/css/shards.min.css'
import '../assets/css/shards-extras.min.css';
import '../assets/css/menu.css';
import '../assets/css/slide.css';
import '../assets/css/text.css';

const Landing = () => (
  <div className="shards-app-promo-page--1">
    <NavBar />
    <Welcome />
    <Features />
    <Testimonials />
    <OurBlog />
    <Subscribe />
    <Footer />
  </div>
);

export default Landing;
