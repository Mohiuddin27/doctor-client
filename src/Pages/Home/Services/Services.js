import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const serviceCard=[
        {
           id:1,
           image:fluoride,
           heading:'Fluoride Treatment',
           paragraph:'Lorem Ipsum has been the industrys standard dummy text ever',

        },
        {
            id:2,
            image:cavity,
            heading:'Cavity Filling',
            paragraph:'Lorem Ipsum has been the industrys standard dummy text ever',
 
         },
         {
            id:3,
            image:whitening,
            heading:'Teeth Whitening',
            paragraph:'Lorem Ipsum has been the industrys standard dummy text ever',
 
         }
    ]
    return (
        
        <div className='container mx-auto px-4 mt-5 pt-[40px]'>
            <h5 className='text-center font-semibold text-primary'>OUR SERVICES</h5>
            <h1 className='text-center text-3xl font-bold'>Services We Provide</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]'>
            {
                serviceCard.map(service=><Service key={service.id} service={service}>

                </Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;