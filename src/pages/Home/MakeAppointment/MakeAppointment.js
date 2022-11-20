import React from "react";
import doctor from '../../../assets/images/doctor.png'
import background from '../../../assets/images/appointment.png'
import PrimaryBtn from "../../../components/PrimaryBtn/PrimaryBtn";

const MakeAppointment = () => {
  return (
   <section className="text-white lg:h-[480px] lg:mt-32 lg:relative flex flex-col lg:flex-row lg:items-center" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
    <div className="w-1/2 hidden lg:block lg:absolute lg:bottom-0">
        <img src={doctor} alt="" />
    </div>
    <div className="lg:w-1/2 lg:absolute lg:right-0 p-5 md:p-10">
        <h2 className='text-xl font-medium text-primary'>Appointment</h2>
            <h3 className='text-4xl my-6'>Make an appointment Today</h3>
            <p className="mb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
   </section>
  );
};

export default MakeAppointment;
