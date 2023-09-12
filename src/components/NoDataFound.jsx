import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";

export default function NoDataFound({ text }) {
  return (
    <Box
      display="flex"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Box align="center">
        <img
          src={"images/nodataImg.png"}
          style={{ maxWidth: "150px" }}
          alt=""
        />
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
}
