import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utility/hooks";
import { useMutation } from "@apollo/react-hooks";

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, Stack, Alert, Container, Select, FormControl, InputLabel, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

const activityLevels = [
    'Sedentary',
    'Lightly Active',
    'Moderately Active',
    'Very Active',
    'Extremely Active'
];

const goals = [
    'Lose Weight',
    'Maintain Weight',
    'Gain Weight'
];

const weightUnits = [
    'lbs',
    'kg'
];


const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email
            username
            age
            weight
            height
            activeLevel
            goal
            token
        }
    }
`

function Register(props) {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    function registerUserCallback() {
        registerUser();
    }
  
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [ registerUser, { loading } ] = useMutation(REGISTER_USER, {
        update(proxy, { data: { registerUser: userData } }) {
            context.login(userData);
            navigate('/');
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
        },
        variables: { registerInput: values }
      
    });

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Register</h3>
            <p>JOIN NOW!</p>
            <Stack spacing={2} paddingBottom={2}>
                <TextField
                    label="Username"
                    name="username"
                    onChange={onChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    onChange={onChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    onChange={onChange}
                />
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    onChange={onChange}
                />
                <TextField
                    label="Age"
                    name="age"
                    type="number"
                    onChange={onChange}
                />
                <Box display="flex" alignItems="baseline">
                <TextField sx={{ marginRight: 1, minWidth: 386}}
                    label="Weight"
                    name="weight"
                    type="number"
                    onChange={onChange}
                />
                <FormControl sx={{ marginLeft: 1, minWidth: 150}}>
                    <InputLabel id="weight-unit-label">Weight Unit</InputLabel>
                    <Select
                    labelId="weight-unit-label"
                    label="Weight Unit"
                    name="weightUnit"
                    value={values.weightUnit || ''}
                    onChange={onChange}
                >
                {weightUnits.map((weightUnit) => (
                <MenuItem key={weightUnit} value={weightUnit}>
                {weightUnit}
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
                </Box>

                <FormControl sx={{ textAlign: 'left'}}>
                    <InputLabel id="activity-level-label">Activity Level</InputLabel>
                    <Select
                    labelId="activity-level-label"
                    label="Activity Level"
                    name="activityLevel"
                    value={values.activityLevel || ''}
                    onChange={onChange}
                >
                {activityLevels.map((activityLevel) => (
                <MenuItem key={activityLevel} value={activityLevel}>
                {activityLevel}
                </MenuItem>
                 ))}
                </Select>
                </FormControl>

                <FormControl sx={{ textAlign: 'left'}}>
                    <InputLabel id="goal-label">Goal</InputLabel>
                    <Select
                    labelId="goal-label"
                    label="Goal"
                    name="goal"
                    value={values.goal || ''}
                    onChange={onChange}
                >
                {goals.map((goal) => (
                <MenuItem key={goal} value={goal}>
                {goal}
                </MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Stack>
            {errors.map(function(error) {
            return (
                <Alert severity="error">
                    {error.message}
                </Alert>
            );
        })}

            <Button variant="contained" onClick={onSubmit}>Register</Button>

            </Container>
    )
}

export default Register;