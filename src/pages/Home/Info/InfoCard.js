import React from 'react';

const InfoCard = ({detail}) => {
    const {background, icon, heading, text} = detail
    return (
        <div className={`text-white ${background} flex flex-col md:flex-row justify-center items-center rounded-lg p-5 md:w-96 md:mx-auto`}>
            <img src={icon} alt="" className='h-20 md:mr-6'/>
            <div>
                <h3 className='text-xl font-medium'>{heading}</h3>
                <p className='mt-2.5'>{text}</p>
            </div>
        </div>
    );
};

export default InfoCard;