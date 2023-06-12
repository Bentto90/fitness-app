import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const WorkoutScheduler = () => {
  const [schedule, setSchedule] = useState([]);
  const [workoutLogs, setWorkoutLogs] = useState([]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const handleAddDay = (event) => {
    event.preventDefault();
    const day = event.target.day.value;
    if (!schedule.includes(day)) {
      setSchedule((prevSchedule) => [...prevSchedule, day]);
    }
    event.target.reset();
  };

  const handleDeleteDay = (day) => {
    setSchedule((prevSchedule) => prevSchedule.filter((d) => d !== day));
  };

  const handleAddWorkout = (event, day) => {
    event.preventDefault();
    const workout = event.target.workout.value;
    const sets = event.target.sets.value;
    const reps = event.target.reps.value;
    const log = { day, workout, sets, reps };
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
        <Button variant="contained" size="small" type="submit">
          Add Day
        </Button>
      </form>

      {schedule.length > 0 ? (
        <div className="scheduler-container">
          {daysOfWeek.map((day) => (
            schedule.includes(day) && (
              <div key={day} className="scheduler-card">
                <div className="scheduler-header">
                  <h3>
                    {day}
                    <span> - </span>
                    <Button variant="contained" size="small" onClick={() => handleDeleteDay(day)}>
                      Delete
                    </Button>
                  </h3>
                </div>
                <div className="exercise-table-container">
                  <TableContainer component={Paper} style={{ width: '50%', margin: '0 auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Exercise</TableCell>
                          <TableCell align="right">Sets</TableCell>
                          <TableCell align="right">Reps</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {workoutLogs.map((log, index) => {
                          if (log.day === day) {
                            return (
                              <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                  {log.workout}
                                </TableCell>
                                <TableCell align="right">{log.sets}</TableCell>
                                <TableCell align="right">{log.reps}</TableCell>
                              </TableRow>
                            );
                          }
                          return null;
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <form onSubmit={(event) => handleAddWorkout(event, day)}>
                  <input type="text" name="workout" placeholder="Add Workout" required />
                  <label htmlFor="sets">Sets:</label>
                  <input type="number" name="sets" required />
                  <label htmlFor="reps">Reps:</label>
                  <input type="number" name="reps" required />
                  <Button variant="contained" size="small" type="submit">
                    Add Workout
                  </Button>
                </form>
              </div>
            )
          ))}
        </div>
      ) : (
        <p>No days scheduled yet.</p>
      )}
    </div>
  );
};

export default WorkoutScheduler;
