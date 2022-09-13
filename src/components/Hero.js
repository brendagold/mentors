import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "../images/mentors.png"

const styles = {
    paperContainer: {
    backgroundImage: `url(${Image})`
    }
}

const Hero = () => {
  return (
    <div>
      <Paper elevation={0} style={styles.paperContainer}>
        <Box sx={{ padding: "70px 0", flexGrow: 1, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
          <Typography>Find a Professional Mentor right for you!</Typography>
          <Typography>We have you covered</Typography>
          <Button variant="contained">Get Started</Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Hero;
