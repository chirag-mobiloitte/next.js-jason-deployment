import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import PoliciesCard from "./PoliciesCard";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "src/components/TableComponent";
import { RxDashboard } from "react-icons/rx";
import { BsFilter, BsUpload } from "react-icons/bs";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .documentBox": {
    "& .subHeading": {
      "& p": {
        marginTop: "40px",
        marginBottom: "30px",
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        fontWeight: "300",
        lineHeight: "normal",
      },
    },
    "& .searchBox": {
      "& .css-5rx5ly-MuiSvgIcon-root": {
        marginBottom: "40px",
        fontSize: "22px",
      },
      "& .sendButton": {
        "& .css-gaffrz-MuiButtonBase-root-MuiIconButton-root": {
          backgroundColor: "transparent !important",
        },
      },
    },
    "& p": {
      color: "#161E29",
      fontWeight: "300",
      lineHeight: "normal",
    },
    "& h2": {
      color: "#161E29",
      fontWeight: "500",
      marginBottom: "40px",
    },
    "& h5": {
      color: "#161E29",
      fontWeight: "600",
      margin: "40px 0px",
    },
    "& .showBox": {
      borderRadius: "50px",
      background: "rgba(22, 30, 41, 0.05)",
      width: "100%",
      maxWidth: "250px",
      padding: "8px 30px",
    },
  },
}));
export default function QuestionPolicies() {
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  const policiesData = [
    {
      img: "/images/note.png",
      text: "Sensory Impairment",
    },
    {
      img: "/images/note.png",
      text: "Lone Working and personal safety",
    },
    {
      img: "/images/note.png",
      text: "Equipment Safety",
    },
    {
      img: "/images/note.png",
      text: "Wheelchair Safety",
    },
    {
      img: "/images/note.png",
      text: "Sensory Impairment",
    },
    {
      img: "/images/note.png",
      text: "Equipment Safety",
    },
    {
      img: "/images/note.png",
      text: "Lone Working and personal safety",
    },
    {
      img: "/images/note.png",
      text: "Wheelchair Safety",
    },
  ];
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentBox">
            <Box className="displaySpacebetween">
              <Box>
                <Typography variant="h2">Policies and Procedure</Typography>
              </Box>

              <Box className="searchBox">
                <Typography variant="body2">Search here..</Typography>
                <FormControl fullWidth>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box className="sendButton">
                            <IconButton>
                              <SearchIcon
                                sx={{
                                  color: "rgba(0, 0, 0, 0.60)",
                                  fontSize: "30px",
                                }}
                              />
                            </IconButton>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box className="displaySpacebetween" mt={3} mb={3}>
              <Box>
                <Typography variant="h6">Showing 35 Policies</Typography>
                <Typography
                  variant="body1"
                  style={{ color: "var(--style, rgba(22, 30, 41, 0.60))" }}
                >
                  Based your preferences
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  Create New Policy
                </Button>
                <IconButton style={{ marginLeft: "8px" }}>
                  <BsFilter />
                </IconButton>
                <IconButton style={{ marginLeft: "8px" }}>
                  {" "}
                  <BsFilter />
                </IconButton>
                <Button
                  startIcon={<BsFilter />}
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "8px" }}
                >
                  Filter
                </Button>
              </Box>
            </Box>
            <Grid container spacing={3}>
              {policiesData &&
                policiesData.map((data, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <PoliciesCard data={data} index={index} />
                    </Grid>
                  );
                })}
            </Grid>
            <Box style={{ marginTop: "50px" }} className="displaySpacebetween">
              <Box className="showBox">
                <Typography variant="body1">
                  Showing 10 from 160 data
                </Typography>
              </Box>
              <Box>
                <Pagination
                  count={noOfPages}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            </Box>
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

QuestionPolicies.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
