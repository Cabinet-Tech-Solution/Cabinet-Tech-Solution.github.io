import React, { Component } from 'react'
import Service from './Service';



export default class Services extends Component {
   
   state = [
        {
            id: 1,
            service_name: 'Web Development',
            service_imagepath: 'images/webdev.jpg'
        },
        {
            id: 2,
            service_name: 'Graphics Design',
            service_imagepath: 'images/graphics.jpg'
        },
        {
            id: 3,
            service_name: 'Mobile App Development',
            service_imagepath: 'images/mob.png'
        },
        {
            id: 4,
            service_name: 'Information System Solutions',
            service_imagepath: 'images/info.jpg'
        },
        {
            id: 5,
            service_name: 'Online business branding',
            service_imagepath: 'images/brand.jpg'
        },
        {
            id: 6,
            service_name: 'Systems Administration',
            service_imagepath: 'images/sys.jpg'
        },
    ];
    render() {
        return (
            // <!-- service --> 
      <div id="service" className="service">
            <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Services </h2>
                                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br />using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                                </div>
                        </div>
                    </div>
            </div>
         <div class="container margin-r-l">
            <div class="row">
               {this.state.map(function(service, index){
                   return  <Service service={service.service_name} s_img={service.service_imagepath} id={service.id}/>  ;
                   
               })}
              
            </div>
         </div>
      </div>
    //   {/* <!-- end service --> */}
        )
    }
}
