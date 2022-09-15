import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import woman from "../images/womanP.png";
import { Box } from "@mui/material";
import { fontWeight } from "@mui/system";

const Note = () => {
  return (
    <div style={{marginTop: "60px"}}>
      <Paper elevation={0} sx={{ margin: "50px 0", padding: "30px"}}>
        <Grid container>
          <Grid item xs={6}>
            <img src={woman} />
          </Grid>
          <Grid item xs={6}>
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
  );
};

export default Note;
