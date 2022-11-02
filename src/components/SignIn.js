import {
    Box,
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const SignIn = () => {
    
  
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
      },
      submit: {
        fontWeight: "bold",
        marginTop: "30px"
      },
    };
    return (
      <div style={{backgroundColor: "white", width: "50%", margin: "10px auto", padding: "10px auto" }}>
        <div className={styles.paper}>
          <Box style={{ textAlign: "center", margin: "30px auto", padding: "0 60px", paddingTop: "40px" }}>
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
  
          <form className={styles.form} noValidate>
            <Box
              component="form"
              sx={{ width: "50%", margin: "20px auto" , paddingBottom: "50px"}}
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
  
              
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={styles.submit}
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
  