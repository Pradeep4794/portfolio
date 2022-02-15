import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  
  <>
    
  
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-secondary" >
  <div className="container-fluid " >
    <Link className="navbar-brand" to="#">PRADEEP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-1 ">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/project">Project</Link>
        </li>
        

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/course">Course</Link>
        </li>
        

      </ul>
     
    </div>
  </div>
</nav>

  </>
  )
};

export default Navbar;
