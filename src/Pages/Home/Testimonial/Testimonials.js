import React from 'react';
import './Testimonials.css';
import quote from '../../../assets/icons/quote.svg';
import peopleOne from '../../../assets/images/people1.png';
import peopleTwo from '../../../assets/images/people2.png';
import peopleThree from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';
const Testimonials = () => {
    const testimonials=[
        {
            id:1,
            message:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image:peopleOne,
            name:'Winson Herry',
            location:'California'
        },
        {
            id:2,
            message:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image:peopleTwo,
            name:'Taylor Herry',
            location:'California'
        }
        ,{
            id:3,
            message:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image:peopleThree,
            name:'Mark Herry',
            location:'California'
        }
    ]
    return (
        <div className='mt-[70px]'>
            <div class="container mx-auto px-4 flex justify-between">
                <div>
                    <h1 className='text-secondary font-bold text-2xl'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>

                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-40'  alt=''></img>
                </div>
            </div>
            <div className='container mx-auto px-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]'>
               {
                 testimonials.map(testimonial=><Testimonial
                 id={testimonial.id} testimonial={testimonial}>

                 </Testimonial>)
               }
            </div>
            
        </div>
    );
};

export default Testimonials;