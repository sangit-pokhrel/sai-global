import React from 'react'

const Welcome = () => {
  return (
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
  )
}

export default Welcome