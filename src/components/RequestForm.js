import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import React from "react";

const RequestForm = () => {
  const styles = {
    submit: {
      fontWeight: "bold",
      marginTop: "10px",
      marginLeft: "30px",
      
    },
    box: {
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
        margin: "30px auto"
    }
  };
  return (
    <Box sx={styles.box}>
      <TextareaAutosize
        minRows={6}
        aria-label="maximum height"
        placeholder="Enter your question here"
        style={{ width: 200 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={styles.submit}
      >
        Request
      </Button>
    </Box>
  );
};

export default RequestForm;
