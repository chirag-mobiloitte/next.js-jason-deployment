import HomeLayout from "src/layout/HomeLayout";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import DocumentCard from "./DocumentCard";
import { useRouter } from "next/router";
import { documentCardData } from "src/data";

const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentCardBox": {
    "& h2": {
      color: "#161E29",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
      margin: "24px 0px",
    },
    "& .documentCardBox": {
      "& p": {
        margin: "8px 0px !important",
        color: "rgba(22, 30, 41, 0.87)",
        fontWeight: 400,
      },
    },
  },
}));
export default function index() {
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Typography variant="h2">Create a Document</Typography>
            <Typography variant="body2">
              Here you will see a list of pre-existing document templates. If
              the document you need is listed, Click on it to select and start
              editing. If you cannot find the right document template in the
              list, choose the option to “Create new document”.
            </Typography>

            <Grid container spacing={3}>
              {documentCardData &&
                documentCardData?.map((value, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <DocumentCard documentData={value} index={index} />
                    </Grid>
                  );
                })}
            </Grid>
            <Box
              style={{ marginTop: "50px" }}
              onClick={() => {
                router.push("/document/document-creation");
              }}
            >
              <Button variant="contained" color="primary">
                Create New Document
              </Button>
            </Box>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

index.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
