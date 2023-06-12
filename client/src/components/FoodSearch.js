import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const FoodSearch = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const searchFood = () => {
    const appId = 'ba586d51';
    const appKey = '79c1438c8ac5be51fddf6c77c795827b';
    const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(
      query
    )}&app_id=${appId}&app_key=${appKey}`;

    axios
      .get(apiUrl)
      .then(response => {
        setResult(response.data.hints);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setResult([]);
      });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Search for a food"
            value={query}
            onChange={event => setQuery(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary" onClick={searchFood} fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>

      {result && (
        <div className={classes.cardContainer}>
          <Grid container spacing={2}>
            {result.map(food => (
              <Grid item xs={6} sm={3} key={food.food.foodId}>
                <Card>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1">{food.food.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default FoodSearch;
