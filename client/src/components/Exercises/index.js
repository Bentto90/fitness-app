import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const Exercises = () => {
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseInstructions, setExerciseInstructions] = useState('');

  useEffect(() => {
    fetchMuscleGroups();
  }, []);

  const fetchMuscleGroups = async () => {
    try {
      const response = await axios.get('https://wger.de/api/v2/muscle/');
      setMuscleGroups(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const searchExercisesByMuscleGroup = async () => {
    try {
      const response = await axios.get('https://wger.de/api/v2/exercise/', {
        params: {
          muscles: selectedMuscleGroup,
          language: 2, // English language
        },
      });
      setExercises(response.data.results.filter((exercise) => exercise.language === 2));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExerciseInstructions = async (exerciseId) => {
    try {
      const response = await axios.get(`https://wger.de/api/v2/exerciseinfo/${exerciseId}/`);
      setExerciseInstructions(response.data.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroup(parseInt(event.target.value));
  };

  const handleExerciseClick = (exerciseId) => {
    setSelectedExercise(exerciseId);
    fetchExerciseInstructions(exerciseId);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchExercisesByMuscleGroup();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="muscleGroup">Muscle Group:</label>
        <select id="muscleGroup" value={selectedMuscleGroup} onChange={handleMuscleGroupChange}>
          <option value="">Select a muscle group</option>
          {muscleGroups.map((muscleGroup) => (
            <option key={muscleGroup.id} value={muscleGroup.id}>
              {muscleGroup.name}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>

      {exercises.length > 0 && (
        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: '5px', padding: '20px', marginTop: '20px' }}>
          <Typography variant="h3" component="h3" mb={2}>
            Exercises:
          </Typography>
          <Box component="ul" sx={{ listStyleType: 'none', paddingInlineStart: 0 }}>
            {exercises.map((exercise) => (
              <Box
                component="li"
                key={exercise.id}
                onClick={() => handleExerciseClick(exercise.id)}
                sx={{ cursor: 'pointer' }}
              >
                {exercise.name}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {selectedExercise && (
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '5px',
            padding: '20px',
            marginTop: '20px',
          }}
        >
          <Typography variant="h3" component="h3" mb={2}>
            Exercise Instructions:
          </Typography>
          <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: exerciseInstructions }} />
        </Box>
      )}
    </div>
  );
};

export default Exercises;
