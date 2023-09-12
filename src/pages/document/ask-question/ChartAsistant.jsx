import HomeLayout from "src/layout/HomeLayout";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  FormControl,
  Grid,
  Avatar,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { RiArrowDropDownLine } from "react-icons/ri";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { BsFillQuestionCircleFill, BsQuestionCircleFill } from "react-icons/bs";
import { BiQuestionMark } from "react-icons/bi";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .chartAsistantBox": {
    "& h2": {
      color: "#161E29",
    },
    "& .perpalBox": {
      backgroundColor: "#7A69FE",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
    },

    "& .profile": {
      position: "relative",
      "& h5": {
        color: "#161E29",
        fontWeight: "500",
      },
      "& .perpalBox": {
        backgroundColor: "#7A69FE",
        borderRadius: "50%",
        width: "58px",
        height: "58px",
      },
      "& .whiteBox": {
        backgroundColor: "#FFFFFF",
        borderRadius: "50%",
        width: "54px",
        height: "54px",
        "& img": {
          borderRadius: "50%",
          maxWidth: "50px",
        },
      },
      "& .greenBox": {
        backgroundColor: "#00FF38",
        borderRadius: "50%",
        width: "12px",
        height: "12px",
        position: "absolute",
        zIndex: 1,
        top: "12px",
        left: "46px",
      },
    },

    "& .manage-responsive": {
      "& svg": {
        color: "#fff",
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
    "& .leftChaatBox": {
      marginTop: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      borderRadius: "20px 20px 20px 0px",
      padding: "25px",
      maxWidth: "700px",
      "& p": {
        color: "rgba(22, 30, 41, 0.87)",
        fontWeight: "200",
      },
    },
    "& .leftProfileBox": {
      marginTop: "8px",
      "& p": {
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        lineHeight: "146.5%",
        marginLeft: "16px",
      },
    },
    "& .rightChaatBox": {
      marginTop: "8px",
      backgroundColor: "#7A69FE",
      borderRadius: "20px 20px 0px 20px",
      padding: "25px",
      maxWidth: "700px",
      "& p": {
        color: "#FFF",
        fontWeight: "200",
        lineHeight: "182%",
      },
    },
    "& .rightProfileBox": {
      marginTop: "8px",
      "& p": {
        color: "var(--style, rgba(22, 30, 41, 0.60))",
        lineHeight: "146.5%",
        marginLeft: "16px",
        marginRight: "16px",
      },
    },
    "& .searchBox": {
      "& button": {
        background: "transparent !important",
      },
      "& svg": {
        fontSize: "20px",
      },
    },
    "& .dropDownBox": {
      margin: "0px 0px 16px",
      "& p": {
        marginBottom: "8px",
        color: "rgba(0, 0, 0, 0.87)",
        fontWeight: "200",
        lineHeight: "26px",
      },
    },
    "& .chatHeightBox": {
      overflow: "auto",
      height: "300px",

      // maxHeight: "calc(100dvh - 156px)",
    },
  },
}));
export default function ChartAsistant() {
  const selectoption = [{ title: "Male" }, { title: "Female" }];
  const selectoption1 = [{ title: "English" }, { title: "Hindi" }];
  const router = useRouter();
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <MainDocumentBox>
          <Box className="chartAsistantBox">
            <Typography variant="h2">Ask About Document</Typography>
            <Paper elevation={3} style={{ marginTop: "8px" }}>
              <Box className="displaySpacebetween manage-responsive">
                <Box>
                  <Box className={`perpalBox displayCenter`}>
                    <img src="/images/chaatIcon.svg" />
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
            <Box className="dropDownBox">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box style={{ width: "100%", position: "relative" }} mt={1}>
                    <RiArrowDropDownLine className="dopicon" />
                    <Autocomplete
                      freeSolo
                      disableClearable
                      fullWidth
                      options={selectoption.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Document To Talk About"
                          variant="standard"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box style={{ width: "100%", position: "relative" }} mt={1}>
                    <RiArrowDropDownLine className="dopicon" />
                    <Autocomplete
                      freeSolo
                      disableClearable
                      fullWidth
                      options={selectoption1.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Care To Talk Aboutt"
                          variant="standard"
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

            <Box className={`profile displayStart`}>
              <Box className={`perpalBox displayCenter`}>
                <Box className={`whiteBox displayCenter`}>
                  <img src="/images/profileImage.jpg" width="100%" />
                </Box>
              </Box>
              <Box style={{ marginLeft: "16px" }}>
                <Typography variant="h5">Maria Jain</Typography>
                <Typography variant="body2">Online</Typography>
              </Box>
              <Box className="greenBox"></Box>
            </Box>
            <Box>
              <Divider
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  marginTop: "30px",
                }}
              />
            </Box>
            <Box className="chatHeightBox">
              <Box className="leftChaatBox">
                <Typography variant="body1">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </Typography>
              </Box>
              <Box className={`leftProfileBox displayStart`}>
                <Avatar src="/images/profileImage.jpg" />
                <Typography
                  variant="body2"
                  style={{
                    color: "rgba(22, 30, 41, 0.87)",
                    lineHeight: "146.5%",
                    marginLeft: "16px",
                  }}
                >
                  Maria Jain
                </Typography>
                <Typography variant="body2">
                  8:24 PM &nbsp;08/07/2023
                </Typography>
              </Box>

              <Box className="displayEnd">
                <Box className="rightChaatBox">
                  <Typography variant="body1">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </Typography>
                </Box>
              </Box>
              <Box className="displayEnd">
                <Box className={`rightProfileBox displayStart`}>
                  <Typography
                    variant="body2"
                    style={{
                      color: "rgba(22, 30, 41, 0.87)",
                      lineHeight: "146.5%",
                      marginLeft: "16px",
                    }}
                  >
                    Maria Jain
                  </Typography>
                  <Typography variant="body2">
                    8:24 PM &nbsp;08/07/2023
                  </Typography>
                  <Avatar src="/images/profileImage.jpg" />
                </Box>
              </Box>

              <Box className="leftChaatBox">
                <Typography variant="body1">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </Typography>
              </Box>
              <Box className={`leftProfileBox displayStart`}>
                <Avatar src="/images/profileImage.jpg" />
                <Typography
                  variant="body2"
                  style={{
                    color: "rgba(22, 30, 41, 0.87)",
                    lineHeight: "146.5%",
                    marginLeft: "16px",
                  }}
                >
                  Maria Jain
                </Typography>
                <Typography variant="body2">
                  8:24 PM &nbsp;08/07/2023
                </Typography>
              </Box>
            </Box>

            <Box className="searchBox" mt={5}>
              <FormControl fullWidth>
                <TextField
                  variant="standard"
                  placeholder="Sent Message..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box className="sendButton">
                          {/* <IconButton>
                            <BsFillQuestionCircleFill
                              sx={{
                                color: "rgba(0, 0, 0, 0.60)",
                                fontSize: "20px",
                              }}
                            />
                          </IconButton> */}
                          <IconButton>
                            <SendIcon
                              sx={{
                                color: "rgba(0, 0, 0, 0.60)",
                                fontSize: "20px",
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
        </MainDocumentBox>
      </Container>
    </Box>
  );
}

ChartAsistant.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
