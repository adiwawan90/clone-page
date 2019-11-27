import  React, { Component } from 'react';
import Show from '../../prop/Showhide';
class Home extends Component {
    render() { 
        return (  
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                    <img className="img-fluid rounded slide" alt="Responsive image" src={require('../../gambar/banner-desktop.jpg')} alt="slide"></img>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="alert alert-danger danger" role="alert">
                                     <p className="text-white text-center">A simple success alert—check it out!</p> 
                                </div>
                        </div>
                    </div>
                </div> 
                {/* end slider */}
                <div className="container slide">
                    <div className="row">
                        <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                
                                    <img className="img-fluid d-block w-100" src={require('../../gambar/img4.jpg')} alt="slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="img-fluid d-block w-100 "  src={require('../../gambar/img4.jpg')} alt="slide" />
                                
                                    </div>
                                    <div className="carousel-item">
                                    <img className="img-fluid d-block w-100"  src={require('../../gambar/img4.jpg')} alt="slide" />
                                    
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/cara_beriklan_di_facebook.jpg')} alt="slide" />

                        <img className="img-fluid rounded slide " alt="Responsive image" src={require('../../gambar/banner-desktop.jpg')} alt="slide" />
                        </div>
                    </div>
                </div>

            <div>
                <Show/>
            </div>
                

            </div>
        );
    }
}
 
export default Home;
