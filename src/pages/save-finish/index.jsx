import HomeLayout from "src/layout/HomeLayout";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FolderCard from "../document/view-folder/FolderCard";
import TableComponent from "src/components/TableComponent";

const MainDocumentBox = styled("Box")(({ theme }) => ({}));
const folderData = [
  {
    img: "/images/addBox.jpg",
    text: "Care Planning",
  },
  {
    img: "/images/plus.png",
    text: "Business",
  },
  {
    img: "/images/web.png",
    text: "Food and Nutrition",
  },
  {
    img: "/images/folder.png",
    text: "Human Resources",
  },
  {
    img: "/images/addBox.jpg",
    text: "Care Planning",
  },
  {
    img: "/images/plus.png",
    text: "Business",
  },
  {
    img: "/images/web.png",
    text: "Food and Nutrition",
  },
  {
    img: "/images/folder.png",
    text: "Human Resources",
  },
  {
    img: "/images/addBox.jpg",
    text: "Care Planning",
  },
  {
    img: "/images/plus.png",
    text: "Business",
  },
  {
    img: "/images/web.png",
    text: "Food and Nutrition",
  },
  {
    img: "/images/folder.png",
    text: "Human Resources",
  },
  {
    img: "/images/addBox.jpg",
    text: "Care Planning",
  },
  {
    img: "/images/plus.png",
    text: "Business",
  },
  {
    img: "/images/web.png",
    text: "Food and Nutrition",
  },
  {
    img: "/images/folder.png",
    text: "Human Resources",
  },
  {
    img: "/images/addBox.jpg",
    text: "Care Planning",
  },
  {
    img: "/images/plus.png",
    text: "Business",
  },
  {
    img: "/images/web.png",
    text: "Food and Nutrition",
  },
  {
    img: "/images/folder.png",
    text: "Human Resources",
  },
];

const tabledata = [
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
  {
    name: "Business Math",
    size: "80",
    shared: "90",
    modified: "100",
    talk: "94",
    finalGrade: "93(A)",
  },
];
const tableHead = {
  heading1: "Course Name",
  heading2: "Module 1",
  heading3: "Module 2",
  heading4: "Module 3",
  heading5: "Final Test",
  heading6: "Final Grade",
};

export default function CourseCategories() {
  return (
    <Box className="mainContainerHomeLayout">
      <Container>
        <Box className="displaySpacebetween" mb={5}>
          <Typography variant="h2">Course Categories</Typography>
          <Button variant="contained" color="primary">
            Create New Course
          </Button>
        </Box>
        <Grid container spacing={3}>
          {folderData &&
            folderData.map((data, index) => {
              return (
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <FolderCard data={data} index={index} />
                </Grid>
              );
            })}
        </Grid>
        <Paper elevation={3} style={{ margin: "24px 0px" }}>
          <Typography variant="h5">Completed Courses</Typography>
        </Paper>
        <Paper elevation={1}>
          <TableComponent tabledata={tabledata} tableHead={tableHead} />
        </Paper>
      </Container>
    </Box>
  );
}

CourseCategories.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
