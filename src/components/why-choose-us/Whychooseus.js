import React from "react";
import corner_img from "../../images/corner_img.svg";
import circle_icon from "../../images/circle_icon.svg";
import man_img from "../../images/man_img.svg";
import man_img2 from "../../images/man_img2.svg";
import man_img3 from "../../images/man_img3.svg";
import man_img4 from "../../images/man_img4.svg";
import clock_img from "../../images/clock_img.svg";
import man_img_5 from "../../images/man_img_5.svg";
import left_side_choose from "../../images/left_side_choose.svg";

const Whychooseus = () => {
  const Item = ({ title, imgSrc, description }) => (
    <div className="col-12 col-sm-4 left_side_col1">
      <div className="p-3 border bg-light">
        <div className="corner_img d-flex justify-content-center">
          <div>
            <img src={corner_img} alt="corner_img" />
            <img src={circle_icon} width={120} height={120} alt="circle_icon" />
            <img src={imgSrc} className="man_img" width={70} height={60} style={{ paddingLeft: "25px" }} alt="circle_icon" />
          </div>
          <div className="shop_exprt">
            <div className="d-flex">
              <h4>{title}</h4>
            </div>
            <div className="shop_exprt_para pt-4">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const items = [
    {
      title: "Repair Shop Experts",
      imgSrc: man_img,
      description: "We have been successfully running the cell phone repair store since 2012, so we know the business inside out."
    },
    {
      title: "Cost-Effective",
      imgSrc: man_img2,
      description: "We offer exclusively low prices to support the cell phone repair industry and promote successful business growth."
    },
    {
      title: "Long Term Growth",
      imgSrc: man_img3,
      description: "We strive to achieve full potential and level up your professional growth in a steady and continuous upward trend."
    },
    {
      title: "Quality Work",
      imgSrc: man_img4,
      description: "Our commitment to you guarantees successful delivery of an end-product meeting your expectations and a deadline."
    },
    {
      title: "Quick Turnaround Time",
      imgSrc: clock_img,
      description: "We strive to minimize turnaround time to attend the needs of every customer and improve their business experience."
    },
    {
      title: "Quick Support",
      imgSrc: man_img_5,
      description: "You are not alone! For your convenience, we offer a technical support team that is readily available to assist you."
    }
  ];

  return (
    <div className="pt-5">
      <div className="container-fluid why_choose_us">
        <div className="row g-4 left_bg_about p-5">
          <h3 className="text-center pt-5">WHY CHOOSE US?</h3>
          {items.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
        <div>
          <img src={left_side_choose} width={300} alt="left_side_choose" />
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
