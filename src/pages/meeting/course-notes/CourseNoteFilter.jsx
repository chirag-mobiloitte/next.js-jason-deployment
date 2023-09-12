import HomeLayout from "src/layout/HomeLayout";
import {
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import SearchIcon from "@mui/icons-material/Search";
import { CiFilter } from "react-icons/ci";
import { MdOutlineMail, MdSwapVert } from "react-icons/md";
import { AiOutlineBell, AiOutlineInfoCircle } from "react-icons/ai";
import SmsIcon from "@mui/icons-material/Sms";
const CourseNoteFilterBox = styled(Box)(({ theme }) => ({
  "& .paperBox": {
    padding: "10px",
    border: "0.5px solid rgba(0, 0, 0, 0.25)",
    background: "#FFF",
    "& .MuiInput-root ": {
      height: "40px",
    },
    "& .MuiInput-input": {
      fontWeight: "300",
    },
    "& h5": {
      color: "#161E29",
    },
    "& .searchBox": {
      "& button": {
        background: "transparent !important",
      },
      "& svg": {
        fontSize: "20px",
      },
    },
    "& .filtersButton": {
      marginLeft: "20px",
      "& .filterIcon": {
        "& button": {
          background: "#f5f5f5!important",
          width: "37px",
          height: "37px",
          borderRadius: "50%",
          border: "1px solid #8080803d",
          marginRight: "9px",
          padding: "0px",
          "& svg": {
            color: "gray !important",
          },
        },
      },
    },
  },
}));
export default function CourseNoteFilter({ title }) {
  return (
    <CourseNoteFilterBox>
      <Paper elevation={1} className="paperBox">
        <Box className="displaySpacebetween displayWrap">
          <Typography variant="h4">{title}</Typography>
          <Box className="displayStart displayWrap">
            <Box className="searchBox">
              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  placeholder="Search here.."
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
            <Box className={`filtersButton displaySpacebetween`}>
              <Box className="filterIcon">
                <IconButton>
                  <MdOutlineMail />
                </IconButton>
              </Box>
              <Box className="filterIcon">
                <IconButton>
                  <AiOutlineBell />
                </IconButton>
              </Box>
              <Box className="filterIcon">
                <IconButton>
                  <SmsIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </CourseNoteFilterBox>
  );
}

CourseNoteFilter.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
