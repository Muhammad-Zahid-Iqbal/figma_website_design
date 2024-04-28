import React from "react";
import phone_reparing from '../../images/phone_reparing.svg'


const Phonereparing = () => {
  return (
    <div className="main_phone_reaparing">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div className="pt-5">
              <h3 className="cell_phone">
                Enhance your <span style={{color:"red"}}>Cell Phone Repair</span>  Business with our Top-quality
                marketing services
              </h3>
            </div>
            <div className="pt-5">
                <p>Improve your <span style={{color:"red"}}> Cell Phone Repair </span> business ranking to <span style={{color:"red"}}>maximize success. </span> </p>
            </div>
            <div>
            <button type="button" className="btn_read_more mt-3">
                CONTACT US
              </button>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            {/* <div> */}
                <img src={phone_reparing} className="site_img" alt="phone_reparing"/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonereparing;
