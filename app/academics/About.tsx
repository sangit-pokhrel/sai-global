import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Events from "../../pages/Events";
import Testimonial from "../../pages/Testimonial";
import Statistics from "../../pages/Statistics";
import GoogleMapSection from "../../pages/GoogleMapSection";
import Newsletter from "../../pages/Newsletter";
import Navbar from "@/pages/Navbar";
import Footer from "@/pages/Footer";
// import Welcome fro../../components/Welcomeome";
import AboutLanding from "./AboutLanding";


const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutLanding />

      
      <Footer />
    </div>
  );
};

export default Home;
