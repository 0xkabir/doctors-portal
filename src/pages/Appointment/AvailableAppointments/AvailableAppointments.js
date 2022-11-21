import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({selectedDate, setSelectedDate}) => {
    const [appointmentOptions, setappointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(response => response.json())
        .then(data => setappointmentOptions(data))
    },[])
    return (
        <section className='my-10 md:my-20 lg:my-32'>
            <h2 className='text-primary text-xl font-medium text-center'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            <div className='w-11/12 md:w-4/5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option} setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}/>
            }
        </section>
    );
};

export default AvailableAppointments;