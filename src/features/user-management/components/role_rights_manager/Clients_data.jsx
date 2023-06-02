import React from 'react';
import Clients from './Clients';
import { formControlData } from './data';

const ParentComponent = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };

  return (
    <div>
      {/* Other parent component content */}
      <Clients checkboxData={formControlData}
       onClickBtn={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
