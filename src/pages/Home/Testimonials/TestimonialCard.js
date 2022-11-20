import React from 'react';

const TestimonialCard = ({review}) => {
    const {patient, patientImg, location, patientReview}  = review
    return (
        <div className='max-w-sm p-8 rounded-lg shadow-lg'>
            <p>{patientReview}</p>
            <div className='flex items-center mt-3'>
                <img src={patientImg} alt=""  className='w-20 border-4 border-primary rounded-full p-1 mr-3'/>
                <div>
                    <h3 className='text-xl'>{patient}</h3>
                    <h4 className='text-base'>{location}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;