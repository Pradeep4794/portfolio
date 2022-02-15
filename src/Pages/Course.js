import React from 'react';
import courseData from '../resource/courses';

const Course = () => {
  return (
  <>
      <lottie-player 
      src="https://assets10.lottiefiles.com/packages/lf20_z01bika0.json" 
       background="transparent"
         speed="1"  
         style={{ height: "500px" }}
          loop  autoplay></lottie-player>  

    <p className="text-center">I can teach teach everthing they need to know</p>   
    <h1 className="text-center fw-bold">BECAUSE</h1>  

    <div className='container pcontentt py-5'>
        <h1 className='text-center fw-bold'>LEARNING IS...</h1>
        <h1 className='text-center fw-bold'>CONTINIOUS...</h1>
      </div> 

      <div className='main'>  
          
              {  courseData.map((course)=>{
              return(
                <>
                  <img src={course.image}  style={{height:"250px",width:"385px"}} alt="" />
                 

              
              </>
              )
            })}  
            </div>   
  </>
  )
};

export default Course;
