import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography, colors } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LoginLayout from "@/layout/LoginLayout/LoginLayout";
import { useRouter } from "next/router";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    "& .careLogoBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",

      "& h5": {
        margin: "30px 0 50px 0",
        color: "#161E29",
        fontWeight: "500",
        fontSize: "20px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px !important",
        },
      },
    },
    "& .HeaderSection": {
      paddingLeft: "55px",
      marginTop: "24",
      marginBottom: "64px",
    },

    "& .searchBox": {
      "& svg": {
        cursor: "pointer",
        color: "rgba(22, 30, 41, 0.40) !important",
        position: "absolute !important",
        right: "11px !important",
        zIndex: "99 !important",
      },
      "& p": {
        marginTop: "10px",
      },
    },

    "& .buttonBox": {
      display: "flex",
      marginTop: "50px",
    },
  },
}));

export default function CareQuality() {
  const router = useRouter();
  return (
    <MainComponent>
      <Box className="mainBox">
        <Box className="careQualityBox">
          <Box className="careLogoBox">
            <Box>
              <img
                src="/images/careQuality.png"
                alt="careQuality"
                className="detailsImg"
              />
            </Box>
            <Box>
              <Typography variant="h5">
                Search for your CQC Business Page
              </Typography>
            </Box>
          </Box>

          <Box>
            <Box className="searchBox">
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="Search here..."
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
              />
              <Typography variant="body2">Powered by CQC Database</Typography>
            </Box>
          </Box>

          <Box className="buttonBox">
            <Box mr={3}>
              <Button
                variant="contained"
                color="secondary"
                style={{ minWidth: "124px !important" }}
                onClick={()=>{router.back()}}
              >
                Back
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  router.push("/auth/self-evaluation");
                }}
              >
                Continue
              </Button>
            </Box>
            </Box>
          </Box>
        </Box>
    </MainComponent>
  );
}

CareQuality.getLayout = function getLayout(page) {
  return <LoginLayout>{page}</LoginLayout>;
};
