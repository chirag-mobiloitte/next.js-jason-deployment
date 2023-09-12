import {
  Box,
  Button,
  Paper,
  Typography,
  styled,
  Grid,
  Divider,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .mainCampaingBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "30px",
      background: "#F7F7F7",
      width: "100%",
      backgroundSize: "cover !important",
      backgroundRepeat: "no-repeat !important",
      objectFit: "cover !important",
      [theme.breakpoints.down("sm")]: {
        padding: "0px",
      },
    },
    "& .campaingBox": {
      background: "#F9F9FF",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "none",
      border: "0.5px solid #D2CCFF",
    },
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
    "& p": {
      color: "var(--style, rgba(22, 30, 41, 0.60))",
      fontWeight: 400,
    },
    "& .mainTab": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      background: "rgba(249, 249, 255, 0.45)",
      border: "1px solid #D2CCFF",
      borderRadius: "50px",
      width: "fit-content",
      padding: "3px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        display: "block",
        borderRadius: "10px",
      },
    },
    "& .tabActiveButtons": {
      background: "#7A69FE",
      borderRadius: "50px",
      padding: "11px 23px",
      transition: "0.8s",
      cursor: "pointer",
      whiteSpace: "pre",
      transition: "all 500ms ease-in-out",
      "& p": {
        color: "#FFF !important",
      },
    },
    "& .tabButtons": {
      borderRadius: "50px",
      padding: "11px 23px",
      whiteSpace: "pre",
      cursor: "pointer",
      "& p": {
        color: "#161E29",
      },
    },
    "& .profileBox": {
      "& p": {
        color: "#161E29",
        fontWeight: 500,
      },
    },
  },
}));
export default function Campaing() {
  const [tabs, setTabs] = useState("Campaign");
  const campaingProfileData = [
    {
      img: "/images/profileImage.jpg",
      text1: "Create your first campaign",
      text2: "Start engaging you",
      btnName: "Get Started",
    },
    {
      img: "/images/profileImage.jpg",
      text1: "Review your campaign performance",
      text2: "View open rates, click",
      btnName: "View Details",
    },
    {
      img: "/images/profileImage.jpg",
      text1: "Manage notifications and interactions",
      text2: "Never miss on",
      btnName: "Message",
    },
    {
      img: "/images/profileImage.jpg",
      text1: "View and edit your campaigns",
      text2: "Make changes and",
      btnName: "Edit",
    },
  ];
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="mainCampaingBox">
          <Box className="displayStart" mb={1}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Top 5 Compaign</Typography>
          </Box>

          <Box className="mainTab" mt={3} mb={3}>
            <Box
              className={
                tabs === "Campaign" ? "tabActiveButtons" : "tabButtons"
              }
              onClick={() => setTabs("Campaign")}
            >
              <Typography variant="body2">Campaign Name</Typography>
            </Box>
            <Box
              className={
                tabs === "Audience" ? "tabActiveButtons" : "tabButtons"
              }
              onClick={() => setTabs("Audience")}
            >
              <Typography variant="body2">Target Audience</Typography>
            </Box>
            <Box
              className={tabs === "Rates" ? "tabActiveButtons" : "tabButtons"}
              onClick={() => setTabs("Rates")}
            >
              <Typography variant="body2">Click Rates</Typography>
            </Box>
          </Box>
          <Box className="displaySpacebetween">
            <Typography variant="body1">Campaign Name</Typography>
            <Typography variant="body1">Welcome to Mail box!</Typography>
          </Box>
          <Divider
            sx={{
              border: "1px solid #D2CCFF",
              width: "100%",
              margin: "16px 0px",
            }}
          />
          {campaingProfileData &&
            campaingProfileData?.map((data, index) => {
              return (
                <Box
                  className={`campaingBox displaySpacebetween`}
                  mt={1}
                  mb={1}
                >
                  <Box className={`profileBox displayStart`}>
                    <Avatar src={data?.img} />
                    <Box
                      style={{
                        marginLeft: "8px",
                      }}
                    >
                      <Typography variant="body1">{data?.text1}</Typography>
                      <Typography
                        variant="body1"
                        style={{
                          color: "var(--style, rgba(22, 30, 41, 0.60))",
                          fontWeight: 300,
                        }}
                      >
                        {data?.text2}
                      </Typography>
                    </Box>
                  </Box>
                  <Button variant="outlined" color="secondary">
                    {data?.btnName}
                  </Button>
                </Box>
              );
            })}
        </Box>
      </Box>
    </MainComponent>
  );
}
Campaing.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
