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
import ContactPage from "./ContactPage"
import NewsLetter from "@/components/Newsletter"



const AcademicsPage = () => {
  return (
    <>
    <Navbar />
   <ContactPage />
   <GoogleMapSection />
   <NewsLetter />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage