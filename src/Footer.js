import React from 'react'

export default function Footer() {
    return (
        <footr>
        <div class="footer" style={{backgroundColor: '#000000'}}>
           <div class="container">
              <div class="row">
                 <div class="col-lg-2 col-md-6 col-sm-12 width">
                    <div class="address">
                       <h3>Address</h3>
                       <i class="fas fa-location">Mwenge, Dar es Salaam</i>
                    </div>
                 </div>
                 <div class="col-lg-2 col-md-6 col-sm-12 width">
                    <div class="address">
                       <h3>Mobile</h3>
                       <i>+255 754 385 888</i>
                    </div>
                 </div>
                 <div class="col-lg-2 col-md-6 col-sm-12 width">
                    <div class="address">
                       <h3>Useful Linkes</h3>
                       <i><a href="#service" class="text-light"> Services</a></i>
                       <i><a href="#about" class="text-light">About</a></i>
                       <i> <a href="#download" class="text-light">Projects</a></i>
                       <i>  <a href="#testimonial" class="text-light">Contact</a> </i>
                     
                    </div>
                 </div>
                 <div class="col-lg-2 col-md-6 col-sm-12 width">
                    <div class="address">
                       <h3>Social Media </h3>
                       <ul class="contant_icon">
                          <li><img src="icon/fb.png" alt="icon"/></li>
                          <li><img src="icon/tw.png" alt="icon"/></li>
                          <li><img src="icon/lin (2).png" alt="icon"/></li>
                          <li><img src="icon/instagram.png" alt="icon"/></li>
                       </ul>
                    </div>
                 </div>
                 <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 width">
                   
                     <img  src="images/logo.jpeg" class="img text-light" style={{height: '20px'}}  alt=""/><b class="text-light"> &nbsp; Cabinet Tech Solutions</b> 
                 </div>
              </div>
           </div>
           <div class="copyright">
              <p>Copyright 2019 <a href="https://cabinet-tech-solution.github.io/"> <span class="text-light">Cabinet-Tech Solutions</span></a></p>
           </div>
        </div>
     </footr>
    )
}
