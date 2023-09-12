import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import HomeLayout from "src/layout/HomeLayout";
import { GrAttachment } from "react-icons/gr";
import TableComponent from "src/components/TableComponent";
import CircularProgressBar from "src/components/CircularProgressBar";
import {
  performanceAnalysisTableData,
  performanceAnalysistableHead,
  staffPerformanceSteps,
} from "src/data";

const MainDocumentBox = styled("Box")(() => ({
  "& .carePlanText": {
    "& h5": {
      margin: "30px 0",
    },
  },

  "& .paperBox": {
    "& .listText": {
      "& h6": {
        margin: "30px 0 45px 0",
      },
    },
    "& li": {
      margin: "8px 0 0 16px",
      fontSize: "14px",
      color: "#161E29DE",
    },
  },
  "& .dropZoneBox": {
    background: "rgba(122, 105, 254, 0.08)",
    border: "2px dashed #7A69FE",
    borderRadius: "10px",
    width: "100%",
    padding: "30px",
  },
  "& .inputFieldBox": {
    "& input": {
      margin: "10px 0",
    },
  },
}));

export default function StaffPerformanceAnalysis() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="carePlanText">
            <Typography variant="h2">Staff Performance Analysis</Typography>
            <Typography variant="h5">Staff Analysis</Typography>
          </Box>
          <Paper
            elevation={3}
            className="paperBox"
            sx={{ background: "#00000006" }}
          >
            <Box className="listText">
              <Typography variant="body2">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </Typography>
              <Typography variant="body2" mt={1}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. In
                publishing and graphic design, Lorem ipsum is a placeholder text
                commonly used to demonstrate the visual form of a document or a
                typeface without relying on meaningful content. Lorem ipsum may
                be used as a placeholder before final copy is available.
              </Typography>
            </Box>
            <Divider sx={{ border: "1px solid #CFCFCF", margin: "30px 0px" }} />
            <Typography variant="h6">Steps to Complete</Typography>
            <Box>
              <ul>
                {staffPerformanceSteps &&
                  staffPerformanceSteps?.map((item, index) => (
                    <li>
                      <Typography variant="body2">{item.text1}</Typography>
                    </li>
                  ))}
              </ul>
            </Box>
          </Paper>
          <Box mt={5}>
            <CircularProgressBar progress="75"/>
          </Box>
          <Box mb={5}>
            <Typography variant="h5">Questionnaries Link</Typography>
            <Box mt={1} className="inputFieldBox">
              <Typography variant="h5">
                Send client feedback Questionnarie to collect data regarding
                their experience with the staff members
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="standard"
                placeholder="https://forms.gle/yp2rtwe63348765"
              />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body2"
              style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 300 }}
            >
              Upload Documents for Meeting
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "rgba(22, 30, 41, 0.75)", fontWeight: 300 }}
            >
              JPEG, PNG, GIF, Max 10mb(640 x 480 recommended)
            </Typography>

            <Box className={`dropZoneBox displayColumn`} mt={2}>
              <img src="/images/fileUpload.png" width="40px" height="40px" />
              <Typography
                variant="body2"
                style={{ marginBottom: "24px", marginTop: "24px" }}
              >
                Drag and Drop here
              </Typography>
              <Typography variant="body2" style={{ marginBottom: "24px" }}>
                or
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginBottom: "24px" }}
              >
                Browse Files
              </Button>
              {/* <Dropzone
                      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone> */}

              <TextField
                fullWidth
                variant="outlined"
                placeholder="Upload from URL"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <GrAttachment color="#000" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Paper elevation={3} style={{ margin: "24px 0px" }}>
            <Typography variant="h5">Uploaded Documents</Typography>
          </Paper>
          <Paper elevation={1}>
            <TableComponent
              tabledata={performanceAnalysisTableData}
              tableHead={performanceAnalysistableHead}
            />
          </Paper>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}
StaffPerformanceAnalysis.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
