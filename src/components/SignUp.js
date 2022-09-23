import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [expertise, setExpertise] = React.useState('');

  const handleChange = (event) => {
    setExpertise(event.target.value);
  };

  const styles = {
    paper: {
      marginTop: "14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "red"
    },

    form: {
      width: "50%",
      marginTop: "10px",
    },
    submit: {
      
      marginTop: "30px"
    },
  };
  return (
    <div style={{backgroundColor: "white", width: "50%", margin: "10px auto", padding: "30px auto" }}>
      <div className={styles.paper}>
        <Box style={{ textAlign: "center", margin: "80px auto", padding: "0 60px", paddingTop: "40px" }}>
          <Typography
            component="h2"
            variant="h3"
            style={{ fontWeight: "bold" }}
          >
            Get Started
          </Typography>
          <Link
            to="/signin"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Already have an account?{" "}
            <span style={{ color: "green" }}> Sign in</span>
          </Link>
        </Box>

        <form className={styles.form} noValidate>
          <Box
            component="form"
            sx={{ width: "50%", margin: "20px auto" , paddingBottom: "50px"}}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="standard"
                fullWidth
                required
                id="firstName"
                label="First Name"
                autoFocus
              />

              <TextField
                variant="standard"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />

              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />

              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                variant="standard"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
              <TextField
                variant="standard"
                required
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoComplete=""
              />
              <TextField
                variant="standard"
                required
                fullWidth
                id="occupation"
                label="Occupation"
                name="occupation"
                autoComplete=""
              />
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={expertise}
                  onChange={handleChange}
                  label="Expertise"
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"beginner"}>Beginner</MenuItem>
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"expert"}>Expert</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.submit}
            >
             Create Account
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
