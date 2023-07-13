import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData=[
        {
            id:1,
            name:'Opening Hours',
            description:'Lorem Ipsum has been the industrys standard dummy text ever',
            icon:clock,
            bgColor:'bg-primary'

        },
        {
            id:2,
            name:'Visit our location',
            description:'Dhaka Uddan, Mohammadpur,Dhaka',
            icon:marker,
            bgColor:'bg-accent'

        },
        {
            id:3,
            name:'Contact us now',
            description:'+8801719369459',
            icon:phone,
            bgColor:'bg-secondary'

        },
    ]
    return (
        <div className='container mx-auto px-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px]'>
            {
                cardData.map(card=><InfoCard
                key={card.id} card={card}>

                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;