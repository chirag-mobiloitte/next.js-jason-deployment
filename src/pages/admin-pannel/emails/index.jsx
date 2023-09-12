import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Button,
  Typography,
  styled,
  Avatar,
  Container,
} from "@mui/material";
import React, { useState } from "react";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .campaingBox": {
      background: "#F9F9FF",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "none",
      border: "0.5px solid #D2CCFF",
    },
    "& p": {
      fontWeight: 400,
    },
    "& h4": {
      color: "#161E29",
      fontWeight: "600",
    },
    "& .profileBox": {
      "& p": {
        color: "#161E29",
        fontWeight: 500,
      },
    },
  },
}));
export default function Emails() {
  const [tabs, setTabs] = useState("Campaign");
  const campaingProfileData = [
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
    {
      img: "/images/profileImage.jpg",
      name: "Maria Jain",
      address: "Resident",
      btnName: "Read",
      date: "21 MAY 2023",
      time: "14:45",
    },
  ];
  return (
    <Box className="mainContainerHomeLayout">
      <MainComponent>
        <Box className="mainCardBox">
          <Container>
            <Box className={`displayStart`} mb={2}>
              <Typography variant="h4">Emails</Typography>
              <Typography
                variant="body2"
                style={{
                  marginLeft: "8px",
                  color: "var(--style, rgba(22, 30, 41, 0.60))",
                  fontWeight: 400,
                }}
              >
                (9 Emails)
              </Typography>
            </Box>
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
                        <Typography variant="body1">{data?.name}</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: "var(--style, rgba(22, 30, 41, 0.60))",
                            fontWeight: 300,
                          }}
                        >
                          {data?.address}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body1">{data?.date}</Typography>
                      <Typography
                        variant="body1"
                        style={{
                          color: "var(--style, rgba(22, 30, 41, 0.60))",
                          fontWeight: 300,
                        }}
                      >
                        {data?.time}
                      </Typography>
                    </Box>
                    <Button variant="contained" color="primary">
                      {data?.btnName}
                    </Button>
                  </Box>
                );
              })}
          </Container>
        </Box>
      </MainComponent>
    </Box>
  );
}
Emails.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
