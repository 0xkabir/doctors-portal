import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;