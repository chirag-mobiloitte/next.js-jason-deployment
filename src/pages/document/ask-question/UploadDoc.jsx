import HomeLayout from "src/layout/HomeLayout";
import React, { useCallback } from "react";
import Dropzone from "react-dropzone";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  TextField,
  FormControlLabel,
  LinearProgress,
  linearProgressClasses,
  InputAdornment,
} from "@mui/material";

import { styled } from "@mui/system";
import { GrAttachment } from "react-icons/gr";

const data = [
  {
    title: "Business Operations:",
    text1: "Business Plan",
    text2: "operation Manual",
    text3: "Risk Management Plan",
    text4: "Quality Assurance Plan",
    text5: "Disaster Recovery and Business Continuity Plan",
  },
  {
    title: "Employment & HR:",
    text1: "Employee Handbook",
    text2: "Employee Contracts",
    text3: "Recruitment and Retention Strategy",
    text4: "Performance Evaluation Form ",
    text5: "Training and Development Plan",
  },
  {
    title: "Policies:",
    text1: "Care Policy",
    text2: "Health and Safety Policy",
    text3: "Data Protection and Confidentiality Policy",
    text4: "Human Resources Policy",
    text5: "Complaints Procedure Policy",
  },
  {
    title: "Contracts:",
    text1: "Service User Agreement/ Contracts",
    text2: "Employment Contracts",
    text3: "Subcontractor Contracts",
    text4: "Confidentiality Agreements ",
    text5: "Service Level Agreements",
  },
  {
    title: "Health & Medical:",
    text1: "Health & Safety policy",
    text2: "Infection Control Policy",
    text3: "Medical Report Management Policy",
    text4: "Medication Management Policy",
    text5: "Incident Report Form",
  },
  {
    title: "Food & Health:",
    text1: "Food Safety policy",
    text2: "Nutrition & Hydration policy",
    text3: "Allergy Management Plan",
    text4: "Meal plan & Menu",
    text5: "Food Inspection Checklist",
  },
  {
    title: "Finance:",
    text1: "Financial Management Policy",
    text2: "Annual Budget",
    text3: "Pricing and Fee Structure",
    text4: "Invoicing and Payment Procedure",
    text5: "Financial Audit Procedure",
  },
  {
    title: "Care Planning:",
    text1: "Individual Care Plan",
    text2: "Care Plan Review Form",
    text3: "Resident Assessment Form",
    text4: "Activity Planning Document ",
    text5: "End of Life Care Plan",
  },
  {
    title: "General Legal Matters:",
    text1: "Data Protection and Privacy Policy",
    text2: "Confidentiality Agreement",
    text3: "Insurance Document",
    text4: "Compliance Audit Report",
    text5: "Service User Agreement",
  },
];
const MainCarePlanBox = styled("Box")(({ theme }) => ({
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
    "& .dropZoneBox": {
      background: "rgba(122, 105, 254, 0.08)",
      border: "2px dashed #7A69FE",
      borderRadius: "10px",
      width: "100%",
      padding: "30px",
    },
    "& .medicalReportBox": {
      background: "rgba(122, 105, 254, 0.08)",
      borderRadius: "10px",
      width: "100%",
      padding: "30px",
    },
    "& .robertPlannerBox": {
      background: "rgba(122, 105, 254, 0.08)",
      borderRadius: "10px",
      width: "100%",
      padding: "30px",
    },
    "& .pinkBox": {
      backgroundColor: "rgba(122, 105, 254, 0.10)",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
      padding: "20px",
    },
  },
}));
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7A69FE" : "#7A69FE",
  },
}));
export default function UploadDoc() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainCarePlanBox>
          <Box className="carePlanBox">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 300 }}
                  >
                    Upload Files
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "rgba(22, 30, 41, 0.75)", fontWeight: 300 }}
                  >
                    JPEG, PNG, GIF, Max 10mb
                  </Typography>

                  <Box className={`dropZoneBox displayColumn`} mt={2}>
                    <img
                      src="/images/fileUpload.png"
                      width="40px"
                      height="40px"
                    />
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "24px", marginTop: "24px" }}
                    >
                      Drag and Drop here
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "24px" }}
                    >
                      or
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginBottom: "24px" }}
                    >
                      Browse Files
                    </Button>
                    <Dropzone
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
                    </Dropzone>

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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: 300 }}
                  >
                    Uploading Status
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ color: "rgba(22, 30, 41, 0.75)", fontWeight: 300 }}
                  >
                    Here you can see the status of uploading your files
                  </Typography>

                  <Box className={`medicalReportBox displayStart`} mt={2}>
                    <Box className={`pinkBox displayCenter`}>
                      <img
                        src="/images/doc-img.jpg"
                        alt="documentImage"
                        width="22px"
                        height="30px"
                      />
                    </Box>
                    <Box ml={2}>
                      <Typography variant="body2">
                        Uploading Medical Report
                      </Typography>
                      <Box mt={2}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box className={`robertPlannerBox displayStart`} mt={2}>
                    <Box className={`pinkBox displayCenter`}>
                      <img
                        src="/images/pdf-image.jpg"
                        alt="documentImage"
                        width="22px"
                        height="30px"
                      />
                    </Box>
                    <Box ml={2} mt={1}>
                      <Typography variant="body2">
                        Uploading Medical Report
                      </Typography>
                      <Box mt={2}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </MainCarePlanBox>
      </Container>
    </Box>
  );
}

UploadDoc.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
