import React from 'react'
import { Paper, Grid, Typography } from "@mui/material";
import woman from "../images/womanP.png";
import { Box } from "@mui/material";

const Testimonial = () => {
  return (
    <div style={{marginTop: "60px", backgroundColor: "grey"}}>
      <Paper elevation={0} sx={{  margin: "50px 0", padding: {md: "30px",xs: "5px"}}}>
        <Grid container sx={{width: {md: "100%", lg: "70%", xs: "100%"}, margin: "0 auto"}}>
          <Grid item xs={12} md={6}>
            <img alt="woman" src={woman} style={{ borderRadius: "50%", height: "200px", width: "200px"}} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: "50px", marginTop: "20px"}}>
              <Typography variant="body1" color="primary" sx={{fontSize: "30px", fontWeight: "bold"}}>
                "We have seasoned mentors that will help you achieve all your
                goals. Get a mentor today and be glad you did..."
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Testimonial