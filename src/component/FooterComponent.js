import React, { Component } from 'react'

export default class FooterComponent extends Component {
    render() {
        return (
            <div className="bg-footer" data-aos="fade-up" data-aos-duration="600">
                <div className="container">
                    <br /> <br /> <br />
                    <hr className="hr" />
                    <br /> <br /> <br />
                    <div className="row justify-content-center">
                        <div className="col-lg-3">
                            <img src="assets/vector-logo.svg" width="75px" alt="img" />
                            <br /> <br />
                            <p className="color-theme max-width-1x">A design agency shaping ideas into products. We help startups
                        and enterprises invent, build and launch their next project.</p>
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <h1 className="h6">Services</h1>
                            <br />
                            <a href="#webdesign" className="link">Web Design</a><br />
                            <a href="#appdesign" className="link">App Design</a><br />
                            <a href="#photography" className="link">Photography</a><br />
                            <a href="#videography" className="link">Videography</a><br />
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <h1 className="h6">Support</h1>
                            <br />
                            <a href="#support" className="link">Get Support</a><br />
                            <a href="#contact" className="link">Contact</a><br />
                            <a href="#myblog" className="link">My Blog</a><br />
                            <a href="#policy" className="link">Privacy Policy</a><br />
                            <a href="#pricing" className="link">Pricing</a><br />
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <h1 className="h6">Social</h1>
                            <br />
                            <div className="d-flex justify-content-start">
                                <a href="#facebook" className="link"><i className="fab fa-facebook-f color-theme"></i></a>
                                <a href="#twitter" className="link"><i className="fab fa-twitter ms-5 color-theme"></i></a>
                                <a href="#basketball" className="link"><i className="fas fa-basketball-ball ms-5 color-theme"></i></a>
                                <a href="#linkedin" className="link"><i className="fab fa-linkedin-in ms-5 color-theme"></i></a>
                            </div>
                        </div>
                    </div>
                    <br /> <br /> <br />
                    <hr className="hr" />

                    <div className="row justify-content-center">
                        <div className="col-lg-4 text-center my-5">
                            <span className="color-theme">Created with <i className="fas fa-heart text-danger"></i> by <a href="https://github.com/radhiant"
                                className="text-primary fw-bold" target="_blank" rel="noopener noreferrer">Radhian Sobarna</a></span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
