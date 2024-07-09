import React from 'react'
import Navbar from '../../pages/Navbar';
import LandingPage from "./LandingPage";
import Facilities from "./Facilities";
import FeeTable from "./FeeTable"
import SneakPeek from './SneakPeak';
import StatisticsSection from '@/pages/Statistics';
import GoogleMapSection from "@/pages/GoogleMapSection"
import Footer from "@/pages/Footer"
import OurAffiliations from "./OurAffiliations"
import NewsAndEvents from './NewsAndEvents';
import RecentEvents from './RecentEvents';
import EventsGallery from "./MontessoriGallery"
import GradeTenGallery from "./GradeTenGallery"
import GradePlusTwoGallery from "./GradePlusTwoGallery"
import GradeBbaGallery from "./GradeBbaGallery"
// import Events from "@/components/Events.tsx"



const AcademicsPage = () => {
  return (
    <>
    <Navbar />
    <NewsAndEvents /> 

    {/* <Events />   */}
    <RecentEvents />
    <EventsGallery />
    <GradeTenGallery />
    <GradePlusTwoGallery />
    <GradeBbaGallery />
    <StatisticsSection />
    <GoogleMapSection />
    <Footer />
    
    </>
    


  )
}

export default AcademicsPage