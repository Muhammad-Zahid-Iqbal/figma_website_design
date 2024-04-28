import React from "react";
import service from "../../images/service.png";
import link_label from "../../images/link_label.svg";
import seo_icon from "../../images/seo_icon.svg";
import seo_icon_1 from "../../images/seo_icon_1.svg";
import seo_icon_2 from "../../images/seo_icon_2.svg";
import seo_icon_3 from "../../images/seo_icon_3.svg";
import seo_icon_4 from "../../images/seo_icon_4.svg";
import service_1 from "../../images/service_1.svg";
import service_2 from "../../images/service_2.svg";
import service_3 from "../../images/service_3.svg";
import service_4 from "../../images/service_4.svg";
import service_5 from "../../images/service_5.svg";
import service_6 from "../../images/service_6.svg";

const servicesData = [
  {
    image: service_1,
    icon: seo_icon,
    title: "SEO and Content Creation"
  },
  {
    image: service_2,
    icon: seo_icon_1,
    title: "Website Design"
  },
  {
    image: service_3,
    icon: seo_icon,
    title: "Google Ads"
  },
  {
    image: service_4,
    icon: seo_icon_2,
    title: "Social Media Marketing"
  },
  {
    image: service_5,
    icon: seo_icon_3,
    title: "Graphic Designing"
  },
  {
    image: service_6,
    icon: seo_icon_4,
    title: "Email Marketing"
  }
];

const Services = () => {
  return (
    <>
      <div className="main_services">
        <div className="pb-5">
          <img className="d-flex m-auto pt-3" src={service} alt="services" />
        </div>
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div key={index} className="col-12 col-sm-4 pt-3">
                <div className="card">
                  <div className="d-flex">
                    <img src={service.image} width={416} height={190} alt="Service" />
                    <img src={link_label} width={160} height={160} alt="side image" />
                  </div>
                  <div className="card-body d-flex">
                    <div className="seo_icon">
                      <img src={service.icon} width={80} height={80} alt="Service Icon" />
                    </div>
                    <div className="seo_content">
                      <h5 className="card-title">{service.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
