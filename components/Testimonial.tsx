import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial-container p-5">
      <div className="container">
        <div className="testimonial-wrapper flex flex-row  gap-10 p-5">
          <div className="review flex flex-col items-center justify-center w-1/2 p-5">
            <img
              src="/images/eventcard.png"
              alt="review logo"
              className="rounded rounded-3"
              style={{ width: "400px", height: "300px", padding: "10px" }}
            />
            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              accusamus quaerat illo minus unde nulla fugiat labore ducimus
              magni rerum. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ipsa assumenda praesentium obcaecati corrupti
              exercitationem, quo, aliquam voluptates velit earum laborum quasi!
              Inventore vero expedita quibusdam doloremque eveniet consequatur
              vitae reprehenderit.
            </p>

            <div className="details self-end mt-4">
              <h1 className="text-right">ABCDEFGH</h1>
              <h1 className="text-right mt-2">123456789</h1>
              <h1 className="text-right mt-2">sdsdbfd fkssdf</h1>
            </div>
          </div>

          <div className="image-wrapper flex flex-col gap-3">
            <img
              src="/images/eventcard.png"
              alt="testimonial"
              style={{ width: "700px", height: "300px" }}
            />
            <img
              src="/images/eventcard.png"
              alt="testimonial"
              style={{ width: "700px", height: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
