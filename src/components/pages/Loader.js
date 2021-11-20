import React from 'react';
import loading_url from '../../imgs/loading.gif';

const Loader = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <img
          src={loading_url}
          className="card-img-top mx-auto loaderCss"
          alt="Confetti loader"
        />
      </div>
    </div>
  );
};

export default Loader;
