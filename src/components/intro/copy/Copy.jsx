import './copy.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import React from 'react';

const Copy = () => {
  return (
    <div className="copy p-5 p-sm-4 p-md-0 text-center text-md-start">
      <div className="horizontal-line"></div>
      {/* <h1 className="display-4 p-4 ps-md-0">Humanizing your insurance</h1> */}
      <h1 className="display-2 d-md-none p-3">Humanizing your insurance</h1>
      <h1 className="display-3 d-none d-md-block ps-0">
        Humanizing your insurance
      </h1>
      <p className="fs-6">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that's right for you.
        Ensure you and your loved ones are protected.
      </p>
      <Button variant="outline-light">VIEW PLANS</Button>
      <Image
        src="../../../images/bg-pattern-intro-right-mobile.svg"
        className="bg-copy-right d-md-none"
      ></Image>
    </div>
  );
};

export default Copy;
