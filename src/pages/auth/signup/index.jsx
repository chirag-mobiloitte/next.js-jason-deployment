import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Checkbox,
  Typography,
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as yep from "yup";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
const MainComponent = styled("Box")((theme) => ({
  "& .signUpBox": {
    "& span":{
      cursor:"pointer",
      color:"#7A69FE"
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "14px",
      fontWeight: "300",
    },
    "& .subtitle": {
      margin: "10px 0 45px 0",
    },
    "& .tickBox": {
      display: "flex",
      alignItems: "center",
      margin: "30px 0",

      "& svg": {
        color: "#7A69FE",
      },
      "& a": {
        textDecoration: "underline",
        color: "#000000DE",
      },
    },
    "& .textfiledBox": {
      marginTop: "45px",

      "& p": {
        color: "rgba(0, 0, 0, 0.87)",
      },
      "& .fieldBox": {
        marginBottom: "25px",
      },
      "& .css-1043756-MuiInputBase-root-MuiInput-root": {
        marginBottom: "45px",
      },
    },
    "& .iconsclass1": {
      position: "absolute",
      zIndex: "99",
      color: "#585757",
      fontSize: "20px",
    },
    "& .MuiIconButton-root": {
      background: "transparent !important",
      top: "-10px",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
  },
}));
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const router = useRouter();
  const formInitialSchema = {
    fullName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };
  const formValidationSchema = yep.object().shape({
    fullName: yep
      .string()
      .trim()
      .min(3, "Please enter atleast 3 characters.")
      .max(256, "You can enter only 256 characters.")
      .required("Full name is required.")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/g,
        "Please enter your full name."
      ),
    email: yep
      .string()
      .email("Please enter your valid email address.")
      .max(256, "Email should not exceed 256 characters.")
      .required("Email is required."),
    userName: yep
      .string()
      .trim()
      .min(3, "Please enter atleast 3 characters.")
      .max(256, "You can enter only 256 characters.")
      .required("Full name is required.")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/g,
        "Please enter valid user name."
      ),
    password: yep
      .string()
      .trim()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters ."
      )
      .required("Please enter a new password.")
      .min(6, "The new password must be at least 6 characters long.")
      .max(20, "The new password cannot exceed 20 characters."),

    confirmPassword: yep
      .string()
      .required("Please enter the confirmation password.")
      .oneOf([yep.ref("password"), null], "Passwords Doesn't match."),
  });
  const handleFormSubmit = async (values) => {};


  return (
    <MainComponent>
      <Box>
        <Box className="signUpBox">
          <Typography variant="h4">Get Started Now</Typography>
          <Box className="subtitle">
            <Typography variant="body2">
              Enter your details to continue.
            </Typography>
          </Box>
          <Formik
            initialValues={formInitialSchema}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ errors, handleBlur, handleChange, touched, values }) => (
              <Form>
                <Box className="textfiledBox">
                  <Box className="fieldBox">
                    <Typography variant="body2" marginBottom="8px">
                      Full Name
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter full name"
                      name="fullName"
                      value={values.fullName}
                      error={Boolean(touched.fullName && errors.fullName)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormHelperText error>
                      {touched.fullName && errors.fullName}
                    </FormHelperText>
                  </Box>
                  <Box className="fieldBox">
                    <Typography variant="body2" marginBottom="8px">
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter full email"
                      name="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormHelperText error>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>
                  <Box className="fieldBox">
                    <Typography variant="body2" marginBottom="8px">
                      Username
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter username"
                      name="userName"
                      value={values.userName}
                      error={Boolean(touched.userName && errors.userName)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <FormHelperText error>
                      {touched.userName && errors.userName}
                    </FormHelperText>
                  </Box>
                  <Box className="fieldBox">
                    <Typography variant="body2" marginBottom="8px">
                      Create Password
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              <Box>
                                {showPassword ? (
                                  <HiEye className="iconsclass1" />
                                ) : (
                                  <HiEyeOff className="iconsclass1" />
                                )}
                              </Box>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Box>
                  <Box>
                    <Typography variant="body2" marginBottom="8px">
                      Confirm Password
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder="Enter confirm password"
                      type={showPassword1 ? "text" : "password"}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword1(!showPassword1)}
                              edge="end"
                            >
                              <Box>
                                {showPassword1 ? (
                                  <HiEye className="iconsclass1" />
                                ) : (
                                  <HiEyeOff className="iconsclass1" />
                                )}
                              </Box>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error>
                      {touched.confirmPassword && errors.confirmPassword}
                    </FormHelperText>
                  </Box>
                </Box>
                <Box className="tickBox">
                  <Checkbox defaultChecked color="secondary" />
                  <Typography variant="body2">
                    I agree with
                    <span onClick={()=> {window.open("/static/terms")}}>
                      &nbsp;Terms and Conditions 
                    </span>
                    &nbsp;and <span onClick={()=> {window.open("/static/privacy")}}> &nbsp;Privacy Policy</span>.
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Button variant="contained" color="primary" type="submit" 
                  onClick={()=>{ router.push("/auth/login")}}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box display="flex">
            <Typography variant="body2">
              You already have an account?
            </Typography>
            <Typography
              onClick={()=>{ router.push("/auth/login")}}
              variant="body2"
              color="#000000DE"
              fontWeight="500"
              style={{ cursor: "pointer",}}
            >
              &nbsp;Log In
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
}

Signup.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
