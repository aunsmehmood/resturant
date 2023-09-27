import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box>
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Welcome to our restaurant application, where culinary excellence meets
          digital convenience. At My Restaurant, we've reimagined the dining
          experience, putting the power of choice and reservation at your
          fingertips. Whether you're a food enthusiast seeking the latest
          gastronomic trends, a busy professional looking for a quick lunch
          spot, or a couple planning a romantic evening out, our app offers a
          seamless and personalized dining journey. Explore our diverse menu,
          book a table with ease, and indulge in the flavors of our chef-crafted
          dishes, all while enjoying the convenience of a modern dining
          companion. Join us as we redefine how you savor the moments and savor
          the flavors at My Restaurant.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
