import { Box, Button, Grid, Paper, Typography, Modal } from "@mui/material";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import RequestForm from "./RequestForm";

const styles = {
  mentorContainer: {
    padding: "5px",
    width: "100%",
    position: "relative",
    "&:hover $mentorContent": {
      opacity: "1",
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
    backgroundColor: "black",
    filter: "brightness(50%)",
  },
  mentorContent: {
    transition: ".5s ease",
    opacity: "1",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  mentorInfo: {
    color: "white",
    position: "absolute",
    top: "75%",
    left: "5%",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

const Mentors = () => {
  // const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data, loading } = useFetch("http://localhost:8000/mentors");

  console.log(data);
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
          {loading
            ? "Loading"
            : data.map((item) => (
                <Grid item xs={12} md={4} key={item.mentorid}>
                  <Box style={styles.mentorContainer}>
                    <img
                      alt="hehe"
                      src={item.profile_img}
                      className="mentorImg"
                      style={styles.mentorImage}
                    />

                    <div className="mentorCont" style={styles.mentorContent}>
                      <Button
                        onClick={handleOpen}
                        variant="contained"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        Request
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={styles.modalStyle}>
                          <RequestForm />
                        </Box>
                      </Modal>
                    </div>
                    <div style={styles.mentorInfo}>
                      <Typography variant="h5">
                        {item.firstname} {item.lastname}
                      </Typography>
                      <Typography variant="body2">{item.occupation}</Typography>
                    </div>
                  </Box>
                </Grid>
              ))}
        </Grid>
        <Button
          variant="contained"
          style={{ display: "flex", margin: "30px auto", alignItems: "center", justifyContent: "center" }}
        >
          <Link
            to="/allmentors"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            View All Mentors
          </Link>
        </Button>
      </Paper>
    </div>
  );
};

export default Mentors;
