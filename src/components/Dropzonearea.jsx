import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Dropzone from "react-dropzone";
import styled from "@emotion/styled";
import { AiFillDelete } from "react-icons/ai";
const DocumentUploaderBox = styled("Box")(({ theme }) => ({
  "& .carePlanBox": {
    "& h5": {
      color: "#161E29",
      fontWeight: "500",
      margin: "16px 0px 8px",
    },
    "& p": {
      color: "rgba(22, 30, 41, 0.87)",
      fontWeight: "300",
      marginBottom: "8px",
    },
    "& .uploadedImage": {
      "& img": {
        maxHeight: "300px",
        position: "relative",
        top: "0px",
        padding: "5px",
        width: "100%",
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat !important",
        objectFit: "cover !important",
      },
      "& .MuiIconButton-root": {
        fontSize: "35px",
        position: "absolute",
        left: "400px",
      },
    },
  },
}));
const Dropzonearea = () => {
  const [dropZoneImage, setDropZoneImage] = useState("");
  const handleDrop = (acceptedFiles) => {
    setDropZoneImage(URL.createObjectURL(acceptedFiles[0]));
  };
  const removeImage = () => {
    setDropZoneImage("");
  };

  return (
    <DocumentUploaderBox>
      <Box className="carePlanBox">
        {dropZoneImage ? (
          <Box className="uploadedImage">
            <img
              src={dropZoneImage}
              className="viewImg"
              alt={`View Image: ${dropZoneImage}`}
            />
            <IconButton onClick={() => removeImage()}>
              <AiFillDelete />
            </IconButton>
          </Box>
        ) : (
          <Box className={`displayColumn dropZoneBox`} mt={2}>
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <Box
                  align="center"
                  className="dropZoneBox1"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <img
                    src="/images/drap.svg"
                    alt="Dragimage"
                    cursor="pointer"
                  />
                  <Box mt={3}>
                    <Typography variant="body2">
                      Drag and Drop here ?{" "}
                    </Typography>
                  </Box>
                  <Box mt={3} mb={3}>
                    <Typography variant="body2">or</Typography>
                  </Box>
                  <Box mb={3}>
                    <Button variant="outlined" color="primary">
                      Browse Files
                    </Button>
                  </Box>
                </Box>
              )}
            </Dropzone>
          </Box>
        )}
      </Box>
    </DocumentUploaderBox>
  );
};

export default Dropzonearea;
