import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormHelperText,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import * as yep from "yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .forgotPassBox": {
    "& p": {
      margin: "10px 0 45px 0",
    },
  },
  "& .buttonBox": {
    marginTop: "40px",
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
}));

export default function changePassword() {
  const route = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const formInitialSchema = {
    password: "",
    confirmPassword: "",
  };
  const formValidationSchema = yep.object().shape({
    password: yep
      .string()
      .trim()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters."
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
        <Box className="forgotPassBox">
          <Typography variant="h4">Change Password</Typography>
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
              <Box className="searchBox">
                <Box>
                  <Typography variant="body2" mb={1}>
                    New Password
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
                <Box mt={4}>
                  <Typography variant="body2" mb={1}>
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
              <Box className="buttonBox">
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </MainComponent>
  );
}
changePassword.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
