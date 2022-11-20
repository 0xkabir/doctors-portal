import React from 'react';

const ServiceCard = ({service}) => {
    const {icon, header, text} = service
    return (
        <div className='text-center p-9 rounded-lg shadow-md flex flex-col justify-center items-center md:w-96 md:mx-auto'>
            <img src={icon} alt="" className='h-28'/>
            <h4 className='text-xl font-medium mt-8 mb-2'>{header}</h4>
            <p>{text}</p>
        </div>
    );
};

export default ServiceCard;