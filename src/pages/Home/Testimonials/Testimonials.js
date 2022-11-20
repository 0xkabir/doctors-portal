import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import patient1 from '../../../assets/images/people1.png'
import patient2 from '../../../assets/images/people2.png'
import patient3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const reviews = [
        {
            patient: 'Winson Henry',
            patientImg: patient1,
            location: 'California',
            patientReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            patient: 'Winson Henry',
            patientImg: patient2,
            location: 'California',
            patientReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            patient: 'Winson Henry',
            patientImg: patient3,
            location: 'California',
            patientReview: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <section className='md:px-14 my-10 md:my-16 lg:my-24'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-xl text-primary font-medium'>Testimonial</h2>
                    <h3 className='text-4xl'>What Our Patients Say</h3>
                </div>
                <img src={quote} alt="" className='w-32 md:w-40 lg:w-48'/>
            </div>
            <div className='my-5 lg:my-10 grid lg:grid-cols-3 gap-6'>
                {reviews.map((review, idx) => <TestimonialCard key={idx} review={review}/>)}
            </div>
        </section>
    );
};

export default Testimonials;