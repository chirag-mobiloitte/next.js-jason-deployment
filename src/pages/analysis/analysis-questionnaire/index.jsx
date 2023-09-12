import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { performanceAnalysisQuestionnaireData } from "src/data";
import CircularProgressBar from "src/components/CircularProgressBar";

const MainDocumentBox = styled("Box")(({ theme }) => ({}));

export default function AnalysisQuestion() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Typography variant="h2">
            Staff Performance Analysis Questionnaire
          </Typography>
          <Paper elevation={3} sx={{ marginTop: "40px" }}>
            <Box mt={5}>
              <CircularProgressBar progress="75"/>
            </Box>
            <Box>
              <Typography variant="h5">Course Description</Typography>
              <Typography variant="body2" mt={1}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. In
                publishing and graphic design, In publishing and graphic design,
                Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on
                meaningful content. In publishing and graphic design, In
                publishing and graphic design,{" "}
              </Typography>
            </Box>
            <Box style={{ marginTop: "50px" }} className="displayWrap">
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Question:&nbsp;
              </Typography>
              <Typography variant="body2">
                How would you rate the overall performance of the staff members
                in providing care and support?
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography
                variant="body2"
                style={{ color: "#161E29", fontWeight: 500 }}
              >
                Options:
              </Typography>
              {performanceAnalysisQuestionnaireData &&
                performanceAnalysisQuestionnaireData?.map((data, index) => {
                  return (
                    <Box
                      key={`options${index}`}
                      style={{ margin: "8px 0px", maxWidth: "350px" }}
                      className="displaySpacebetween"
                    >
                      <Typography variant="body2">
                        {data.optionTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ color: "#161E29", fontWeight: 300 }}
                      >
                        {data.optionAnswer}
                      </Typography>
                    </Box>
                  );
                })}
            </Box>
            <Box mt={5}>
              <Button variant="contained" color="primary">
                Next Question
              </Button>
            </Box>
          </Paper>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

AnalysisQuestion.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
