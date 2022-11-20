import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    const details = [
        {   background: 'bg-gradient-to-r from-primary to-secondary',
            icon: clock,
            heading: "Opening Hours",
            text: "Lorem Ipsum is simply dummy text of the pri"
        },
        {   background: 'bg-accent',
            icon: marker,
            heading: "Visit our location",
            text: "Brooklyn, NY 10036, United States"
        },
        {   background: 'bg-gradient-to-r from-primary to-secondary',
            icon: phone,
            heading: "Contact us now",
            text: "+000 123 456789"
        }        
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-6'>
            {details.map((detail, idx) => <InfoCard key={idx} detail={detail}/>)}
        </div>
    );
};

export default Info;