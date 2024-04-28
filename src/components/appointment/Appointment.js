import React from "react";
import call_bg from "../../images/call_bg.png";

const Appointment = () => {
  return (
    <>
      <div className="container container_contact">
        <div className="row main_contact">
          <div className="col-sm col-sm-6 col-xs-12">
            <div
              className="call_bg"
              style={{ backgroundImage: `url(${call_bg})` }}
            >
              <div className="services">
                <h3>24/7 Available. Call us Now 407 639 9911</h3>
              </div>
            </div>
          </div>
          <div className="col-sm col-sm-6 col-xs-12">
            <form className="bg-white border p-4">
              <div class="row">
                <div class="col-12 col-sm-6 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-12 col-sm-6 mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Select Date"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <button
                    type="button"
                    className="bg-dark text-white p-1"
                  >MAKE AN APPOINTMENT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
