import { Box, Button, TextareaAutosize } from "@mui/material";
import React, {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

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
    margin: "30px auto",
  },
};
const RequestForm = ({ mentorId }) => {
  const [request, setRequest] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/sessions", {
        mentorId,
        request,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401 && !user) {
        navigate("/signin");
      }
    }
  };
  console.log(request);
  return (
    <Box sx={styles.box}>
      <TextareaAutosize
        minRows={6}
        aria-label="maximum height"
        placeholder="Enter your question here"
        style={{ width: 300 }}
        value={request}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={styles.submit}
      >
        Request
      </Button>
    </Box>
  );
};

export default RequestForm;
