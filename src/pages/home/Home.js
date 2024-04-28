import React from "react";
import main_image from "../../images/main_image.png";
import appointment from "../../images/appointment.png";
import banner_image from "../../images/banner_image.svg";
import layer_2 from "../../images/layer_2.svg";
import layer from "../../images/layer.png";
import layer_3 from "../../images/layer_3.svg";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner-area/Banner";
import Appointment from "../../components/appointment/Appointment";
import Services from "../../components/services/Services";
import Phonereparing from "../../components/phone-reparing/Phonereparing";
import Ourself from "../../components/how-we-are/Ourself";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Appointment />
      <Services />
      <Phonereparing />
      <Ourself />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
