import React from 'react'

export default function Header() {
    var sectionStyle = {
        backgroundImage: 'url(images/cabinet.jpg)',
        paddingTop: '25%',
        paddingBottom: '25%'
    }
    return (
        <section class="slider_section" style={sectionStyle}>
         <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  {/* <!-- <img class="first-slide" src="images/ded.jpg" alt="First slide"> --> */}
                  <div class="container first-slide">
                     <div class="carousel-caption relative">
                        <h1>Web Developemnt</h1>
                        <p>Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.. </p>
                        <a  href="#" style={{backgroundColor: 'rgb(171, 178, 238)'}}>Read More</a>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  {/* <!-- <img class="second-slide" src="images/informationSystems.jpg" alt="Second slide"> --> */}
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1>Information Systems</h1>
                        <p>The right digital products future-proof your business. Our lean, agile methodology combined with expertise in leading-edge technology accelerates your time to market with smart, scalable solutions. </p>
                        <a  href="#" style={{backgroundColor: 'rgb(171, 178, 238)'}}>Read More</a>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  {/* <!-- <img class="third-slide" src="images/ded.jpg" alt="Third slide"> --> */}
                  <div class="container">
                     <div class="carousel-caption relative">
                        <h1 style={{color: '#ffffff'}}>Apps Development</h1>
                        <p style={{color: '#ffffff'}}>We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly..</p>
                        <a  href="#" style={{backgroundColor: 'rgb(171, 178, 238)'}}>Read More</a>
                     </div>
                  </div>
               </div>
              
            </div>
            {/* <!-- <a class="carousel-control-prev" style="background-color: rgb(171, 178, 238);" href="#myCarousel" role="button" data-slide="prev">
            <i class='fa fa-angle-left' ></i>
            </a>
            <a class="carousel-control-next" style="background-color: rgb(171, 178, 238);" href="#myCarousel" role="button" data-slide="next">
            <i class='fa fa-angle-right'></i>
            </a> --> */}
         </div>
       </section>
    )
}
