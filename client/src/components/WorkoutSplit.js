import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PPL from '../assets/images/ppl-split.jpeg';
import UpperLower from '../assets/images/upper-lower-split.jpeg';
import FullBody from '../assets/images/fullbody.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  workout: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.4',
  },
}));

export default function WorkoutSplit() {
  const classes = useStyles();

  const [split, setSplit] = useState([
    {
      id: 0,
      name: 'Push, Pull, Legs (PPL)',
      description:
        'The push pull legs (PPL) split is a popular and effective workout routine that divides training sessions into three main categories: push exercises, pull exercises, and leg exercises. This training split is commonly used by individuals seeking to develop overall strength, muscle mass, and symmetry. It offers a balanced approach to training different muscle groups and allows for adequate recovery time between workouts.',
      image: PPL,
    },
    {
      id: 1,
      name: 'Upper, Lower (UL)',
      description:
        'The upper-lower split is another popular and effective workout routine that divides training sessions into upper body and lower body workouts. This split allows for a more focused approach to training specific muscle groups while providing adequate recovery time for each area. It is commonly used by individuals looking to build overall strength, muscle mass, and improve athletic performance. Here is a thorough description of the upper-lower split.',
      image: UpperLower,
    },
    {
      id: 2,
      name: 'Full Body',
      description:
        'The full body workout routine is a comprehensive training program that involves targeting all major muscle groups in a single workout session. This type of split is often favored by beginners, individuals with limited time for training, or those seeking a balanced approach to overall strength and muscle development. Here is a thorough description of the full body workout routine.',
      image: FullBody,
    },
    {
      id: 3,
      name: 'Upper, Lower, Push, Pull, Legs (UL/PPL)',
      description:
        'The Upper Lower Push Pull Legs (ULPPL) split is a comprehensive and advanced workout routine that combines the principles of the Upper-Lower split and the Push-Pull-Legs split. It is a 5x/week program designed for individuals who have been training consistently and want to further enhance their strength, muscle mass, and overall physique. It is important to note that the ULPPL split is an advanced routine and may not be suitable for beginners or those with limited training experience. Proper form, technique, and progressive overload should be prioritized to maximize results while minimizing the risk of injury.',
    },
  ]);

  return (
    <div className={classes.root}>
      {split.map((workout) => (
        <div className={classes.workout} key={workout.id}>
          <h1>{workout.name}</h1>
          <p className={classes.description}>{workout.description}</p>
          {workout.image && <img src={workout.image} alt="splits" />}
        </div>
      ))}
    </div>
  );
}
