import {
  AppBar,
  Toolbar,
  Drawer,
  Grid,
  Box,
  Container,
  IconButton,
  Avatar,
  Hidden,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "./../../components/Logo";
import Link from "next/link";
import NotificationModal from "src/components/NotificationModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  console.log("ugihghh", router?.pathname);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1220
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const displayDesktop = () => {
    return (
      <Container maxWidth="lg">
        <Toolbar className="topbarmainBox">
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
            className="displayEnd"
          >
            <IconButton onClick={() => {router.push("/admin-pannel/emails")}}>
              <NotificationsIcon sx={{ color: "#A4A4A7" }} />
            </IconButton>
            <Box className="updateButtonBox">
              <Typography variant="body2" sx={{ color: "#fff" }}>
                5 Updates
              </Typography>
            </Box>
            <Box className="updateButtonBox1 displayStart">
              <Avatar
                src="/images/profile.png"
                alt="image"
                style={{ borderRadius: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#000", marginLeft: "10px" }}
              >
                Maria Joseph
              </Typography>
            </Box>
          </Grid>
        </Toolbar>
        <NotificationModal open={open} handleClose={() => setOpen(false)} />
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={""}>
        <Hidden xsDown>
          <Drawer
            // className="drawerBox"

            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
            style={{
              width: "260px",
              height: "100%",
              display: "flex",
              padding: "20px 0px 20px 20px",
            }}
          >
            {femmecubatorLogo}
            <IconButton onClick={() => setOpen(true)}>
              <NotificationsIcon sx={{ color: "#A4A4A7" }} />
            </IconButton>
            <Box className="updateButtonBox">
              <Typography variant="body2" sx={{ color: "#fff" }}>
                5 Updates
              </Typography>
            </Box>
            <Box className="updateButtonBox1 displayStart">
              <Avatar
                src="images/profile.png"
                alt="image"
                style={{ borderRadius: "10px" }}
              />
              <Typography
                variant="body2"
                sx={{ color: "#000", marginLeft: "10px" }}
              >
                Maria Joseph
              </Typography>
            </Box>
          </Drawer>
        </Hidden>
        <Box className="topbarmainBox">
          <div>{femmecubatorLogo}</div>

          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
            style={
              router?.pathname === "/human-resources" ||
              router?.pathname === "/planning-flow" ||
              router?.pathname === "/bussiness-operations" ||
              router?.pathname === "/documents-page"
                ? { background: "rgba(255, 255, 255, 0.06)" }
                : {}
            }
          >
            <MenuIcon
              width="60px"
              height="60px"
              style={{ color: "rgb(255,255,255)", fontSize: "30px" }}
            />
          </IconButton>
        </Box>

        <NotificationModal open={open} handleClose={() => setOpen(false)} />
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Box>
      <Link href="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );
  return (
    <>
      <AppBar
        // position={router.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        style={
          router?.pathname === "/human-resources" ||
          router?.pathname === "/planning-flow" ||
          router?.pathname === "/bussiness-operations" ||
          router?.pathname === "/documents-page"
            ? {
                background: "rgba(255, 255, 255, 0.1)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
              }
            : {
                background: "#101017",
                borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
              }
        }
      >
        <Container
          // maxWidth={router.location.pathname !== "/" ? "lg" : "lg"}
          className={""}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
    </>
  );
}
