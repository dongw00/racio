import React from 'react';

const Subscribe = () => (
  <div className="subscribe section bg-dark py-4">
    <h3 className="section-title text-center text-white m-5">Newsletter</h3>
    <p className="text-muted col-md-6 text-center mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptatum
      libero ipsum eius rem, facere deserunt repudiandae autem sapiente dolores.
    </p>
    <form className="form-inline d-table mb-5 mx-auto" action="/">
      <div className="form-group">
        <input
          className="form-control border-0 mr-3 mb-2"
          type="text"
          placeholder="Email address"
        />
        <button className="btn btn-success mb-2" type="submit">
          Subscribe
        </button>
      </div>
    </form>
  </div>
);

export default Subscribe;
