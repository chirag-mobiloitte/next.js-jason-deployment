import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import HomeLayout from "src/layout/HomeLayout";
import styled from "@emotion/styled";
import Step1MeetingComponent from "./Step1MeetingComponent";
import Step2MeetingComponent from "./Step2MeetingComponent";
import Step3MeetingComponent from "./Step3MeetingComponent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Step4MeetingComponent from "./Step4MeetingComponent";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .MuiStepConnector-active": {
    borderColor: "red",
  },
  "& img": {
    marginRight: "1px",
  },
  "& .responsiveManage": {
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      " Button": {
        width: "100%",
      },
    },
  },
  "& .responsiveButton": {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "wrap",
      marginTop: "8px",
    },
  },
  "& .activeButton": {
    "& .css-1o2lrh6-MuiButtonBase-root-MuiButton-root": {
      border: "1.5px solid #7A69FE",
      background: "rgba(122, 105, 254, 0.10)",
      color: "#7A69FE",
      [theme.breakpoints.down("xs")]: {
        padding: "10px 20px",
      },
    },
    "& svg": {
      color: "#7A69FE",
    },
  },
  "& .deactiveButton": {
    "& .css-1o2lrh6-MuiButtonBase-root-MuiButton-root": {
      border: "1px solid var(--Form-Outline-Color-and-lines-Too, #D2CCFF)",
      background: "#F9F9FF",
      color: "var(--style, rgba(22, 30, 41, 0.60))",
    },
  },
  "& .css-z7uhs0-MuiStepConnector-line": {
    display: "none",
  },
  "& .iconActive": {
    color: "#7A69FE",
    position: "absolute",
    right: "-26%",
  },
  "& .iconDeactive": {
    color: "gray",
    position: "absolute",
    right: "-26%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
const steps = [
  {
    title: "1. Meeting Inputs",
    img: "/images/step1Image.png",
  },
  {
    title: "2. Meeting Attendees",
    img: "/images/step2Img.png",
  },
  {
    title: "3. Objective",
    img: "/images/step3Img.png",
  },
  {
    title: "4. Overview",
    img: "/images/step4Img.png",
  },
];

export default function MeetingSteps() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="stepperBox">
            {activeStep === 0 || activeStep === 1 || activeStep === 2 ? (
              <Typography variant="h2" style={{ margin: "40px 0px" }}>
                Plan a Meeting
              </Typography>
            ) : (
              <Box
                className="displaySpacebetween responsiveManage"
                style={{ margin: "40px 0px" }}
              >
                <Typography variant="h2">Meeting Details</Typography>
                <Box ml={1} className={`displaySpacebetween responsiveButton`}>
                  <Button
                    sx={{marginRight:"10px"}}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      router.push("/document/view-folder");
                    }}
                  >
                    Back to folders
                  </Button>
                  <Box className="responsiveButton">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        router.push("/document/ask-question");
                      }}
                    >
                      Ask About Document
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
            <Paper
              elevation={3}
              sx={{ width: "100%" }}
              style={{ padding: "20px", overflow: "hidden" }}
            >
              <Stepper activeStep={activeStep} className="steperscrollBox">
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label?.title} {...stepProps}>
                      <Box
                        className={
                          (activeStep === 0 &&
                            label?.title === "1. Meeting Inputs") ||
                          (activeStep === 1 &&
                            label?.title === "2. Meeting Attendees") ||
                          (activeStep === 2 &&
                            label?.title === "3. Objective") ||
                          (activeStep === 3 && label?.title === "4. Overview")
                            ? "activeButton"
                            : "deactiveButton"
                        }
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={
                            <img src={label?.img} width="20px" height="20px" />
                          }
                        >
                          {label?.title === "4. Overview" ? (
                            ""
                          ) : (
                            <ArrowForwardIosIcon
                              className={
                                (activeStep === 0 &&
                                  label?.title === "1. Meeting Inputs") ||
                                (activeStep === 1 &&
                                  label?.title === "2. Meeting Attendees") ||
                                (activeStep === 2 &&
                                  label?.title === "3. Objective") ||
                                (activeStep === 3 &&
                                  label?.title === "4. Overview")
                                  ? "iconActive"
                                  : "iconDeactive"
                              }
                            />
                          )}

                          {label?.title}
                        </Button>
                      </Box>
                    </Step>
                  );
                })}
              </Stepper>

              <React.Fragment>
                <Divider
                  sx={{ border: "1px solid #D2CCFF", marginTop: "20px" }}
                />
                {activeStep === 0 ? (
                  <Step1MeetingComponent />
                ) : activeStep === 1 ? (
                  <Step2MeetingComponent />
                ) : activeStep === 2 ? (
                  <Step3MeetingComponent />
                ) : (
                  <Step4MeetingComponent />
                )}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkip}
                      sx={{ mr: 1 }}
                    >
                      Skip
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={activeStep === 3}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            </Paper>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

MeetingSteps.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
