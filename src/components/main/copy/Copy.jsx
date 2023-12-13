import './copy.css';
import Button from 'react-bootstrap/Button';

import React from 'react';

const Copy = () => {
  return (
    <div className="copy">
      <div className="horizontal-line"></div>
      <h1>Humanizing your insurance</h1>
      <p>
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that's right for you.
        Ensure you and your loved ones are protected.
      </p>
      <Button variant="light">VIEW PLANS</Button>
    </div>
  );
};

export default Copy;
