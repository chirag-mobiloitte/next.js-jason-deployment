import HomeLayout from "src/layout/HomeLayout";
import { Typography, Box, Paper } from "@mui/material";
import React from "react";

export default function DocumentCard({ documentData }) {
  return (
    <Box className="documentCardBox">
      <Paper elevation={3}>
        <Typography variant="h6">
          {documentData?.title ? documentData?.title : "N/A"}
        </Typography>
        <Typography variant="body2">
          {documentData?.text1 ? documentData?.text1 : "N/A"}
        </Typography>
        <Typography variant="body2">
          {documentData?.text2 ? documentData?.text2 : "N/A"}
        </Typography>
        <Typography variant="body2">
          {documentData?.text3 ? documentData?.text3 : "N/A"}
        </Typography>
        <Typography variant="body2">
          {documentData?.text4 ? documentData?.text4 : "N/A"}
        </Typography>
        <Typography variant="body2">
          {documentData?.text5 ? documentData?.title : "N/A"}
        </Typography>
      </Paper>
    </Box>
  );
}

DocumentCard.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
