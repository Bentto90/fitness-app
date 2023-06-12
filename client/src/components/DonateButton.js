import React from 'react';
import Button from '@mui/material/Button';

const DonateButton = () => {
  const handleButtonClick = () => {
    window.open('https://buy.stripe.com/test_bIY4ije8PfSceo8dQQ', '_blank');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButtonClick}>
      Donate Now
    </Button>
  );
};

export default DonateButton;
