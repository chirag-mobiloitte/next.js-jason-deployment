import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .donutBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "30px",
      background: "#F7F7F7",
      width: "100%",
      "& .donutGraph": {
        width: "275px",
        height: "275px",
        margin: "0 auto",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
          width: "200px",
          height: "200px",
        },
        "& h4": {
          position: "absolute",
          textAlign: "center",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
    },
    "& h6": {
      color: "#161E29",
      fontWeight: 500,
      marginLeft: "8px",
    },
  },
}));

const DonutChart = () => {
  const data = {
    labels: ["Unavailable", "Available"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#988AFF", "#E4E0FF"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="donutBox" style={{ position: "relative" }}>
          <Box className="displayStart" mb={3}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Campaign Details</Typography>
          </Box>
          <Box className="donutGraph">
            <Doughnut data={data} options={options} />
            <Typography variant="h4">
              {data.datasets[0].data[1]}%
              <Typography variant="body2">Open Rate</Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
};

export default DonutChart;
