import React from 'react';

const Testimonials = () => (
    <div className="testimonials section py-4">
        <h3 className="section-title text-center m-5">2019 BEST RUNNER!</h3>

        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src={require("../../assets/images/app-promo/2등.png")} className="w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">2. Ki yeon song</h5>
                    <span className="text-muted d-block mb-2">Korea</span>
                    <p>
                        8403km
            </p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src={require("../../assets/images/app-promo/1등.png")} className="w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">1. Adam</h5>
                    <span className="text-muted d-block mb-2">USA</span>
                    <p>
                        11232km
            </p>
                </div>

                <div className="col-md-4 testimonial text-center">
                    <div className="avatar rounded-circle with-shadows mb-3 ml-auto mr-auto">
                        <img src={require('../../assets/images/app-promo/3등.png')} className="w-100" alt="Testimonial Avatar" />
                    </div>
                    <h5 className="mb-1">3. Harry potter</h5>
                    <span className="text-muted d-block mb-2">UK</span>
                    <p>
                        7002km
            </p>
                </div>
            </div>
        </div>
    </div>
);

export default Testimonials;