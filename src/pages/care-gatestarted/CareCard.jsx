import React from "react";
import { Box, Typography, Container, Button, Paper } from "@mui/material";
import { styled } from "@mui/system";

import Link from "next/link";
const CardMainBox = styled(Box)(({ theme }) => ({
  marginTop: "140px",
  "& .profileImg": {
    height: "248px",
    width: "179px",
    marginTop: "-158px",
    objectFit: "cover",
    borderRadius: "100px 100px 100px 100px",
  },
  "& .mainBox": {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    minHeight: "400px",
    "& h5": {
      fontWeight: "500",
      margin: "20px 0px 16px",
    },
    "& p": {
      lineHeight: "24px",
      color: "rgba(22, 30, 41, 0.75)",
    },
  },
}));

export default function CareCard(props) {
  const { data } = props;
  return (
    <>
      {/* <NewCom/> */}
      <CardMainBox>
        <Paper elevation={3} className="mainBox">
          <Box>
            <img src={data.img} alt="" width="100%" className="profileImg" />

            <Box mt={3}>
              <Typography variant="h5">{data.text1}</Typography>
              <Typography variant="body2">{data.text2}</Typography>
            </Box>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link
                href="/care-plan/care-readmore"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: "capitalize" }}
                >
                  Get Started
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </CardMainBox>
    </>
  );
}
