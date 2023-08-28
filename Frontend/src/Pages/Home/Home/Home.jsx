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
        <div className="w-[100%] overflow-hidden">
            <Banner />
            <About />
            <Feature />
            <FAQ />
            <Appoinment />
            <ScrollToTop className="text-red" smooth viewBox="0 0 24 24" svgPath=""/>
        </div>
    );
};

export default Home;

