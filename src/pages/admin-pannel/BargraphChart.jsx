import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Bar } from "react-chartjs-2";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .barGraphBox": {
      borderRadius: "20px",
      flexDirection: "column",
      padding: "30px",
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

const BargraphChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Data",
        backgroundColor: "#E4E0FF",
        borderWidth: 1,
        data: [8, 16, 24, 16, 28, 8, 16, 24, 28, 8, 16, 24],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Remove y-axis grid lines
        },
        beginAtZero: true,
        ticks: {
          stepSize: 8, // Adjust this step size as needed
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        borderRadius: 50,
      },
    },
  };

  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="barGraphBox">
          <Box className="displayStart" mb={1}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Campaign Details</Typography>
          </Box>
          <Box style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Bar data={data} options={options} />
          </Box>
        </Box>
      </Box>
    </MainComponent>
  );
};

export default BargraphChart;
