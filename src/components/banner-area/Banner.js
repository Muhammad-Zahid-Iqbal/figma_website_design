import React from 'react'
import main_image from "../../images/main_image.png";
import appointment from "../../images/appointment.png";
import banner_image from "../../images/banner_image.svg";
import layer_2 from "../../images/layer_2.svg";
import layer from "../../images/layer.png";
import layer_3 from "../../images/layer_3.svg";

const Banner = () => {
    return (
        <div className="container_bg">
          <div className="d-flex pb-5 justify-content-center">
            <img src={layer} alt="layer image" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm col-sm-6 col-xs-12">
                <div className="repairing_shop">
                  Complete Solution for your Repairing Shop
                </div>
                <div className="agency">
                  <h2>Top Google Ads Agency For Your Business</h2>
                  <button type="button" className="btn_read_more mt-3">
                    READ MORE
                  </button>
                </div>
              </div>
              <div className="col-sm col-sm-6 col-xs-12 banner">
                <img src={banner_image} alt="banner" />
              </div>
    
              <div className="banner_bg">
              <img src={layer_3} alt="banner" className="layer_3" />
              </div>
            </div>
          </div>
          <div className="layer_2">
            <img src={layer_2} alt="layer_2" />
          </div>
          <hr style={{color:'gray', width:"70%", marginTop:"7rem"}}/>
        </div>
      );
}

export default Banner