import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';

import { FaNodeJs } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
// import { FaAngular} from 'react-icons/fa';




const Home = () => {
  return (
    <>
      <div className='container-fluid bg-secondary'>
        <div className='row align-items-center'>
          <div className="col-md-6" style={{ height: "500px" }}>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json"
              background="transparent"
              speed="1"

              loop autoplay
            ></lottie-player>
          </div>


          <div className='col-md-6'>
            <h1 className=''>Hii,I am <p className='text'>Pradeep</p></h1>
            <p className='textt' >FullStack Developer,Instrouctor</p>
          </div>


        </div>
      </div>

      <h1 className=" text-center">Technology I Use</h1>
      <div className='container-fluid mt-4 homee'>
        
        <div className='row home'>
          <div className='col-md-4 '>

            <FaReact style={{ width: "150px", height: "150px", color: "cyan" }} />
          </div>
          <div className='col-md-4 ' >
            <FaAngular style={{ width: "150px", height: "150px", color: "red" }} />
          </div>
          <div className='col-md-4'>
            <FaJava style={{ width: "150px", height: "150px", color: "orange" }} />
          </div>

          <div className='col-md-4 mt-5' >
            <FaNodeJs style={{ width: "150px", height: "150px", color: "green" }} />
          </div>

          <div className='col-md-4 mt-5'>
            <FaBootstrap style={{ width: "150px", height: "150px", color: "blue" }} />
          </div>


          <div className='col-md-4 mt-5'>
            <FaHtml5 style={{ width: "150px", height: "150px", color: "orange" }} />
          </div>
        </div>
      </div>

      <div className='container-fluid mt-4 section'>
        <h2 className='text-center py-4'>YES YOU ARE RIGHT....I am React Developer</h2>
      </div>

      <div className='container sectionn'>
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_sSF6EG.json"
          background="transparent"
          speed="1"
          style={{ height: "500px" }}
          loop autoplay>

        </lottie-player>
        <p className="text-center fw-bold my-2 px-3">Raect js is fronted developer,use create make awesome ui
          This is single page application
        </p>
      </div>

      <div className='container-fluid  dic py-4'>
        <h3 className='text-center'>My Dev Stack</h3>
        </div>

<div className='container content'>
        <div className='row'>

          <div className='col-md-12'>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_aptscmnx.json"
              background="transparent"
              speed="1"
              style={{ height: "400px" }}
              loop autoplay></lottie-player>
          </div>

          <div className='col-md-4'>
            <h1 className='fw-bold'>Front End</h1>
            <hr />
            <p className=''>Html/Css</p>
            <p className=''>React</p>
            <p className=''>Angular</p>
            <p className=''>Bootstrap</p>
          </div>

          <div className='col-md-4'>
          <h1 className='fw-bold'>UI/ UX</h1>
            <hr />
            <p className=''>Telwin</p>
            <p className=''>Material</p>
            <p className=''>Ant Design</p>
            <p className=''>Sementic</p>
          </div>

          <div className='col-md-4'>

          <h1 className='fw-bold'>Backedn and DB</h1>
            <hr />
            <p className=''>NodeJS</p>
            <p className=''>MySql</p>
            <p className=''>MongoDB</p>
            <p className=''>Python</p>
          </div>
        </div>
      </div>

    </>

  )
};

export default Home;
