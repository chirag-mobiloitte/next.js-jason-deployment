// components/Modal.js
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { BsUpload } from "react-icons/bs";
import { useRouter } from "next/router";

const Modal = ({ open, handleClose }) => {
  const router = useRouter();
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle
        style={{
          padding: "0px",
          lineHeight: "normal",
          background: "#d6a9ff",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <img
          src="/images/createplan.png"
          alt="carePlan"
          style={{ width: "auto", maxWidth: "100%" }}
        />
      </DialogTitle>
      <IconButton
        aria-label="close"
        className="iconTransparent"
        onClick={handleClose}
        sx={{
          background: "transparent",
          color: "gray",
          position: "absolute",
          right: 12,
          top: 12,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Typography variant="h4">
          Create or Upload Existing Plan Documents
        </Typography>
        <Box mt={4}>
          <Typography variant="body1">
            Do you want to create a new care plane or upload.
          </Typography>
        </Box>

        <Box mt={4} mb={4} className="displayStart">
          <Button
            variant="outlined"
            color="primary"
            className="createvariantButton1"
            startIcon={<BsUpload />}
            style={{ textTransform: "capitalize" }}
            onClick={()=>{router.push("/document/upload-document")}}
          >
            Upload
          </Button>{" "}
          &nbsp; &nbsp; &nbsp;
          <Button
            variant="contained"
            color="primary"
            className="createvariantButton1"
            endIcon={<ArrowOutwardIcon />}
            onClick={()=>{router.push("/create-report")}}
          >
            Create From Sratch
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
