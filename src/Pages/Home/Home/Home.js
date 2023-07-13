import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Dantal from '../Dantal/Dantal';
import AppointmentHero from '../AppointmentHero/AppointmentHero';
import Testimonials from '../Testimonial/Testimonials';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='mt-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Dantal></Dantal>
            <AppointmentHero></AppointmentHero>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;