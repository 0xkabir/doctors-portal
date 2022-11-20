import React from 'react';
import background from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className="text-white py-10" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
    <div className="text-center">
        <h2 className='text-xl font-medium text-primary text-center'>Contact Us</h2>
            <h3 className='text-4xl my-3 text-center'>Stay Connected With Us</h3>
            <form className='w-11/12 md:w-3/5 lg:w-1/2 mx-auto'>
                <input type="text" placeholder='Email Address' className='px-3 py-2.5 bg-white w-full my-2 rounded-md outline-none focus:outline-primary'/>
                <input type="text" placeholder='Subject' className='px-3 py-2.5 bg-white w-full my-2 rounded-md outline-none focus:outline-primary'/>
                <textarea type="text" placeholder='Your Message' rows='3' className='px-3 py-2 bg-white w-full my-2.5 rounded-md outline-none focus:outline-primary'/>
                <button type='submit' className="px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white">Submit</button>
            </form>
        </div>
   </section>
    );
};

export default Contact;