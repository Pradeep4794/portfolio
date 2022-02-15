import React from 'react';
import projectsData from '../resource/projects';

const Project = () => {
  return (
    <>
      <lottie-player 
        src="https://assets5.lottiefiles.com/packages/lf20_ygiuluqn.json"
        background="transparent"
        speed="1"

        loop autoplay
        style={{ height: "500px" }}
      ></lottie-player>

      <p className='text-center '>Good ideas are not adopted automaticly.They must be driven itto practce with patinrt</p>

      <h2 className="text-center fw-bold">BECAUSE</h2>

      <div className='container pcontent py-5'>
        <h1 className='text-center fw-bold'>THE GAME IS...</h1>
        <h1 className='text-center fw-bold'>CONSISTENCY...</h1>
      </div>
{/* 
      <div className='container mt-5 py-4 '>
        <div className='row py-3'> */}
        
       
          {/* <div className='col-sm-4 py-3'> */}
          <div className='main'>  
          
              {  projectsData.map((project)=>{
              return(
                <>
                  <img src={project.image}  style={{height:"250px",width:"385px"}} alt="" />
                 

              
              </>
              )
            })}  
             {/* { <div className='container'>
              <div className='row'>
              <div className='col-md-4'>
              {  projectsData.map((project)=>{
              return(
             
                  <img src={project.image}  style={{height:"250px",width:"250px"}} alt="" />
                 

              
             
              );
            })} 
              </div>
           

              </div>
            </div>  */}
 


        
            
         
             {/* </div>
        </div> */}
      </div> 
  
 </> 
)
  }

export default Project;
