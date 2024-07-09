import React from 'react'
import Navbar from '../../pages/Navbar';
import LandingPage from "./LandingPage";
import Facilities from "./Facilities";
import FeeTable from "./FeeTable"
import SneakPeek from './SneakPeak';
import StatisticsSection from '@/pages/Statistics';
import GoogleMapSection from "@/pages/GoogleMapSection"
import Footer from "@/pages/Footer"



const AcademicsPage = () => {
  return (
    <>
   <Navbar />
    <LandingPage />
    <Facilities />
    <FeeTable />
    <SneakPeek />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage