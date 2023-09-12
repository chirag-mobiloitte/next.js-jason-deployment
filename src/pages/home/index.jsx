import HomeLayout from '@/layout/HomeLayout'
import { Container, Typography ,Box} from '@mui/material'
import React from 'react'
import MarqueSlider from './MarqueSlider'
export default function Home(){
    return(
   <Box className="bannerlanding">
    <Container>
      <Box align="center">
      <Typography variant='h1'>"Empowering Care with Tomorrow's Technology:Seamless, Intuitive, Compassionate."</Typography>
      <Box mt={3}>
      <Typography variant='h3'>"Advancing Care, Advancing Lives."</Typography>
      </Box>

      </Box>
   
    </Container>
    <MarqueSlider />
   </Box>
    )
}

Home.getLayout = function getLayout(page) {
    return (
      <HomeLayout>
       {page}
      </HomeLayout>
    )
  }