import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaArrowLeft} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.styles.scss';
import Popup from 'reactjs-popup';

import {
    OptionLink,
    OptionLink2,
    Icon,
    Container
} from './footer.styles'
import FormInput from "../form/form-input.component";

const Footer = () => {

    const PopupExample = (event) => {
        return (
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Thank you for Subscribing</div>
            </Popup>
        );
    }
    return (
        <Container className="footer-59391">
            <div className="border-bottom pb-5 mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">

                            <form onSubmit={PopupExample} className="subscribe mb-4 mb-lg-0">
                                <div className="form-group">
                                    <FormInput
                                        name='email'
                                        type='email'
                                        className="form-control"
                                        placeholder="Subscribe"/>
                                    <button type='submit'>
                                        <FaArrowLeft/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 text-lg-center">
                            <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                                <li><OptionLink to='/'>HOME</OptionLink></li>
                                &nbsp;&nbsp;
                                <li><OptionLink to='/Shop'>SHOP</OptionLink></li>
                                &nbsp;&nbsp;
                                <li><OptionLink to='/contact'>CONTACT</OptionLink></li>
                                &nbsp;&nbsp;
                                <li><OptionLink to='/about'>ABOUT US</OptionLink></li>
                                &nbsp;&nbsp;
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul className="list-unstyled nav-links social nav-right text-lg-right">
                                <li><Icon to={{pathname: "https://github.com/natebrate"}}
                                          target="_blank"><FaGithub/></Icon></li>
                                <li><Icon to={{pathname: "https://github.com/natebrate"}}
                                                target="_blank"><FaInstagram/></Icon>
                                </li>
                                <li><Icon to={{pathname: "https://github.com/natebrate"}}
                                                target="_blank"><FaFacebook/></Icon>
                                </li>
                                <li><Icon to={{pathname: "https://github.com/natebrate"}}
                                          target="_blank"><FaTwitter/></Icon></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
                        <OptionLink2 href="#" className="m-0 p-0">Seaside Development</OptionLink2>
                    </div>
                    <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
                        <ul className="list-unstyled nav-links m-0 nav-left">
                            <li><OptionLink to='/'>Terms</OptionLink></li>
                            &nbsp;&nbsp;
                            <li><OptionLink to='/about'>About</OptionLink></li>
                            &nbsp;&nbsp;
                            <li><OptionLink to='/'>Privacy</OptionLink></li>
                            &nbsp;&nbsp;
                            <li><OptionLink to='/contact'>Contact</OptionLink></li>
                            &nbsp;&nbsp;
                        </ul>
                    </div>

                    <div className="col-lg-4 text-lg-right order-3 order-lg-3">
                        <p className="m-0 text-muted"><small>&copy; 2021. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;
