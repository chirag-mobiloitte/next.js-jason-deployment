// import React from "react";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import HomeLayout from "src/layout/HomeLayout";
import { documentData } from "src/data";
import Details from "./Details";
import CreatecareModal from "./CreatecareModal";
const ReadProfileBox = styled(Box)(({ theme }) => ({
  padding: "120px 0px",
  "& .createvariantButton": {
    marginRight: "15px",
  },
  "& .profileImg1": {
    height: "248px",
    width: "179px",
    objectFit: "cover",
    borderRadius: "100px 100px 100px 100px",
  },
  "& .mainMarginBox": {
    marginTop: "90px",
    "@media(max-width:899px)": {
      marginTop: "40px",
    },
  },
  "& .centerimg": {
    position: "absolute",
    left: "48%",
    top: "79%",
  },
  "& .paperBox": {
    height: "100%",
    "& h6": {
      margin: "24px 0px",
      fontSize: "18px",
    },
    "& img": {
      display: "flex",
      alignItems: "center",
    },
    "& p": {
      marginLeft: "10px",
    },
  },
}));

export default function CareReadmore() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ReadProfileBox>
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box align="center">
                <Typography variant="h4">Good Morning,</Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box align="center">
                <img
                  src="/images/readmore.svg"
                  alt=""
                  className="profileImg1"
                />
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box align="center">
                <Typography variant="h2">Maria Jain</Typography>
                <Box mt={2} >
                  <Typography variant="body2">Room 234</Typography>
                  <Typography variant="body2" mt={1}>
                    Resident Since November
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    2023
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Box mt={3} className="mainMarginBox">
            <Grid container spacing={2}>
              {documentData?.map((data, i) => {
                return (
                  <Grid item lg={3} md={3} sm={6} xs={12}>
                    <PersonalDocument data={data} key={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box mt={5} className="displayStart multipleButton">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="createvariantButton"
              onClick={() => {
                router.push("/documentplan");
              }}
              style={{
                background: "linear-gradient(147deg, #FF5C3F 0%, #E73827 100%)",
              }}
            >
              Create Report
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="createvariantButton"
              onClick={handleOpen}
              style={{
                background:
                  "linear-gradient(147deg, #1DD5D8 5.53%, #02B0EA 100%)",
              }}
            >
              Create Care Plan
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="createvariantButton"
              style={{
                background: "linear-gradient(147deg, #FF8DCF 0%, #E95484 100%)",
              }}
            >
              Ask About care Plan
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="createvariantButton"
              style={{
                background: "linear-gradient(147deg, #F9A932 0%, #F37535 100%)",
              }}
            >
              Create Meal Plan
            </Button>
          </Box>
          <Details />
        </Container>
        <CreatecareModal open={open} handleClose={handleClose} />
      </ReadProfileBox>
    </>
  );
}

const PersonalDocument = ({ data }) => {
  return (
    <Box>
      <Paper elevation={3} className="paperBox displayCenter">
        <Box>
          <Box align="center">
            <Avatar src={data.img} sx={{ width: 80, height: 80 }}></Avatar>
          </Box>

          <Box>
            <Typography variant="h6">{data.text1}</Typography>
            <Grid container spacing={2}>
              <img
                src="/images/centerline.png"
                alt="centerimg"
                className="centerimg"
              />
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docno.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "17px" }}
                  />
                  <Typography variant="body1">3,239</Typography>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <Box display="flex" alignItems="center">
                  <img
                    src="/images/card/docdata.png"
                    alt=""
                    width="100%"
                    style={{ width: "100%", maxWidth: "24px" }}
                  />
                  <Typography variant="body2">3,239</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

CareReadmore.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
