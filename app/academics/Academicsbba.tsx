import React from 'react'
import Navbar from '../../components/Navbar';
import LandingPage from "./LandingPage";
import Objectives from "./Objectives";
import SneakPeek from './SneakPeak';
import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
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