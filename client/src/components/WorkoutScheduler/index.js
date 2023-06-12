import React, { useState } from 'react';

const WorkoutScheduler = () => {
  const [schedule, setSchedule] = useState([]);
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const handleAddDay = (event) => {
    event.preventDefault();
    const day = event.target.day.value;
    setSchedule((prevSchedule) => [...prevSchedule, day]);
    event.target.reset();
  };

  const handleAddWorkout = (event, day) => {
    event.preventDefault();
    const workout = event.target.workout.value;
    const sets = event.target.sets.value;
    const reps = event.target.reps.value;
    const log = {
      day,
      workout,
      sets,
      reps
    };
    setWorkoutLogs((prevLogs) => [...prevLogs, log]);
    event.target.reset();
  };

  return (
    <div>
      <h2>Workout Scheduler</h2>
      <form onSubmit={handleAddDay}>
        <label htmlFor="day">Day:</label>
        <select id="day">
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <button type="submit">Add Day</button>
      </form>

      {schedule.length > 0 ? (
        <div className="scheduler-container">
          {schedule.map((day, index) => (
            <div key={index} className="scheduler-card">
              <h3>{day}</h3>
              <form onSubmit={(event) => handleAddWorkout(event, day)}>
                <input type="text" name="workout" placeholder="Add Workout" required />
                <label htmlFor="sets">Sets:</label>
                <input type="number" name="sets" required />
                <label htmlFor="reps">Reps:</label>
                <input type="number" name="reps" required />
                <button type="submit">Add Workout</button>
              </form>
              {workoutLogs.map((log, index) => {
                if (log.day === day) {
                  return (
                    <p key={index}>
                      Workout: {log.workout} | Sets: {log.sets} | Reps: {log.reps}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      ) : (
        <p>No days scheduled yet.</p>
      )}
    </div>
  );
};

export default WorkoutScheduler;
