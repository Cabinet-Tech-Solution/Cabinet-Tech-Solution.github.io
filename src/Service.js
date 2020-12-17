import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        let imgStyle = {
            height: '300px'
        }
        return (
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
            <div class="service-box">
               <figure>
                  <a href={this.props.s_img} class="fancybox" rel="ligthbox">
                  <img  src={this.props.s_img} class="zoom img-fluid " style={imgStyle} alt=""/>
                  </a>
                  <span class="hoverle">
                  <a href={this.props.s_img} class="fancybox" rel="ligthbox"> <span class="btn btn-light">{this.props.service}</span> </a>
                  </span>  
               </figure>
            </div>
         </div>
        )
    }
}
