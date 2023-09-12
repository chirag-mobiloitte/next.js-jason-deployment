import React from "react";
import { styled } from "@mui/system";
const MainDocumentBox = styled("Box")(({ theme }) => ({
  "& .pagelaoding": {
    alignItems: "center",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
    padding: "0",
  },

  "& .loader": {
    width: 300,
    maxWidth: "100%",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "180px",
    },
  },
}));
export const PageLoader = () => {
  return (
    <MainDocumentBox>
      <div>
        <div className="pagelaoding">
          <div style={{ width: "300px" }} align="center">
            <img className="loader" src="/images/logo.svg" alt="loader" />
            {/* <h1>gcjyh</h1> */}
          </div>
        </div>
      </div>
    </MainDocumentBox>
  );
};
