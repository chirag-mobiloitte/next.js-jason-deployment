import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Grid,
  MenuItem,
  Box,
  Container,
  Menu,
  Slide,
  IconButton,
  Avatar,
  Hidden,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { BiBell } from "react-icons/bi";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiFillCaretDown } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "./../../components/Logo";
// import { Link } from 'react-router-dom';
import Link from "next/link";
const headersData = [
  {
    label: "Race",
    href: "/car-selection",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Live",
    href: "/live-and-upcomming",
  },
  {
    label: "Learn More",
    href: "/learn-more",
  },
  {
    label: "Login",
    href: "/login",
  },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const [open11, setOpen11] = React.useState(false);
  const handleDrawerOpen11 = () => {
    setOpen11(true);
  };
  const handleDrawerClose11 = () => {
    setOpen11(false);
  };
  const history = useRouter();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
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
  const [disconnect, setDisconnect] = useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleOpendisconnect = () => {
    setDisconnect(true);
    setAnchorEl(null);
  };
  const displayDesktop = () => {
    return (
      <Container maxWidth="lg">
        <Toolbar className="topbarmainBox">
          {/* {femmecubatorLogo} */}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
          >
            {/* {getMenuButtons()} */}

            <nav className="navbar" role="navigation" aria-label="menu">
              <ul className="menu">
                <li className="dropdown">
                  <a href="#">
                    Services
                    <svg
                      className="icon"
                      width="14"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                    </svg>
                  </a>

                  <ul className="dropdown-nav">
                    <li>
                      <a href="">Lawn Care</a>
                    </li>
                    <li>
                      <a href="">Walling &amp; Fencing</a>
                    </li>
                    <li>
                      <a href="">Landscape design</a>
                    </li>
                    <li>
                      <a href="">Grounds Maintenance</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </Grid>
        </Toolbar>
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
            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={""}>
              <img className={""} src="/images/logo.png" alt="" />
              {getDrawerChoices()}
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                style={{
                  marginLeft: "19px",
                  padding: "10px 23px",
                  marginTop: "15px",
                }}
              >
                Connect Wallet
              </Button>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smUp>
          <SwipeableDrawer
            {...{
              anchor: "bottom",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
            // classes={{
            //   paper: classes.drawerPaper,
            // }}
          >
            <div className={""}>
              <div className={""}>
                <IconButton onClick={() => handleDrawerClose()}>
                  <RxCross2 />
                </IconButton>
              </div>
              <img className={""} src="/images/logo.png" alt="" />
              {getDrawerChoices()}
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
                style={{
                  marginLeft: "19px",
                  padding: "10px 23px",
                  marginTop: "25px",
                }}
              >
                Connect Wallet
              </Button>
            </div>
          </SwipeableDrawer>
        </Hidden>

        <div>{femmecubatorLogo}</div>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={4}>
            <Box className={""}>
              <Box
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleClick}
                mr={1}
              >
                <Avatar src="images/mgpro.png" />
                <AiFillCaretDown style={{ color: "#fff", fontSize: "15px" }} />
              </Box>
              <IconButton
                {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon
                  width="60px"
                  height="60px"
                  style={{ color: "#ff2676", fontSize: "30px" }}
                />
              </IconButton>
              {/* <StyledMenu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  // className={menubox}
                  onClose={handleClose1}
                >
                  <MenuItem>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleDrawerOpen11}>
                    Announcements
                  </MenuItem>
                  <MenuItem onClick={handleOpendisconnect}>
                    Disconnect
                  </MenuItem>
                </StyledMenu> */}
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: "inherit",
            }}
          >
            <MenuItem>{label}</MenuItem>
          </Button>
        </>
      );
    });
  };

  const femmecubatorLogo = (
    <Box>
      <Link href="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <div
            exact
            // to={`${href}`}
            {...{
              key: label,
              color: "inherit",
              to: href,
              // component: Link,
              // className: menuButton,
              activeClassName: "active",
            }}
          >
            {" "}
            {label}
          </div>
        </>
      );
    });
  };

  return (
    <>
      <AppBar
        // position={history.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        style={{
          background: "rgb(16, 16, 23)",
          background: "transparent !important",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          top: "82px",
        }}
      >
        <Container
          // maxWidth={history.location.pathname !== "/" ? "lg" : "lg"}
          className={""}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={open11}
        onClose={handleDrawerClose11}
        style={{ overflowY: "scroll" }}
      >
        <Box className={""} style={{}}>
          <Box>
            <IconButton
              style={{ position: "absolute", top: "0px", right: "5px" }}
              onClick={handleDrawerClose11}
            >
              <IoClose style={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Box align="center" py={2}>
            <Typography variant="h4">Announcements</Typography>
          </Box>
          <Grid container>
            {/* <Grid item xs={12}>
                {announcement.map(() => (
                  <AnnouncementCard />
                ))}
              </Grid> */}
          </Grid>
          <Box align="right">
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "10px 0px" }}
              onClick={() => history.push("/view-all-announcement")}
            >
              View More
            </Button>
          </Box>
        </Box>
      </Drawer>
      {/* <ConnectModal setOpen={setOpen} open={open} /> */}
    </>
  );
}
