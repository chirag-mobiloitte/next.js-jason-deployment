import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Paper, Divider } from "@mui/material";
import React from "react";

export default function ReportCard({ documentData }) {
  return (
    <Box className="reportCardBox">
      <Paper elevation={3}>
        <Typography variant="h6">
          {documentData?.title ? documentData?.title : "N/A"}
        </Typography>
        <Divider
          style={{
            width: "100%",
            margin: "8px 0px",
            border: "1px solid rgba(0, 0, 0, 0.15)",
          }}
        />
        <Box className="displaySpacebetween" mt={1}>
          <Typography variant="body2">
            {documentData?.text1 ? documentData?.text1 : "N/A"}
          </Typography>
          <img src={documentData?.image1} width="20px" height="20px" />
        </Box>
        <Box className="displaySpacebetween" mt={1}>
          <Typography variant="body2">
            {documentData?.text2 ? documentData?.text2 : "N/A"}
          </Typography>
          <img src={documentData?.image2} width="20px" height="20px" />
        </Box>
        <Box className="displaySpacebetween" mt={1}>
          <Typography variant="body2">
            {documentData?.text3 ? documentData?.text3 : "N/A"}
          </Typography>
          <img src={documentData?.image3} width="20px" height="20px" />
        </Box>
        <Box className="displaySpacebetween" mt={1}>
          <Typography variant="body2">
            {documentData?.text4 ? documentData?.text4 : "N/A"}
          </Typography>
          <img src={documentData?.image4} width="20px" height="20px" />
        </Box>
        <Box className="displaySpacebetween" mt={1}>
          <Typography variant="body2">
            {documentData?.text5 ? documentData?.title : "N/A"}
          </Typography>
          <img src={documentData?.image5} width="20px" height="20px" />
        </Box>
      </Paper>
    </Box>
  );
}

ReportCard.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
