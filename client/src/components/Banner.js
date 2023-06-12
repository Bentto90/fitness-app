import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' }, position: 'relative' }} p="20px">
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <Typography color="#434ee8" fontWeight="600" fontSize="100px">Be Fit not Fat!</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
          Fitness <br />
          Made Easy
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Join today and start your fitness journey with us.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <img
          src={HeroBannerImage}
          alt="hero-banner"
          className="hero-banner-img"
          style={{ width: '100%', maxWidth: '400px' }}
        />
      </Box>
    </Box>
    <Typography fontWeight={600} color="#434ee8" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Fit For Life
    </Typography>
  </Box>
);

export default HeroBanner;
