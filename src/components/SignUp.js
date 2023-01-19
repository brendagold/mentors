import {
  Box,
  Button,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, useMemo } from "react";
import signupData from "../utils/signupData";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import useFetch from "./../hooks/useFetch";

const SignUp = () => {
  const [formData, setFormData] = useState(signupData);
  const [errors, setErrors] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "warning",
  });
  const { data, error, loading, reFetch } = useFetch(
    "http://localhost:8000/api/users"
  );

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const validate = (fieldValues = formData) => {
    let temp = { ...errors };
    if ("firstname" in fieldValues)
      temp.firstname = fieldValues.firstname ? "" : "This field is required.";
    if ("lastname" in fieldValues)
      temp.lastname = fieldValues.lastname ? "" : "This field is required.";
    if ("email" in fieldValues) {
      temp.email =
        (/$^|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid.") ||
        (fieldValues.email.length !== 0 ? "" : "Email Address is required.");
    }
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required.";
    if ("address" in fieldValues)
      temp.address = fieldValues.address ? "" : "This field is required.";
    if ("bio" in fieldValues)
      temp.bio = fieldValues.bio ? "" : "This field is required.";
    if ("occupation" in fieldValues)
      temp.occupation = fieldValues.occupation ? "" : "This field is required.";
    if ("expertise" in fieldValues)
      temp.expertise =
        fieldValues.expertise.length !== 0 ? "" : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === formData) {
      return Object.values(temp).every((x) => x === "");
    }
  };

  const handleChange = (evt) => {
    const { name, checked, value, type } = evt.target;
    evt.preventDefault();
    const currentValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: currentValue });
    validate({ [name]: currentValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (validate()) {
        console.log(formData);
        setNotify({
          isOpen: true,
          message: "Registration Successful",
          type: "success",
        });
      } else {
        setNotify({
          isOpen: true,
          message: "Some Required Field(s) Missing",
          type: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }

    // Create a local Storage if none exist
    // if (localStorage.getItem("formData") === null) {
    //   localStorage.setItem("formData", "[]");
    // }
    // addRegisterUser();
  };

  const styles = {
    paper: {
      marginTop: "14px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "red",
    },

    form: {
      width: "50%",
      marginTop: "10px",
    },
    submit: {
      marginTop: "30px",
    },
  };

  const fileSelectedHandler = (e) => {
    //console.log(e.target.files[0])
    setThumbnail(e.target.files[0]);
    setFormData({ ...formData, profile_img: e.target.files[0] });
  };
  
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        margin: "10px auto",
        padding: "30px auto",
      }}
    >
      <div className={styles.paper}>
        <Box
          style={{
            textAlign: "center",
            margin: "80px auto",
            padding: "0 60px",
            paddingTop: "40px",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            style={{ fontWeight: "bold" }}
          >
            Get Started
          </Typography>
          <Link
            to="/signin"
            style={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            Already have an account?{" "}
            <span style={{ color: "green" }}> Sign in</span>
          </Link>
        </Box>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Box
            sx={{ width: "50%", margin: "20px auto", paddingBottom: "50px" }}
            noValidate
            autoComplete="off"
          >
            <div>
              {thumbnail && (
                <img
                  src={preview}
                  style={{ maxWidth: "200px" }}
                  alt="upload icon"
                />
              )}
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  onChange={fileSelectedHandler}
                />
                <Button
                  color="primary"
                  aria-label="add"
                  variant="contained"
                  component="span"
                >
                  {thumbnail ? "Choose another photo" : "Upload Photo"}
                </Button>
              </label>

              <TextField
                autoComplete="fname"
                name="firstname"
                variant="standard"
                fullWidth
                onChange={handleChange}
                required
                value={formData.firstname}
                id="firstname"
                label="First Name"
                autoFocus
                error={errors.firstname ? true : false}
                helperText={errors.firstname}
              />

              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.lastname}
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lname"
                error={errors.lastname ? true : false}
                helperText={errors.lastname}
              />

              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email ? true : false}
                helperText={errors.email}
              />

              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password ? true : false}
                helperText={errors.password}
              />

              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.address}
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                error={errors.address ? true : false}
                helperText={errors.address}
              />
              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.bio}
                id="bio"
                label="Bio"
                name="bio"
                autoComplete=""
                error={errors.bio ? true : false}
                helperText={errors.bio}
              />
              <TextField
                variant="standard"
                required
                fullWidth
                onChange={handleChange}
                value={formData.occupation}
                id="occupation"
                label="Occupation"
                name="occupation"
                autoComplete=""
                error={errors.occupation ? true : false}
                helperText={errors.occupation}
              />
              <FormControl variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-standard-label">
                  Expertise
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  label="Expertise"
                  error={errors.expertise ? true : false}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"beginner"}>Beginner</MenuItem>
                  <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"expert"}>Expert</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.submit}
            >
              Create Account
            </Button>
          </Box>
          <Notification notify={notify} setNotify={setNotify} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
