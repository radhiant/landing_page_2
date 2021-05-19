import React, { Component } from 'react'

export default class ArchiveComponent extends Component {
    render() {
        return (
            <div className="bg-archievement">
                <img src="assets/vector-archievement.png" width="40%" className="position-absolute achievement" alt="img" />
                <div className="container position-relative">
                    <div className="row justify-content-end">
                        <div className="col-lg-12 text-end my-5">
                            <h1 className="display-3 color-theme" data-aos="fade-up" data-aos-duration="600">clients & <br /> archievements</h1>
                            <br /><br /><br />
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="fade-up" data-aos-duration="600">
                                <img src="assets/medal/medal1.svg" width="50px" alt="img" />
                                <div className="max-width-1x">
                                    <h1 className="h5 color-theme mt-2 ms-2">emerging design agency (2017)</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="d-flex" data-aos="fade-up" data-aos-duration="600">
                                <img src="assets/medal/medal2.svg" width="50px" alt="img" />
                                <div className="max-width-1x">
                                    <h1 className="h5 color-theme mt-2 ms-2">top 10design agency (2018)</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12"><br /><br /></div>
                        <div className="col-lg-4 mb-5">
                            <div className="d-flex" data-aos="fade-up" data-aos-duration="600">
                                <img src="assets/medal/medal1.svg" width="50px" alt="img" />
                                <div className="max-width-1x">
                                    <h1 className="h5 color-theme mt-2 ms-2">top 5 design agency (2019) internationally</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="d-flex" data-aos="fade-up" data-aos-duration="600">
                                <img src="assets/medal/medal3.svg" width="50px" alt="img" />
                                <div className="max-width-1x">
                                    <h1 className="h5 color-theme mt-2 ms-2">going to get <br /> <span className="badge bg-warning">no. 1
                                    place </span> internationally</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-end">
                        <div className="col-lg-8">
                            <img src="assets/sponsor/sponsor.svg" width="100%" className="my-5" alt="img" data-aos="fade-up" data-aos-duration="600" />
                            <br /><br />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
