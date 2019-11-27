import React, { Component } from 'react';
class Home extends Component{
    render() {
        return (
            <div className="slider">
                <div className="coantainer sliderimage">
                    <div className="row">
                        <img className="img-fluid rounded slide" alt="Responsive image" src={require('../../gambar/banner-desktop.jpg')} alt="slide"></img>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center">A simple succes alert-check it out! </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/**end slider */}
                <div className= "container slide">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block w-100" src={require('../../gambar/img1.jpg')}></img>
                                    </div>
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block w-100" src={require('../../gambar/img2.jpg')} alt="slide"></img>
                                    </div>
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block w-100" src={require('../../gambar/img3.jpg')} alt="slide"></img>
                                    </div>
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block w-100" src={require('../../gambar/img4.jpg')} alt="slide"></img>
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
                            <img className="img-fluid rounded slide" alt="responsive image" src={require('../../gambar/cara_beriklan_di_facebook.jpg')} alt="slide"></img>
                            <img className="img-fluid rounded slide" alt="responsive image" src={require('../../gambar/banner-desktop.jpg')} alt="slide"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;