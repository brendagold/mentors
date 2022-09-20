import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import woman from "../images/womanP.png";
import { Box } from "@mui/material";

const Testimonial = () => {
  return (
    <div style={{ marginTop: "60px", backgroundColor: "grey" }}>
      <Paper
        elevation={0}
        sx={{ margin: "50px 0", padding: { md: "30px", xs: "5px" } }}
      >
        <Grid
          container
          sx={{
            width: { md: "100%", lg: "70%", xs: "100%" },
            margin: "0 auto",
          }}
        >
          <Grid item xs={12} md={6}>
            <img
              alt="woman"
              src={woman}
              style={{
                marginTop: "40px",
                borderRadius: "50%",
                height: "300px",
                width: "300px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: "30px", marginTop: "30px" }}>
              <Typography
                variant="body1"
                color="primary"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                “Free Mentor is the best. I love them.Free Mentor is the best. I
                love them.Free Mentor is the best. I love them.”
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "10px"
                }}
              >
                -- Brenda Peters
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Testimonial;
