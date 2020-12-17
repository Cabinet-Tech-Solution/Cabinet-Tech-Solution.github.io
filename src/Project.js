import React, { Fragment, Component } from 'react'

export default class Project extends Component {

    render(){
       return (
            <Fragment>
                 <div class="carousel-item"> <img class="first-slide" src={this.props.project.imagepath} alt="First slide" /> 
                                <div class="read-more">
                                   <a href={this.props.project.link}>Visit</a>
                                </div>
                             </div>
                             
             </Fragment>
         )
    }
    
}
