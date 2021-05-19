import React, { Component } from 'react'

export default class PortfolioComponent extends Component {
    render() {
        return (
            <div className="bg-services">
                <div className="container-fluid position-relative">
                    <br /><br /><br />
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="card mb-4" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portofolio/p-1.png" width="100%" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portofolio/p-2.png" width="100%" alt="img" />
                                </div>
                            </div>
                            <div className="card mt-4 mb-4" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portofolio/p-3.png" width="100%" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card" data-aos="fade-up" data-aos-duration="600">
                                <div className="card-body p-0">
                                    <img src="assets/portofolio/p-4.png" width="100%" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center my-5">

                        <div className="col-lg-3">
                            <center>
                                <a href="#all" className="btn btn-white p-3 mt-5 rounded-pill shadow-lg" data-aos="fade-down" data-aos-duration="400">VIEW ALL PROJECT</a>
                            </center>
                        </div>
                    </div>
                    <br /><br /><br />
                </div>
            </div>
        )
    }
}
