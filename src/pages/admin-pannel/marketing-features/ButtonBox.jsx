import HomeLayout from "src/layout/HomeLayout";
import { Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
const BtnBox = styled("Box")(({ theme }) => ({
  "& .BtnBoxClass": {
    borderRadius: "20px",
    flexDirection: "column",
    padding: "30px",
    background: "#F7F7F7",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
    },
    "& .css-knar8-MuiButtonBase-root-MuiButton-root": {
      color: "#FFF",
      background: "#7A69FE",
    },
  },
}));
export default function ButtonBox() {
  return (
    <BtnBox>
      <Box className="BtnBoxClass">
        <Box className="displayCenter" style={{flexDirection:"column"}}>
       
            <Button variant="contained" color="primary">
              Publish Campaign
            </Button>
          <Box my={2}>
            <Button variant="contained" color="primary">
              Schedule Campaign
            </Button>
          </Box>
            <Button variant="contained" color="secondary">
              Save Draft
            </Button>
        </Box>
      </Box>
    </BtnBox>
  );
}
ButtonBox.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
