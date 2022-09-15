import { Box, Button, Grid, Paper, Typography, IconButton } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CoPresentIcon from '@mui/icons-material/CoPresent';
import AllOutIcon from '@mui/icons-material/AllOut';
import React from "react";
import Image from "../images/mentors.png";


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    height: "400px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#606060",
    backgroundBlendMode: "multiply",
  },
};

const Hero = () => {
  return (
    <div>
      <Paper elevation={0} style={styles.paperContainer}>
        <Box
          sx={{
            paddingTop: "80px",
            flexGrow: 1,
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">
            Find a Professional Mentor right for you!
          </Typography>
          <Typography variant="h6">We have you covered</Typography>
          <Button variant="contained">Get Started</Button>
        </Box>
      </Paper>

      <Paper elevation={0} sx={{ width: "70%", margin: "-70px auto 20px", padding: "15px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
            <Box sx={{padding: "20px", borderRight: "1px solid gray", textAlign: "center", marginLeft: "20px" }}>
            <IconButton  size="large" sx={{ p: 0 , marginBottom: "10px"}}>
              <LockIcon color="primary" fontSize="50px" />
            </IconButton>
            <Typography variant="body1">Our Mentors are honest and confidential</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} >
            <Box sx={{padding: "20px", textAlign: "center", marginLeft: "20px", borderRight: "1px solid gray" }}>
            <IconButton sx={{ p: 0 }}>
              <AllOutIcon color="primary" h={10} />
            </IconButton>
            <Typography variant="body1">We provide good guidance and counsel</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{padding: "20px", textAlign: "center", marginLeft: "20px" }}>
            <IconButton sx={{ p: 0 }}>
              <CoPresentIcon color="primary" h={10} />
            </IconButton>
            <Typography variant="body1">Shares knowledge and life experiences</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Hero;
