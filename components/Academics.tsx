import React from "react";

const Academics = () => {
  return (
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                facere et voluptatum magnam rerum eius similique nam alias
                doloribus assumenda deserunt aliquam voluptas, eum quisquam
                accusantium numquam sapiente. Distinctio vitae in quos mollitia
                labore esse id facere! Nulla voluptate libero laborum iusto
                possimus distinctio, alias perspiciatis eaque cumque, assumenda
                atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam ab quam tempore voluptatum nihil autem debitis numquam
                iste dignissimos eaque enim, delectus reiciendis facilis. Fuga
                ab neque eos accusantium dolores! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Ullam amet eius minima soluta
                quasi beatae. Magnam beatae illum ratione placeat. Blanditiis
                quo iure voluptatibus numquam ipsa, impedit, error voluptatem,
                veritatis sint maiores rerum. Tempora omnis odit ex. Maxime amet
                eveniet nihil dolorum iusto. Earum saepe odit id dolor ex! Iste.
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
  );
};

export default Academics;
