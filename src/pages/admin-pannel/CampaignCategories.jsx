import { campaingCategoriesData } from "@/data";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    "& .shadowBox": {
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
    "& p": {
      color: "rgba(22, 30, 41, 0.75)",
      fontWeight: 400,
    },
    "& .campingBox": {
      borderRadius: "10px",
      padding: "15px",
    },
    "& .gradientBox": {
      height: "70px",
      borderRadius: "50%",
      maxWidth: "70px",
      padding: "15px",
    },
  },
}));
export default function CampaignCategories() {
  return (
    <MainComponent>
      <Box className="mainCardBox">
        <Box className="shadowBox">
          <Box className="displayStart" mb={2}>
            <Box className="blackBox"></Box>
            <Typography variant="h6">Campaign Categories</Typography>
          </Box>

          {campaingCategoriesData &&
            campaingCategoriesData?.map((data, index) => {
              return (
                <Box
                  key={`campaingCategories${index}`}
                  className={`campingBox displayStart`}
                  style={{ background: `${data?.colorCode}` }}
                  mt={1}
                  mb={1}
                >
                  <Box
                    className={`gradientBox displayCenter`}
                    style={{ background: `${data?.gradientColor}` }}
                  >
                    <img src={data?.img} width="100%" />
                  </Box>
                  <Typography variant="body2" style={{ marginLeft: "16px" }}>
                    {data?.text ? data?.text : "N/A"}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>
    </MainComponent>
  );
}
CampaignCategories.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
