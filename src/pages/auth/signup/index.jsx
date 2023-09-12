import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import styled from "@emotion/styled";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MainComponent = styled("Box")((theme) => ({
  "& .signUpBox": {
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
  },
}));
export default function Signup() {
  const router = useRouter();

  const navigateLogin = () => {
    router.push("/auth/login");
  };
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
          <Box className="textfiledBox">
            <Box className="fieldBox">
              <Typography variant="body2" marginBottom="8px">
                Full Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="standard-basic"
                placeholder="Enter full name"
              />
            </Box>
            <Box className="fieldBox">
              <Typography variant="body2" marginBottom="8px">
                Email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="standard-basic"
                placeholder="Enter full email"
              />
            </Box>
            <Box className="fieldBox">
              <Typography variant="body2" marginBottom="8px">
                Username
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="standard-basic"
                placeholder="Enter username"
              />
            </Box>
            <Box className="fieldBox">
              <Typography variant="body2" marginBottom="8px">
                Create Password
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="standard-basic"
                placeholder="Enter password"
              />
            </Box>
            <Box>
              <Typography variant="body2" marginBottom="8px">
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                id="standard-basic"
                placeholder="Enter confirm password"
              />
            </Box>
          </Box>
          <Box className="tickBox">
            <Checkbox defaultChecked color="secondary" />
            <Typography variant="body2">
              I agree with
              <Link href="/terms-and-conditions"> Terms and Conditions </Link>
              and <Link href="/privacy-policy"> Privacy Policy</Link>.
            </Typography>
          </Box>
          <Box mb={4}>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
          <Box display="flex">
            <Typography variant="body2">
              You already have an account?
            </Typography>
            <Typography
              onClick={navigateLogin}
              variant="body2"
              color="#000000DE"
              fontWeight="500"
              style={{ cursor: "pointer" }}
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
