import React, { Component } from 'react'

export default class ServicesComponent extends Component {
    render() {
        return (
            <div className="bg-services position-relative">
                <img src="assets/services-dot.svg" className="position-absolute top-0 end-0 dot-position d-none d-lg-block"
                    width="60%" alt="bgServices" />
                <div className="container position-relative">
                    <br /><br /><br /><br /><br />
                    <div className="row p-4 justify-content-center">
                        <h1 className="bold-1 my-5 display-2 text-white" data-aos="fade-up" data-aos-duration="600">services <br /> & portfolio</h1>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fas fa-palette text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">Web Design</strong>
                                    <p className="text-white">modern web design services withnew trends and direction.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fas fa-copyright text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">Branding</strong>
                                    <p className="text-white">highly professional branding and logo design work.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fab fa-pied-piper text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">Motion graphics</strong>
                                    <p className="text-white">modern motion graphics and animation for businesses.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fab fa-uikit text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">UI/UX Design</strong>
                                    <p className="text-white">Standard screen generation and design for all devices.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fas fa-code text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">Web Development</strong>
                                    <p className="text-white">website development is something we are best in.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="zoom-in" data-aos-duration="400">
                                <i className="fas fa-window-restore text-white fa-2x"></i>
                                <div className="ms-2">
                                    <strong className="text-white">App testing</strong>
                                    <p className="text-white">we test app for better user experience and results.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br /><br /><br />
            </div>
        )
    }
}
