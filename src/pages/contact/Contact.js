import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import call_icon from "../../images/call_icon.svg";
import white_phone from "../../images/white_phone.svg";
import email_icon from "../../images/email_icon.svg";
import email_icon_white from "../../images/email_icon_white.svg";
import location_icon from "../../images/location_icon.svg";
import location_white_icon from "../../images/location_white_icon.svg";

const Contact = () => {
    const contactData = [
        {
          icon: white_phone,
          title: 'Phone Number',
          info: '(303) 555-0105'
        },
        {
          icon: email_icon_white,
          title: 'Email',
          info: 'info@gmailcadc acc.com'
        },
        {
          icon: location_white_icon,
          title: 'Location',
          info: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
        }
      ];
  return (
    <>
      <Navbar />
      <div className='contact_main'>
            <h2>Contact</h2>
        </div>
      <div className="container pt-5">
        <div className="row">
            <p className="text-danger">SEND US EMAIL</p>
            <h3 className="pb-3">Feel free to write</h3>
          <div className="col-12 col-sm-6">
            <form>
              <div class="form-group">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      style={{background:"#E5E5E5"}}
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      class="form-control"
                      style={{background:"#E5E5E5"}}
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-6">
                    <input
                      type="text"
                      style={{background:"#E5E5E5"}}
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      style={{background:"#E5E5E5"}}
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group pt-3">
                <textarea class="form-control" placeholder="Message" style={{background:"#E5E5E5"}} rows="3"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-6">
          {contactData.map((contact, index) => (
              <div key={index} className="pt-2">
                <div className="d-flex">
                  <div className="bg_icons">
                    <img  src={contact.icon} alt="call image" />
                  </div>
                  <div className="text_area">
                    <h2>{contact.title}</h2>
                    <p>{contact.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
