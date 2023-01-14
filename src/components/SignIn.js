import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const styles = {
    paper: {
      marginTop: "14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "red",
    },

    form: {
      width: "50%",
    },
    submit: {
      fontWeight: "bold",
      marginTop: "30px",
    },
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/auth/signin", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate('/')
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        margin: "10px auto",
        padding: "10px auto",
      }}
    >
      <div className={styles.paper}>
        <Box
          style={{
            textAlign: "center",
            margin: "30px auto",
            padding: "0 60px",
            paddingTop: "40px",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            style={{ fontWeight: "bold" }}
          >
            Welcome Back
          </Typography>
          <Link
            to="/signup"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Don't have an account?{" "}
            <span style={{ color: "green" }}> Create account</span>
          </Link>
        </Box>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Box
            sx={{ width: "50%", margin: "20px auto", paddingBottom: "50px" }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                variant="standard"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.submit}
              disabled={loading}
            >
              Sign in
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
