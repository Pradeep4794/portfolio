import React from 'react';
import {FaFacebook,FaInstagram,FaLinkedin,FaMailBulk} from 'react-icons/fa' 

const Footer = () => {
  return (
  <>
    <div className='container-fluid mt-4 '>
        <div className=' footer '>
        <p className=' text-center p-3'>Designed and Developed By</p>
        <hr/>   
        <div className='flex text-center footerr d-flex justify-content-around'>
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedin/>
            <FaMailBulk/>
        </div>
        <p className='text-center fw-bold py-4'>Pradeep Kushwaha</p>
    
        </div>
    </div>
  </>
  )
};

export default Footer;

