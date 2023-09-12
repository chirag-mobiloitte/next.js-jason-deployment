import styled from "@emotion/styled";
import Footer from "./Footer";
import React, { useState } from "react";
import Topbar from "./Topbar";
import TopbarBottom from "./TopbarBottom";
import { Avatar } from "@mui/material";
import ChatassitatModal from "src/components/ChatassitatModal";
export default function HomeLayout({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Topbar />
      {/* <div style={{ marginTop: "100px" }}>
        <TopbarBottom />
      </div> */}

      <div className="buttonChat" onClick={handleOpen}>
        <Avatar className="iconBox" src="/images/chat_icon.png"></Avatar>
      </div>

      <ChatassitatModal open={open} handleClose={handleClose} />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
}
