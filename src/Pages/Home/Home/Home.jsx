import React from 'react';
import Feature from '../../../components/Feature/Feature';
// import Service from '../../../components/Service/Service';
import About from '../About/About';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner'
const Home = () => {
    return (
        <>
           <Banner />
           <About />
           <Feature />
           {/* <Service /> */}
           <Appoinment />
        </>
    );
};

export default Home;