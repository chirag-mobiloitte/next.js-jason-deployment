import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import HomeLayout from "src/layout/HomeLayout";

const ChatBotBox = styled(Box)(({ theme }) => ({
  "& .messageSection": {
    borderRadius: "20px",
    flexDirection: "column",
    padding: "30px",
    background: "#F7F7F7",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    "& p": {
      color: "rgba(0, 0, 0, 0.60)",
      fontWeight: "300",
    },
  },
  "& .chatHeightBox": {
    overflow: "auto",
    height: "200px",
    "& .leftChaatBox": {
      marginTop: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.04)",
      borderRadius: "50px 50px 50px 0px",
      padding: "10px",
      maxWidth: "585px",
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
  },
}));

export default function ChatBotSection() {
  return (
    <ChatBotBox>
      <Box className="messageSection">
        <Box>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Chat bot</Typography>
          </Box>
          <Box className="chatHeightBox">
            <Box className="leftChaatBox">
              <Typography variant="body1">
                Hello, Please provide me with s mucjh details about the campaign
                you would like to create
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
              <Typography variant="body2">8:24 PM &nbsp;08/07/2023</Typography>
            </Box>
          </Box>
          <Box className="searchBox" mt={5}>
            <FormControl fullWidth>
              <TextField
                variant="standard"
                placeholder="Send Message..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box className="sendButton">
                        <IconButton>
                          <SendIcon
                            sx={{
                              color: "#7A69FE",
                              fontSize: "20px",
                              marginBottom: "15px",
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
      </Box>
    </ChatBotBox>
  );
}

ChatBotSection.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
