import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Events from "../../components/Events";
import Testimonial from "../../components/Testimonial";
import Statistics from "../../components/Statistics";
import GoogleMapSection from "../../components/GoogleMapSection";
import Newsletter from "../../components/Newsletter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
