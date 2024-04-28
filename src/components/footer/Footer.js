import React from "react";
import call_icon from "../../images/call_icon.svg";
import email_icon from "../../images/email_icon.svg";
import location_icon from "../../images/location_icon.svg";
import arrow from "../../images/arrow.svg";

const Footer = () => {
  const contactData = [
    {
      icon: call_icon,
      title: 'Call Us Anytime',
      info: '(303) 555-0105'
    },
    {
      icon: email_icon,
      title: 'Send Mail',
      info: 'info@gmailcadc acc.com'
    },
    {
      icon: location_icon,
      title: 'Our Address',
      info: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
    }
  ];
  return (
    <div>
        <div className="footer_main">
        <div className="container footer_container">
          <div className="row footer_row">
            {contactData.map((contact, index) => (
              <div key={index} className="col-12 col-sm-4 pt-2">
                <div className="d-flex">
                  <div className="call_icon_img">
                    <img width={100} height={75} src={contact.icon} alt="call image" />
                  </div>
                  <div className="call_text">
                    <h2>{contact.title}</h2>
                    <p>{contact.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer_section2">
          <div className="container ">
            <div className="row ">
              <div className="col-8 col-sm-3">
                <div className="col-head">
                  <h2>Websites</h2>
                </div>
                <div className="col-para">
                  <p>
                    We offers website development and digital marketing services
                    for cell phone repair businesses. With ....
                  </p>
                </div>
                <div>
                  <button type="button" className="btn_read_more mt-3">
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-4 col-sm-3">
                <div className="col-head">
                  <h2>Quick Links</h2>
                </div>
                <div className="col-para d-flex flex-column">
                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Home</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Services</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">About</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Contact Us</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Privacy Policy</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="col-head">
                  <h2>Services</h2>
                </div>
                <div className="col-para d-flex flex-column">
                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Website Design</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Graphic Design</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Social Media marketing</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">SEO & content creation</p>
                  </div>

                  <div className="d-flex gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="p-home">Email Marketing</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="col-head">
                  <h2>Newsletter</h2>
                </div>
                <div className="col-para">
                  <p>
                    Sign up for alerts, our latest blogs, thoughts, and
                    insights.
                  </p>
                </div>
                <div>
                  <form>
                    <div class="form-group pb-3">
                      <input
                        type="email"
                        style={{padding:"15px", width:"215px"}}
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>

                    <button type="submit" class="btn btn_arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
