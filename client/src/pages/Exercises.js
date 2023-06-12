import React from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseSearch from '../components/Exercises';

const Exercises = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h4" component="h1" mb={2}>
        Exercise Recommendations
      </Typography>
      <ExerciseSearch />
    </Box>
  );
};

export default Exercises;
