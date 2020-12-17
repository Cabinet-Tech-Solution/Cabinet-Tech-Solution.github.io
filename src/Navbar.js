import React, { Fragment } from 'react';
import Topbar from './Topbar';


export default function Navbar() {
    return (
        <Fragment>
            <div className="sticky-top">
            {/* The initial top bar goes here */}
            <Topbar /> 
            {/* Navigation bar contents goes here */}

            <nav class="navbar navbar-expand-lg navbar-light bg-white pt-2 pb-2">
         <a class="navbar-brand" href="#"> <img  src="images/logo.jpeg" class="img" style={{height: '20px'}}  alt="" /> Cabinet Tech</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav navbar-right">
             <li class="nav-item active">
               <a class="nav-link" href="index.html" style={{color: 'rgb(171, 178, 238)'}}>
                  Home <span class="sr-only">(current)</span></a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#about">About</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#service">Services</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#download">Projects</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#testimonial">Contact</a>
             </li>
             {/* <!-- <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Dropdown link
               </a>
               <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <a class="dropdown-item" href="#">Action</a>
                 <a class="dropdown-item" href="#">Another action</a>
                 <a class="dropdown-item" href="#">Something else here</a>
               </div>
             </li> --> */}
           </ul>
          
         </div>
       </nav>
       </div> 
        </Fragment>
       
    )
}
