import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='container mt-5'>
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
          background="transparent"
          speed="1"
          style={{ height: "450px" }}
          loop autoplay></lottie-player>
      </div>

      <div className='container'>
       
          <h2 className='text-center fw-bold'>Contact  me to know more </h2>
          <div className="mb-5">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <button  type="submit" className="btn btn-primary ">Send Message  </button>
        

      </div>

  </>
  )
};

export default Contact;
