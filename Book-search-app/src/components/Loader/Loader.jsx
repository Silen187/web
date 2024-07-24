import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    // <div className='lds-ellipsis'>
    //   <img src={LoaderImg} alt='loader' className='lds-ellipsis' />
    // </div>
    <div className="loader-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;