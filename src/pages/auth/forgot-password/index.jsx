import LoginLayout from "@/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import { Box, Button, FormHelperText, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import * as yep from "yup";
import React, { useState } from "react";
const MainComponent = styled("Box")((theme) => ({
  "& .forgotPassBox": {
    "& p": {
      margin: "10px 0 45px 0",
    },
  },
}));

export default function ForgotPassword() {
  const router = useRouter();
  const formInitialSchema = {
    email: "",
  };
  const formValidationSchema = yep.object().shape({
    email: yep
      .string()
      .email("Please enter your valid email address.")
      .max(256, "Email should not exceed 256 characters.")
      .required("Email is required."),
  });
  const handleFormSubmit = async (values) => {};
  return (
    <MainComponent>
      <Box className="forgotPassBox">
        <Box>
          <Typography variant="h4">Forgot Password</Typography>
          <Typography variant="body2">
            Enter your details to continue.
          </Typography>
        </Box>
      </Box>
      <Formik
        initialValues={formInitialSchema}
        validationSchema={formValidationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ errors, handleBlur, handleChange, touched, values }) => (
          <Form>
            <Box className="emailTextBox">
              <Typography variant="body2" mb={1}>
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter email address"
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
            <Box className="buttonBox" mt={5}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => {
                  router.push("/auth/otp-verification");
                }}
              >
                Send
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </MainComponent>
  );
}

ForgotPassword.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
