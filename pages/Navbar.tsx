"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Navbar = () => {
  const [announcements, setAnnouncements] = useState<{ title: string }[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/announcements/");
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="relative z-20">
      <div className="topbar px-3 py-3 bg-[#1B263B] text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="leftsidebar">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
              <li className="flex items-center gap-1">
                <IoCall size={20} />
                <span>071-XXXXXXX, XXXXXXX</span>
              </li>
              <li className="flex items-center gap-1">
                <span>Busdiliya, Bhairahawa</span>
              </li>
            </ul>
          </div>
          <div className="rightsidebar mt-2 md:mt-0">
            <ul className="flex flex-col md:flex-row gap-2 md:gap-5">
              <li>
                <Link href="/admission">Admission</Link>
              </li>
              <li>
                <Link href="/calendar">Calendar</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/media">Media</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar h-16 bg-[#1B263B] text-white border-t-2 border-white relative px-5 md:px-10">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="leftsidebar">
            <ul className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
              <li>
                <Link href="/about" className="text-xl md:text-3xl font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-xl md:text-3xl font-medium">
                  Academics
                </Link>
              </li>
            </ul>
          </div>
          <div className="image-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
            <img src="/images/slogo.png" alt="logo" className="h-12 md:h-20" />
          </div>
          <div className="rightsidebar">
            <ul className="flex flex-col md:flex-row gap-5 md:gap-10 items-center">
              <li>
                <Link href="/about" className="text-xl md:text-3xl font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xl md:text-3xl font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <CgProfile size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="scrolling-announcement bg-gray-50 text-black py-2">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {announcements.map((announcement, index) => (
              <span key={index} className="mr-10">
                {announcement.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
