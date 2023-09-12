import React, { useState } from "react";
import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import OtpInput from "react-otp-input";
import { useRouter } from "next/router";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .otpSection": {
    "& p": {
      margin: "10px 0 45px 0",
    },
  },
  "& .otpBox": {
    width: "100%",
    maxWidth: "39%",

    "& input": {
      border: "1.2px solid rgba(0, 0, 0, 0.25)",
      borderRadius: "50px",
      fontSize: "20px",
      height: "55px !important",
      width: "55px !important",
      marginRight: "20px",
      background: "rgba(0, 0, 0, 0.03)",
    },
    "& .resendBox": {
      display: "flex",
      justifyContent: "end",
      margin: "10px 0 50px",
      display: "flex",
      justifyContent: "end",
    },
  },
}));

export default function optVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  return (
    <MainComponent>
      <Box className="otpSection">
        <Typography variant="h4">OTP Verification</Typography>
        <Typography variant="body2">
          Please enter the 4 digit verification code that was sent to
          abc@gmail.com The code is valid for 3 minute.
        </Typography>
      </Box>
      <Box className="otpBox">
        <Grid contained>
          <Grid item sm={12} md={6} lg={6}>
            <Box>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                autoFocus={true}
                inputType="number"
                renderInput={(props) => <input {...props} />}
                secure
              />
              <Typography variant="body2" textAlign="right" className="resend">
                Resend code in
                <span style={{ color: "#7A69FE", fontWeight: "500" }}>
                  120s
                </span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => router.push("/auth/login")}
        >
          submit
        </Button>
      </Box>
    </MainComponent>
  );
}

optVerification.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
