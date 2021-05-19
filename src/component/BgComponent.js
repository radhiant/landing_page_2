import React, { Component } from 'react'

export default class BgComponent extends Component {
    render() {
        return (
            <div>
                <img src="assets/headerC.png" className="position-absolute img-header top-0 end-0 shadow" alt="bg" data-aos="fade-left" data-aos-delay="400" data-aos-duration="600" />
                <h1 className="position-absolute color-theme-opacity text-header">CREATIVE</h1>
            </div>
        )
    }
}
