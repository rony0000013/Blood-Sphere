import React from "react";
import Feature from "../../../components/Feature/Feature";
// import Service from '../../../components/Service/Service';
import About from "../About/About";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
    return (
        <div className="w-[100%] overflow-hidden bg-[#FFD9C0]">
            <Banner />
            <About />
            <Feature />
            <FAQ />
            <Appoinment />
            <ScrollToTop className="text-red" smooth viewBox="0 10 750 1024" svgPath="M32 32h960v64H32z m480 105.6L118.4 531.2l44.8 48L480 262.4V992h64V262.4l316.8 316.8 44.8-48L512 137.6z"/>
        </div>
    );
};

export default Home;

