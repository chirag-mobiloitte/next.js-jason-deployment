import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import * as yep from "yup";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .loginUpBox": {
    "& .MuiInputBase-input::placeholder": {
      fontSize: "14px",
      fontWeight: "300",
    },
    "& .enterBox": {
      margin: "10px 0 45px 0",
    },
    "& .tickBox": {
      marginTop: "-10px",
      "& svg": {
        color: "#7A69FE",
      },
      "& a": {
        textDecoration: "none",
        color: "#7A69FE",
      },
    },
    "& .textfiledBox": {
      marginTop: "45px",

      "& .fieldBox": {
        marginBottom: "25px",
      },
    },
    "& .registerButton": {
      display: "flex",
      justifyContent: "center",
      gap: "10",
    },
    "& .footerbox": {
      "& p": {
        marginTop: "32px",
      },
    },
  },
}));
export default function Login() {
  const route = useRouter();
  const formInitialSchema = {
    email: "",
    password: "",
  };
  const formValidationSchema = yep.object().shape({
    email: yep
      .string()
      .email("Please enter a valid email.")
      .max(256, "Email should not exceed 256 characters.")
      .required("Email is required."),

    password: yep
      .string()
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Please enter a valid password. It must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8-16 characters long."
      )
      .required("Password is required.")
      .max(16, "Password should not exceed 16 characters.")
      .min(8, "Password must be a minimum of 8 characters."),
  });
  const handleFormSubmit = async (values) => {};
  return (
    <MainComponent>
      <Box className="loginUpBox">
        <Typography variant="h4">Get Started Now</Typography>
        <Box className="enterBox">
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
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter email."
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
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter password."
                    name="password"
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error>
                    {touched.password && errors.password}
                  </FormHelperText>
                </Box>
              </Box>
              <Box className="tickBox displaySpacebetween">
                <Box className="displayCenter">
                  <Checkbox defaultChecked color="secondary" />
                  <Typography variant="body1">Remember me</Typography>
                </Box>
                <Box
                  onClick={() => {
                    route.push("/auth/forgot-password");
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#7A69FE", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </Typography>
                </Box>
              </Box>
              <Box mt={4} mb={4}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => {
                    route.push("/admin-pannel");
                  }}
                >
                  Log in
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        <Box>
          <Box className="displayStart">
            <Button
              sx={{ marginRight: "10px" }}
              variant="outlined"
              color="secondary"
              className="socialButton socialButtonres"
              startIcon={<img src="/images/google.svg" />}
            >
              Register with Google
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              className="socialButton"
              startIcon={<img src="/images/telegram.svg" />}
            >
              Register with Twitter
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              style={{ padding: "10px 24px" }}
              variant="outlined"
              color="secondary"
              className="socialButton"
              startIcon={<img src="/images/facebook.svg" />}
            >
              Register with Facebook
            </Button>
          </Box>
        </Box>

        <Box className="footerbox">
          <Typography variant="body2">
            You already have an account? &nbsp;
            <span
              style={{
                color: "#000",
                fontWeight: 400,
                cursor: "pointer",
              }}
              onClick={() => {
                route.push("/auth/signup");
              }}
            >
              Sign Up
            </span>
          </Typography>
        </Box>
      </Box>
    </MainComponent>
  );
}

Login.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
