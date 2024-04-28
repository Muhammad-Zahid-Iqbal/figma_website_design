import React from "react";
import Navbar from "../components/navbar/Navbar";
import Appointment from "../components/appointment/Appointment";
import Services from "../components/services/Services";
import Phonereparing from "../components/phone-reparing/Phonereparing";
import Ourself from "../components/how-we-are/Ourself";
import Footer from "../components/footer/Footer";
import Testimonial from "../components/testimonial/Testimonial";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        {children}
        {/* <Appointment />
        <Services />
        <Phonereparing />
        <Ourself/>
        <Testimonial/>
        <Footer/> */}
      </div>
    </>
  );
};

export default Layout;
