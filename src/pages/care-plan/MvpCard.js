import React from "react";
import { Box, Typography, Container, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
const MvpCardMainBox = styled("Box")(({ theme }) => ({
  marginTop: "140px",

  "& .mainBox": {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.08)",
    "& p": {
      lineHeight: "29px",
    },
    "& .descriptionText": {
      minHeight: "60px",
    },
  },
  "& button": {
    textTransform: "capitalize",
  },
  "& .imageBox": {
    with: "200px",
    height: "100px",
    "& img": {
      width: "auto",
      maxWidth: "100%",
      objectfit: "cover",
    },
  },
}));

export default function CareCard(props) {
  const { data } = props;
  const router = useRouter();
  return (
    <>
      {/* <NewCom/> */}
      <MvpCardMainBox>
        <Paper elevation={3} className="mainBox">
          <Box>
            <Box className="imageBox displayCenter" align="center">
              <img src={data.img} alt="" />
            </Box>

            <Box mt={1} className="descriptionText">
              <Typography variant="body2" color="#161E29">
                {data.text2}
              </Typography>
            </Box>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  router.push("/care-gatestarted");
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Paper>
      </MvpCardMainBox>
    </>
  );
}
