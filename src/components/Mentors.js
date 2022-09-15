import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import profilePic from "../images/jd.jpeg";

const styles = {
  mentorContainer: {
    backgroundColor: "red",
    padding: "5px",
    width: "100%",
    position: "relative",
    "&:hover": {
        backgroundColor: "blue"
    },
  },
  mentorImage: {
    height: "300px",
    width: "350px",
    borderRadius: "8px",
    opacity: "1",
    display: "block",
    transition: ".5s ease",
    backfaceVisibility: "hidden",
  },
  mentorContent: {
    transition: ".5s ease",
    opacity: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
};

const Mentors = () => {
  return (
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: "50px", textAlign: "center" }}
      >
        Some of our seasoned mentors
      </Typography>
      <Paper elevation={0} sx={{ padding: "15px", backgroundColor: "#e5e5e5" }}>
        <Grid
          container
          spacing={2}
          sx={{ width: { md: "100%", xs: "100%" }, margin: "0 auto" }}
        >
          <Grid item xs={12} md={4}>
            <Box style={styles.mentorContainer}>
              <img
                alt="hehe"
                src={profilePic}
                className="mentorImg"
                style={styles.mentorImage}
              />
              <div className="mentorCont" style={styles.mentorContent}>
                <div class="text">John Doe</div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "5px" }}>
              <img
                alt="hehehe"
                src={profilePic}
                style={{ height: "300px", width: "350px", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: "5px" }}>
              <img
                alt="heheheehe"
                src={profilePic}
                style={{ height: "300px", width: "350px", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Mentors;
