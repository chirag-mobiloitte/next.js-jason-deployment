import { Box, Button, Container, Paper, Typography, styled } from "@mui/material";
import React from "react";
import HomeLayout from "src/layout/HomeLayout";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .carePlanText": {
    "& h5": {
      margin: "30px 0",
    },
  },


  "& .paperBox":{
    "& .listText": {
        "& h6":{
            margin:"30px 0 45px 0"
        },
      },
      "& li":{
        margin: "8px 0px",
        fontSize:"14px",
        color:"#161E29DE"   
      },
      "& .btnBox":{
      }
  }
}));

const items = [
  {
    text1:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text1:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text1:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text1:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    text1:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

export default function CarePlanSteps() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="carePlanText">
            <Typography variant="h2">Care Plan Steps</Typography>
            <Typography variant="h5">Care Plan</Typography>
          </Box>
          <Paper
            elevation={3}
            className="paperBox"
            sx={{background: "#00000006" }}
          >
            <Box className="listText">
              <Typography variant="body2" color="#161E29DE">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </Typography>
              <Typography variant="h6">Steps to Complete</Typography>
            </Box>
            <Box>
              <ul>
                {items.map((item, index) => (
                  <li>{item.text1}</li>
                ))}
              </ul>
            </Box>
            <Box my={6} className="displayEnd">
                <Button variant="contained" color="primary">Get Started</Button>
            </Box>
          </Paper>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}
CarePlanSteps.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
