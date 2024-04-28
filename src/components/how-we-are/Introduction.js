import React from "react";
import intro_img from '../../images/intro_img.svg'
import we_are from '../../images/we_are.svg'
import about_layer from '../../images/about_layer.svg'

const Introduction = () => {
  return (
    <div className="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-5">
          <img src={intro_img} className="about_site_img" alt="phone_reparing"/>
          </div>
          <div class="col-12 col-sm-7">
            <div className="pt-5">
              <h3 >
              Who Are We? And Why Are We Here?
              </h3>
            </div>
            <div className="pt-3">
            We are not theoreticians but practitioners! Our team of full-stack web development experts is readily available to help you find a strategically unique solution to solve website development challenges and bring your cell phone repair business to the next level! As a cell phone repair store owner, we have spent years using trial and error methods to solve a quite simple but complex problem: HOW TO BRING MORE BUSINESS? Well, the solution is simple: DO THE MARKETING. But marketing is a very broad concept that covers many services and techniques, which can be pricey, time consuming and ineffective. Instead, build the marketing strategy designated to hit the target! While struggling to find a digital marketing company that could help us grow the business, we wasted the budget and time without making significant improvements. So, followed by frustration and inspired by the target goals, we challenged ourselves to find our perfect digital marketing solution, get to the top of the Google ranking and bring more customers. We can do it, and so can you! We has been established to help cell phone repair business owners, like us and you, achieve profit-generating results and grow the business. The benefit you get from working with us is that we know the cellphone repair business and we have been in this industry since 2012. We, our major focus is on developing websites for cell phone repair businesses to improve online visibility and bring customers. With Us, you will boost your business’s Google search ranking and increase organic traffic in a cost-effective and timely manner.
            </div>
            <div>
            
            </div>
          </div>
          
        </div>
      </div>
      {/* <div className="about_layer">
        <img src={about_layer} alt="about_layer"/>
      </div> */}

    </div>
  );
};

export default Introduction;
