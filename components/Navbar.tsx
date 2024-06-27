import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="topbar px-5 py-3 bg-[#1B263B] text-white">
        <div className="row flex flex-row justify-between align-center m-auto">
          <div className="leftsidebar">
            <ul className="flex flex-1 gap-5 justify-around">
              <li className="flex flex-row align-center content-center text-center m-auto gap-1">
                <IoCall
                  className="align-center content-center m-auto"
                  size={20}
                />
                <a href="#">+977 9861883577</a>
              </li>
              <li className="flex flex-row gap-1 ">
                <FaLocationDot className="m-auto" size={20} />
                <a href="#">Busdiliya, Bhairahawa</a>
              </li>
            </ul>
          </div>
          <div className="rightsidebar  ">
            <ul className="flex flex-row gap-5">
              <li className="flex flex-row">
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">Calender</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="navbar h-20 px-10 bg-[#1B263B] text-white border"
        style={{ borderTop: "2px solid #fff" }}
      >
        <div className="flex justify-between items-center h-full mx-auto">
          <div className="leftsidebar">
            <ul className="flex gap-10 items-center">
              <li>
                <a href="#" className="text-3xl font-medium tracking-widest">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-3xl font-medium">
                  Academics
                </a>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="" alt="logo" className="h-20" />
          </div>
          <div className="rightsidebar">
            <ul className="flex gap-10 items-center">
              <li>
                <a href="#" className="text-3xl font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-3xl font-medium">
                  About
                </a>
              </li>
              <li>
                <CgProfile size={40} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="breadcrump-area">
        <div className="bc-wrapper">
          <div className="container mx-auto">
            <div className="breadcrump-heading text-3xl font-bold px-8 py-4 text-[#704747] text-start">
              SAI GLOBAL ACADEMY
            </div>
            <div
              className="breadcrump-content-wrapper border flex flex-row justify-between p-5"
              style={{ borderTop: "3px solid black" }}
            >
              <div
                className="image-wrapper-bc flex items-center justify-center w-1/3"
                style={{ borderRight: "2px solid #FFC8C0" }}
              >
                <img
                  src="https://saiglobal.edu.np/wp-content/uploads/2023/04/slogo.png"
                  alt="logo"
                  className="h-auto max-h-96 max-w-full"
                />
              </div>
              <div className="bc-content flex-1 p-8">
                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum facere et voluptatum magnam rerum eius similique nam
                  alias doloribus assumenda deserunt aliquam voluptas, eum
                  quisquam accusantium numquam sapiente. Distinctio vitae in
                  quos mollitia labore esse id facere! Nulla voluptate libero
                  laborum iusto possimus distinctio, alias perspiciatis eaque
                  cumque, assumenda atque. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam ab quam tempore
                  voluptatum nihil autem debitis numquam iste dignissimos eaque
                  enim, delectus reiciendis facilis. Fuga ab neque eos
                  accusantium dolores! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Ullam amet eius minima soluta quasi beatae.
                  Magnam beatae illum ratione placeat. Blanditiis quo iure
                  voluptatibus numquam ipsa, impedit, error voluptatem,
                  veritatis sint maiores rerum. Tempora omnis odit ex. Maxime
                  amet eveniet nihil dolorum iusto. Earum saepe odit id dolor
                  ex! Iste.
                </p>
                <button className="mt-4  bg-[#704747] text-white px-6 py-3 rounded underline underline-offset-1">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="academics-area ">
        <div className="bc-wrapper">
          <div className="container mx-auto p-4 ">
            <div
              className="breadcrump-content-wrapper border flex flex-row justify-between p-5"
              style={{ backgroundColor: "#FFF1EF" }}
            >
              <div className="bc-content flex-1 p-8">
                <div className="section-container">
                  <h1 className="text-3xl font-semibold tracking-wider mb-2">
                    ACADEMICS
                  </h1>
                  <div className="scrollbar-container overflow-hidden h-2 bg-[#f5b7b1]">
                    <div className="scrollbar h-full bg-[#704747] w-1/2"></div>
                  </div>
                </div>

                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum facere et voluptatum magnam rerum eius similique nam
                  alias doloribus assumenda deserunt aliquam voluptas, eum
                  quisquam accusantium numquam sapiente. Distinctio vitae in
                  quos mollitia labore esse id facere! Nulla voluptate libero
                  laborum iusto possimus distinctio, alias perspiciatis eaque
                  cumque, assumenda atque. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam ab quam tempore
                  voluptatum nihil autem debitis numquam iste dignissimos eaque
                  enim, delectus reiciendis facilis. Fuga ab neque eos
                  accusantium dolores! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Ullam amet eius minima soluta quasi beatae.
                  Magnam beatae illum ratione placeat. Blanditiis quo iure
                  voluptatibus numquam ipsa, impedit, error voluptatem,
                  veritatis sint maiores rerum. Tempora omnis odit ex. Maxime
                  amet eveniet nihil dolorum iusto. Earum saepe odit id dolor
                  ex! Iste.
                </p>
                <button className="mt-4  bg-[#704747] text-white px-6 py-3 rounded underline underline-offset-1">
                  Know More
                </button>
              </div>

              <div
                className="image-wrapper-bc flex items-center justify-center w-1/3"
                style={{ borderLeft: "2px solid #FFC8C0" }}
              >
                <img
                  src="https://saiglobal.edu.np/wp-content/uploads/2023/04/slogo.png"
                  alt="logo"
                  className="h-auto max-h-96 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
