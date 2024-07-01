import React from 'react'
import Navbar from '../../components/Navbar';
import LandingPage from "./LandingPage";
import Facilities from "./Facilities";
import FeeTable from "./FeeTable"
import SneakPeek from './SneakPeak';
import StatisticsSection from '@/components/Statistics';
import GoogleMapSection from "@/components/GoogleMapSection"
import Footer from "@/components/Footer"
import OurAffiliations from "./OurAffiliations"



const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <LandingPage />
    <Facilities />
    <FeeTable />
    <OurAffiliations />
    <SneakPeek />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage