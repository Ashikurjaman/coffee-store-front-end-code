import React from 'react';
import './ErrorPage.css'
import bg from '../../assets/images/404/404.gif'
const Errorpage = () => {
    return (
        <div className='w-full '>
                <img className='mx-auto' src={bg} alt="" />
        </div>
    );
};

export default Errorpage;