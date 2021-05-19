import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="container position-relative">
                <br /><br /><br />

                <div className="row my-5">
                    <div className="col-lg-6">
                        <div className="row align p-5">
                            <h1 className="bold-1 my-5 display-2 color-theme" data-aos="zoom-in" data-aos-duration="300">creative <br /> agency</h1>
                            <div className="d-flex my-4">
                                <a href="#play" className="btn btn-custom p-3 rounded-pill shadow" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="300"><i
                                    className="fas fa-play me-1 ms-1 text-white fa-1x"></i></a>
                                <a href="#watch" className="link mt-3 mx-3" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="300">watch the video intro</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
