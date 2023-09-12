import * as React from "react";
import { Box, Stepper, Step, Button, Container, Paper } from "@mui/material";
import HomeLayout from "src/layout/HomeLayout";
import styled from "@emotion/styled";
import Step1Component from "./Step1Component";
import Step2Component from "./Step2Component";
import Step3Component from "./Step3Component";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .stepperBox": {
    "& img": {
      marginRight: "1px",
    },
    "& .activeButton": {
      "& .MuiButton-root": {
        border: "1.5px solid #7A69FE",
        background: "rgba(122, 105, 254, 0.10)",
        color: "#7A69FE",
        [theme.breakpoints.down("lg")]: {
          display: "flex",
          marginTop: "16px",
          flexWrap: "wrap",
        },
      },
    },
    "& .deactiveButton": {
      "& .MuiButton-root": {
        border: "1px solid var(--Form-Outline-Color-and-lines-Too, #D2CCFF)",
        background: "#F9F9FF",
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        [theme.breakpoints.down("lg")]: {
          display: "flex",
          marginTop: "16px",
          flexWrap: "wrap",
        },
      },
    },
    "& .MuiStepConnector-line": {
      display: "none",
    },
    "& .MuiStepper-root": {
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        marginTop: "16px",
        flexWrap: "wrap",
      },
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
  },
}));
const steps = [
  {
    title: "1. Create New Document",
    img: "/images/step1Image.png",
  },
  {
    title: "2. Contract Creation",
    img: "/images/step2Img.png",
  },
  {
    title: "3. Review Document",
    img: "/images/step3Img.png",
  },
];

export default function HorizontalLinearStepper() {
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

  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="stepperBox">
            <Paper elevation={3} sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
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
                            label?.title === "1. Create New Document") ||
                          (activeStep === 1 &&
                            label?.title === "2. Contract Creation") ||
                          (activeStep === 2 &&
                            label?.title === "3. Review Document")
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
                          {label?.title === "3. Review Document" ? (
                            ""
                          ) : (
                            <ArrowForwardIosIcon
                              className={
                                (activeStep === 0 &&
                                  label?.title === "1. Create New Document") ||
                                (activeStep === 1 &&
                                  label?.title === "2. Contract Creation") ||
                                (activeStep === 2 &&
                                  label?.title === "3. Review Document")
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
                {activeStep === 0 ? (
                  <Step1Component />
                ) : activeStep === 1 ? (
                  <Step2Component />
                ) : (
                  <Step3Component />
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
                    disabled={activeStep === 2}
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

HorizontalLinearStepper.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
