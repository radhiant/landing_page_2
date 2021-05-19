import React, { Component } from 'react'
import AOS from "aos"
import BgComponent from './BgComponent';
import NavbarComponent from './NavbarComponent';
import HeaderComponent from './HeaderComponent';
import ServicesComponent from './ServicesComponent';
import PortfolioComponent from './PortfolioComponent';
import TeamComponent from './TeamComponent';
import ArchiveComponent from './ArchiveComponent';
import ContactComponent from './ContactComponent';
import FooterComponent from './FooterComponent';
import ScreenComponent from './ScreenComponent';

export default class Index extends Component {

    componentDidMount() {
        //load aos css
        AOS.init();

    }

    render() {
        return (
            <div>
                <ScreenComponent />
                <BgComponent />
                <NavbarComponent />
                <HeaderComponent />
                <ServicesComponent />
                <PortfolioComponent />
                <TeamComponent />
                <ArchiveComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
        )
    }
}
