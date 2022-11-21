import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name, slots} = appointmentOption
    return (
        <div className='p-5 text-center rounded-lg shadow-md'>
            <h2 className='text-2xl text-primary font-medium'>{name}</h2>
            <p className='my-2'>{slots.length > 0? slots[0]:'Try Another Day'}</p>
            <p className='my-2'>{slots.length} {slots.length > 1? 'spaces':'space'} available</p>
            <label htmlFor="booking-modal" className="btn btn-primary text-white" onClick={()=>setTreatment(appointmentOption)}>Book Appointment</label>
        </div>
    );
};

export default AppointmentOption;