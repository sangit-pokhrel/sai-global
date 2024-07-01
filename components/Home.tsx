import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Events from "./Events";
import Testimonial from "./Testimonial";
import Statistics from "./Statistics";
import GoogleMapSection from "./GoogleMapSection";
import Newsletter from "./Newsletter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Events />
      <Testimonial />
      <Statistics />
      <GoogleMapSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
