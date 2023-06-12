import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h2>Exercise Search</h2>
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
        <div>
          <h3>Exercises:</h3>
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.id} onClick={() => handleExerciseClick(exercise.id)}>
                {exercise.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedExercise && (
        <div>
          <h3>Exercise Instructions:</h3>
          <div dangerouslySetInnerHTML={{ __html: exerciseInstructions }} />
        </div>
      )}
    </div>
  );
};

export default Exercises;
