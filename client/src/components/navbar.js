import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div">
                <Link to="/" style= {{textDecoration: "none", color: "white"}} >FNF</Link>
            </Typography>
            <Box alighItems="right" sx= {{flexGrow: 1, textAlign: "right "}}>
                <Link to="/login" style= {{textDecoration: "none", color: "white", marginRight: "10px"}} >Login</Link>
                <Link to="/register" style= {{textDecoration: "none", color: "white"}} >Register</Link>
                <Link to="/exercises" style= {{textDecoration: "none", color: "white", marginLeft: "10px"}} >Exercises</Link>
                <Link to="/workoutScheduler" style= {{textDecoration: "none", color: "white", marginLeft: "10px"}} >Workout Scheduler</Link>
                <Link to="/foodSearch" style= {{textDecoration: "none", color: "white", marginLeft: "10px"}} >Nutrition</Link>
            </Box>
            </Toolbar>
        </AppBar>
    </Box>
);
}

export default Navbar;