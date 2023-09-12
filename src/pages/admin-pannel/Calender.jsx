import { Box, styled } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .calenderBox": {
      borderRadius: "20px",
      flexDirection: "column",
      background: "#F7F7F7",
      width: "100%",
    },
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
  },
}));
export default function Calender() {
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="calenderBox">
          <Box className="displayStart">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
}
Calender.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
