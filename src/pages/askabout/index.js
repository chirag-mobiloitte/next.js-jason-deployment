import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import SmsIcon from "@mui/icons-material/Sms";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RiArrowDropDownLine } from "react-icons/ri";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .chattexttBox": {
    "& .css-lo8n20-MuiInputBase-root-MuiInput-root": {
      // padding: "16px 0 !important",
      height: "47px",
    },
  },

  "& .chatselectBox": {
    marginBottom: "60px",
    "& .textBox": {
      backgroundColor: "rgba(122, 105, 254, 0.08)",
      padding: "20px",
      borderRadius: "10px",
    },
  },
  "& .selectDocument": {
    padding: "50px 0 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  "& .documentViewBox": {
    "& h2": {
      color: "#161E29",
    },
    "& .perpalBox": {
      backgroundColor: "#7A69FE",
      borderRadius: "50%",
      width: "85px",
      height: "85px",
    },
    "& .profile": {
      position: "relative",
      "& h4": {
        color: "#161E29",
        fontWeight: "500",
      },
      "& .perpalBox": {
        backgroundColor: "#7A69FE",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
      },
    },
    "& .manage-responsive": {
      "& svg": {
        color: "#fff",
        fontSize: "30px",
      },
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        "& button": {
          marginTop: "8px",
        },
      },
    },
    "& .folderBox": {
      marginLeft: "40px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0px",
      },
    },
  },
}));
const selectoption = [
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
  { title: "Enter meeting chair name" },
];
export default function askabout() {
  const [age1, setAge1] = useState("Ten");
  const [age2, setAge2] = useState("Ten");

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="documentViewBox">
            <Typography variant="h4">Ask About Document</Typography>
            <Paper elevation={1} style={{ margin: "24px 0px" }}>
              <Box className="displaySpacebetween manage-responsive">
                <Box>
                  <Box className={`perpalBox displayCenter`}>
                    <SmsIcon />
                  </Box>
                </Box>

                <Box ml={2}>
                  <Typography variant="body2">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English
                  </Typography>
                </Box>

                <Box className="folderBox">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      router.push("/document/ask-question");
                    }}
                  >
                    Back To Folders
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box className="selectDocument">
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body1">
                    Select Document To Talk About
                  </Typography>
                </Box>

                <Box style={{ width: "100%", position: "relative" }}>
                  <RiArrowDropDownLine className="dopicon" />
                  <Autocomplete
                    freeSolo
                    disableClearable
                    fullWidth
                    options={selectoption.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search input"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xs={12}>
                <Box mb={1}>
                  <Typography variant="body1">
                    Select Care To Talk About
                  </Typography>
                </Box>
                <Box style={{ width: "100%", position: "relative" }}>
                  <RiArrowDropDownLine className="dopicon" />
                  <Autocomplete
                    freeSolo
                    disableClearable
                    fullWidth
                    options={selectoption.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Search input"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className="chatselectBox">
            <Box className="textBox">
              <Typography variant="body2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </Typography>
            </Box>
          </Box>

          <Box className="chattexttBox">
            <TextField
              variant="standard"
              placeholder="Sent Message..."
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: "pointer" }}>
                    <img
                      src="/images/send.svg"
                      alt="image"
                      style={{
                        position: "absolute",
                        zIndex: "9",
                        right: "13px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

askabout.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
