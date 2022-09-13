import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "../images/mentors.png"

const styles = {
    paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#606060",
    backgroundBlendMode: "multiply"
    }
}

const Hero = () => {
  return (
    <div>
      <Paper elevation={0} style={styles.paperContainer}>
        <Box sx={{ paddingTop: "80px", flexGrow: 1, color: "white", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Find a Professional Mentor right for you!</Typography>
          <Typography variant="h6">We have you covered</Typography>
          <Button variant="contained">Get Started</Button>
        </Box>
      </Paper>
      
    </div>
  );
};

export default Hero;
