import HomeLayout from "@/layout/HomeLayout";
import { Container, Typography, Box } from "@mui/material";
import MarqueSlider from "./home/MarqueSlider";
import OurExpertise from "./home/OurExpertise";
import Explore from "./home/Explore";
import Plan from "./home/Plan";
import Aspect from "./home/Aspect";
import ScrollAnimation from "react-animate-on-scroll";

export default function ClientPage() {
  return (
    <>
      <Box>
        <Box className="bannerlanding">
          <Container>
            <Box align="center">
              <ScrollAnimation animateIn="slideInDown">
                <Typography variant="h1">
                  "Empowering Care with Tomorrow's Technology:Seamless,
                  Intuitive, Compassionate."
                </Typography>
              </ScrollAnimation>
              <Box mt={3}>
                <ScrollAnimation animateIn="slideInUp">
                  <Typography variant="h3">
                    "Advancing Care, Advancing Lives."
                  </Typography>
                </ScrollAnimation>
              </Box>
            </Box>
          </Container>
          <MarqueSlider />
        </Box>
        <OurExpertise />
        <Explore />
        <Plan />
        <Aspect />
      </Box>
    </>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
