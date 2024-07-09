import React from 'react'
import Navbar from '../../pages/Navbar';
import LandingPage from "./LandingPage";
import Objectives from "./Objectives";
import SneakPeek from './SneakPeak';
import StatisticsSection from '@/pages/Statistics';
import GoogleMapSection from "@/pages/GoogleMapSection"
import Footer from "@/pages/Footer"
import OurAffiliations from "./OurAffiliations"
import CourseStructureBba from "./CourseStructureBba"
import Gallery from "./Gallery"




const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <LandingPage />
    <Objectives />
    <OurAffiliations />
    <CourseStructureBba />
    <Gallery />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage