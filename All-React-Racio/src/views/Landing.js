import React from 'react';

import Welcome from '../components/landing/Welcome';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import OurBlog from '../components/landing/OurBlog';
import Subscribe from '../components/landing/Subscribe';
import Footer from '../components/landing/Footer';


import '../assets/css/index.css';
import '../assets/css/login.css';
import '../assets/css/shards-extras.min.css';


const Landing = () => (
    <div className="shards-app-promo-page--1">
        <Welcome></Welcome>
        <Features></Features>
        <Testimonials></Testimonials>
        <OurBlog></OurBlog>
        <Subscribe></Subscribe>
        <Footer></Footer>
    </div>
);

export default Landing;