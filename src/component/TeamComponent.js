import React, { Component } from 'react'

export default class TeamComponent extends Component {
    render() {
        return (
            <div className="position-relative">

                <img src="assets/services-dot.svg" className="position-absolute top-0 end-0 dot-position-2 d-none d-lg-block"
                    width="60%" alt="img" />
                <h1 className="position-absolute text-team color-theme-opacity d-none d-lg-block">team</h1>
                <div className="container position-relative">
                    <br /><br /><br />
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center my-3">
                            <span className="bold-2 text-secondary">Meet the team</span>
                            <h1 className="h3 color-theme" data-aos="zoom-in" data-aos-duration="400">great outcome always relay on the great foundation</h1>
                        </div>
                        <div className="col-lg-12"><br /><br /><br /></div>

                        <div className="col-lg-4 col-md-4 text-center" data-aos="fade-up" data-aos-duration="600">
                            <img src="assets/avatar/team1.png" width="100%" alt="img" />
                            <br /><br />
                            <span className="color-theme">jam potrick</span>
                            <p className="text-secondary">Standard screen generation</p>
                            <div className="d-flex justify-content-center">
                                <a href="#fb" className="link"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a href="#twit" className="link"><i className="fab fa-twitter ms-5 text-secondary"></i></a>
                                <a href="#bb" className="link"><i className="fas fa-basketball-ball ms-5 text-secondary"></i></a>
                                <a href="#lnk" className="link"><i className="fab fa-linkedin-in ms-5 text-secondary"></i></a>
                            </div>
                            <br />
                        </div>
                        <div className="col-lg-4 col-md-4 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                            <img src="assets/avatar/team2.png" width="100%" alt="img" />
                            <br /><br />
                            <span className="color-theme">ema jonas</span>
                            <p className="text-secondary">Standard screen generation</p>
                            <div className="d-flex justify-content-center">
                                <a href="#fb" className="link"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a href="#twit" className="link"><i className="fab fa-twitter ms-5 text-secondary"></i></a>
                                <a href="#bb" className="link"><i className="fas fa-basketball-ball ms-5 text-secondary"></i></a>
                                <a href="#lnk" className="link"><i className="fab fa-linkedin-in ms-5 text-secondary"></i></a>
                            </div>
                            <br />
                        </div>
                        <div className="col-lg-4 col-md-4 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
                            <img src="assets/avatar/team3.png" width="100%" alt="img" />
                            <br /><br />
                            <span className="color-theme">mike pens</span>
                            <p className="text-secondary">Standard screen generation</p>
                            <div className="d-flex justify-content-center">
                                <a href="#fb" className="link"><i className="fab fa-facebook-f text-secondary"></i></a>
                                <a href="#twit" className="link"><i className="fab fa-twitter ms-5 text-secondary"></i></a>
                                <a href="#bb" className="link"><i className="fas fa-basketball-ball ms-5 text-secondary"></i></a>
                                <a href="#lnk" className="link"><i className="fab fa-linkedin-in ms-5 text-secondary"></i></a>
                            </div>
                            <br />
                        </div>

                        <div className="col-lg-4 text-center">
                            <br /><br /><br />
                            <a href="#cathall" className="btn btn-custom p-3 rounded-pill shadow" data-aos="fade-down" data-aos-duration="600">LET'S CATCH ALL</a>
                        </div>

                    </div>
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        )
    }
}
