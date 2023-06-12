import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utility/hooks";
import { useMutation } from "@apollo/react-hooks";

import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography, Stack, Alert, Container } from "@mui/material";

const REGISTER_USER = gql`
    mutation Mutation(
        $registerInput: RegisterInput
    ) {
        registerUser(
            registerInput: $registerInput
        ) {
            email
            username
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
            </Stack>
            <Box>
                {Object.keys(errors).length > 0 && (
                    <Alert severity="error">
                        <ul>
                            {Object.values(errors).map((value) => (
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    </Alert>
                )}
            </Box>

            <Button variant="contained" onClick={onSubmit}>Register</Button>

            </Container>
    )
}

export default Register;