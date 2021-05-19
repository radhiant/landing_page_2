import React, { Component } from 'react'

export default class ContactComponent extends Component {
    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center my-5">
                        <span className="text-secondary">contact us</span>
                        <h1 className="h3 color-theme mt-3" data-aos="fade-down" data-aos-duration="600">Have an awesome idea in your mind? <br /> we would love to hear</h1>
                        <form action="#" method="post">
                            <div className="d-flex my-5 justify-content-center" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="600">
                                <input type="text" className="form-contact" placeholder="enter your email" required />
                                <button type="submit" className="btn btn-custom rounded-pill shadow ms-3 w-25">start</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}
