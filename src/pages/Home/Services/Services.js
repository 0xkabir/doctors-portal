import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            icon: flouride,
            header: 'Fluoride Treatment',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            icon: cavity,
            header: 'Cavity Filling',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            icon: whitening,
            header: 'Teeth Whitening',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='mt-32'>
            <h2 className='text-xl font-medium text-primary text-center'>OUR SERVICES</h2>
            <h3 className='text-4xl text-center'>Services We Provide</h3>
            <div className='mt-16 grid lg:grid-cols-3 gap-6 justify-center'>
                {
                    services.map((service, idx) => <ServiceCard key={idx} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;