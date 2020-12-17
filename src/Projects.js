import React, { Component, Fragment } from 'react'
import Project from './Project';

export default class Projects extends Component {
    first =  {
        id: 1,
        project_name: 'Elearning Enhancer',
        imagepath : 'images/project (1).jpeg',
    }
    state = [
       
        {
            id: 2,
            project_name: 'Portifolio Websites',
            imagepath : 'images/project (2).jpeg',
            link: 'http://erickmgongo.herokuapp.com/'
        },
        {
            id: 3,
            project_name: 'Inventory Mgt Desktop App',
            imagepath : 'images/project (3).jpeg',
            link: ''
        },
       
        {
            id: 4,
            project_name: 'Ecommerce Website',
            imagepath : 'images/project (4).jpeg',
            link: 'http://muecommerce.herokuapp.com/'
        },
        {
            id: 5,
            project_name: 'Point Of Sale',
            imagepath : 'images/project (5).jpeg',
            link: ''
        },
       
    ]
    render() {
        return (
            <Fragment>
                       <div id="download" class="download">
                        <div class="container">
                            <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Some of  Our Projects </h2>
                                    <span>"We don't want to push our ideas on to customers, we simply want to make what they want." ...</span>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-12">
                                <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
                                    <div class="carousel-inner">
                                                    <div class="carousel-item active"> <img class="first-slide" src="images/project (1).jpeg" alt="First slide" /> 
                                        <div class="read-more">
                                            <a href="#">Visit</a>
                                        </div>
                                        </div>
                                        {
                                            this.state.map(function(project,index){
                                                return  <Project project={project}/>;
                                            }                                                                                    
                                            )
                                        }
                                        {/* <Project /> */}
                                       
                                    </div>
                                    <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev"> <i class='fa fa-angle-left'></i></a> <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next"> <i class='fa fa-angle-right'></i></a> 
                                </div>
                            
                            </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}
