import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Typography,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LoginLayout from "src/layout/LoginLayout/LoginLayout";
import { useRouter } from "next/router";
import CircularProgressBar from "src/components/CircularProgressBar";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .selfEvaluationBox": {
    "& .MuiSelect-icon ": {
      position: "absolute",
      zIndex: "9",
    },
    "& .imgBox": {
      "& p": {
        margin: "10px 0 45px 0",
      },
    },

    "& .searchBox": {
      margin: "40px 0",
    },

    "& .textField": {
      margin: "10px 0 45px 0",
    },

    "& .handImgBox": {
      display: "flex",
      alignItems: "center",
      marginTop: "50px",

      "& img": {
        marginRight: "16px",
      },
    },
  },
}));

export default function SelfEvaluation() {
  const [option, setOption] = React.useState("");
  const router = useRouter();
  const selectoption = [{ title: "Yes" }, { title: "No" }];

  return (
    <MainComponent>
      <Box className="selfEvaluationBox">
        <Box className="imgBox">
          <Box>
            <Typography variant="h4">Self Evaluation</Typography>
            <Typography variant="body2">
              Current Teams Strengths and Weaknesses
            </Typography>
          </Box>
        </Box>
        <Box mt={5}>
          <CircularProgressBar progress="75"/>
        </Box>
        <Box className="searchBox">
          <Typography variant="h6" color="#161E29" fontSize="18px">
            Question 1:
          </Typography>
          <Box my={3}>
            <Typography variant="body2">
              Are you currently experiencing challenges related to staffing
              shortages?
            </Typography>
          </Box>
          <Typography variant="body2">Select</Typography>
          <Box className="textField">
            <Autocomplete
              freeSolo
              disableClearable
              fullWidth
              options={selectoption.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Document To Talk About"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/auth/report-strategy");
            }}
          >
            Continue
          </Button>
        </Box>
        <Box className="handImgBox">
          <img src="/images/handImg.png" alt="handImg" />
          <Typography>
            Your input, Our Analysis: Together, We are on the path to
            “Outstanding CQC Success!”
          </Typography>
        </Box>
      </Box>
    </MainComponent>
  );
}
SelfEvaluation.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
