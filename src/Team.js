import { Fragment } from "react"
import React  from 'react';

export default function Team() {
    return(
        <Fragment>
          <div id="testimonial" class="testimonial" style="background-color: rgb(171, 178, 238);">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h3>Team</h3>
                  </div>
               </div>
            </div>
            <div class="row" >
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div id="testimonial_slider" class="carousel slide banner-bg" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img class="first-slide" src="http://erickmgongo.herokuapp.com/images/1588444116034.jpeg"/>
                           <div class="container">
                              <div class="carousel-caption relat">
                                 <h3>Erick Mgongo</h3>
                                 <span><i class="fa "></i> ( CTO & Fullstack Engineer )<i class="fa "></i></span>
                                 <p>Bachelor degree of Information Technology and Systems from Mzumbe University , over 3 years experience in the field</p>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img class="second-slide" src="images/roman.jpg"/>
                           <div class="container">
                              <div class="carousel-caption relat">
                                 <h3>Roman Calist</h3>
                                 <span><i class="fa "></i> ( Fullstack & Mobile Engineer )<i class="fa "></i></span>
                                 <p>Bachelor degree of Information Technology and Systems from Mzumbe University , over 4 years experience in the field</p>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img class="third-slide" src="images/steve.jpg"/>
                           <div class="container">
                              <div class="carousel-caption relat">
                                 <h3>Steve Aminiel</h3>
                                 <span><i class="fa "></i> ( Front End & Graphics Engineer )<i class="fa "></i></span>
                                 <p>Bachelor degree of Information Technology and Systems from Mzumbe University , over 2 years experience in the field</p>
                              </div>
                           </div>
                        </div>
                        <div class="carousel-item">
                           <img class="third-slide" src="https://cdn3.vectorstock.com/i/1000x1000/12/22/man-software-engineer-concept-with-design-vector-6961222.jpg"/>
                           <div class="container">
                              <div class="carousel-caption relat">
                                 <h3>Awadhi Munga</h3>
                                 <span><i class="fa "></i> ( Backend & Hardware Engineer )<i class="fa "></i></span>
                                 <p>Bachelor degree of Information Technology and Systems from Mzumbe University , over 5 years experience in the field</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#testimonial_slider" role="button" data-slide="prev"> <i class='fa fa-angle-right'></i></a> <a class="carousel-control-next" href="#testimonial_slider" role="button" data-slide="next"> <i class='fa fa-angle-left'></i></a> 
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12" >
                  <div class="contact">
                     <h3></h3>
                     
                     <form>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQVa5Tr5RxyQmykILvEwLVyq7w1suVKkUnTh2l461nql7Uog/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" height="450" class="col-12 mr-3">Loading…</iframe>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </Fragment>
    )
}
