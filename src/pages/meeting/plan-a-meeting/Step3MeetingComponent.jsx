import HomeLayout from "src/layout/HomeLayout";
import {
  Typography,
  Box,
  Grid,
  FormControl,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { meatingData } from "src/data";

const MainReviewBox = styled("Box")(({ theme }) => ({
  "& .reviewBox": {
    margin: "80px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px",
    },
    "& p": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: "400",
    },
    "& .documentType": {
      "& p": {
        color: "#161E29",
        fontWeight: "400",
        marginBottom: "8px",
       
      },
      "& .MuiOutlinedInput-root ": {
        marginBottom: "24px",
        [theme.breakpoints.down("md")]: {
          marginBottom: "16px",
        },
      },
    },
  },
}));
export default function Step3MeetingComponent() {
  const router = useRouter();

  return (
    <MainReviewBox>
      <Box className="reviewBox">
        <Box>
          <Grid Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Box className="writeBox">
                <Typography variant="h5">Objective Details</Typography>
                <Typography variant="body1" sx={{marginTop:"16px"}}>
                  Provide the names attendees
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              {meatingData &&
                meatingData?.map((data, index) => {
                  return (
                    <Box className="documentType">
                      <Typography variant="body1">{data?.text1}</Typography>
                      <FormControl fullWidth>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder={data?.placeHolder}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <Typography
                                  variant="subTitle1"
                                  sx={{ zIndex: 1,color:"rgba(0, 0, 0, 0.60)", opacity:"0.5" }}
                                >
                                  {data?.page}
                                </Typography>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </FormControl>
                    </Box>
                  );
                })}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainReviewBox>
  );
}

Step3MeetingComponent.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
