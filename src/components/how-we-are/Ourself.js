import React from "react";
import digital_solution from '../../images/digital_solution.svg'
import we_are from '../../images/we_are.svg'

const Ourself = () => {
  return (
    <div className="pt-5">
      <div class="container">
        <div class="row">
        <img src={we_are} width={148} height={37} alt="phone_reparing"/>
          <div class="col-12 col-sm-6">
          <img src={digital_solution} className="site_img" alt="phone_reparing"/>
          </div>
          <div class="col-12 col-sm-6">
            <div className="pt-5">
              <h3 className="cell_phone">

              A Perfect Digital Solution for Your Cell Phone Repair Business
              </h3>
            </div>
            <div>
            We specialize in developing websites for cell phone repair stores. We are not theoreticians but practitioners! We customize a strategically efficient marketing plan to guarantee your success, which is based on research and evidence-based results. With us, you will boost your business’s Google search ranking and increase organic traffic in a cost-effective and timely manner.
            </div>
            <div>
            <button type="button" className="btn_read_more mt-3">
                KNOW US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourself;
