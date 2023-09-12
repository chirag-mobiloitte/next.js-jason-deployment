import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { reviewData } from "src/data";

const MainReviewBox = styled("Box")(({ theme }) => ({
  "& .reviewBox": {
    margin: "40px 0px",
    "& h2": {
      color: "#161E29",
    },
    "& h6": {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "400",
    },
    "& p": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: "300",
      margin: "8px 0px 16px 0px",
    },
    "& img": {
      marginRight: "8px",
    },
  },
}));

export default function Step3Component() {
  const router = useRouter();

  return (
    <MainReviewBox>
      <Box className="reviewBox">
        <Typography variant="h2">Review Document</Typography>

        <Box style={{ marginTop: "30px" }}>
          {reviewData &&
            reviewData.map((value, index) => {
              return (
                <Box key={`review${index}`}>
                  <Typography variant="h6">
                    {value?.question ? value?.question : "N/A"}
                  </Typography>
                  <Typography variant="body2">
                    {value?.answer ? value?.answer : "N/A"}
                  </Typography>
                </Box>
              );
            })}
        </Box>
        <Box className="displayStart">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              router.push("/document/document-view");
            }}
          >
            Save Contract
          </Button>
          <Box style={{ marginLeft: "10px" }}>
            <Button variant="contained" color="secondary">
              <Box className="displaySpacebetween">
                <img src="/images/pdf-image.jpg" width="20px" height="20px" />
                Save As PDF
              </Box>
            </Button>
          </Box>
          <Box style={{ marginLeft: "10px" }}>
            <Button variant="contained" color="secondary">
              <Box className="displaySpacebetween">
                <img src="/images/doc-img.jpg" width="20px" height="20px" />
                Save As DOC
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </MainReviewBox>
  );
}

Step3Component.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
