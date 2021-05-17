import React from 'react';
import { useAlert } from "react-alert";
import emailjs from 'emailjs-com';

import {contact, format} from "./contact-form.styles";
import CustomButton from "../custom-button/custom-button.component";

const ContactFormComponent = () => {
    const alert = useAlert();

        function sendEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_qk8yx9c', 'template_el4yh8m', e.target, 'user_OeIiQG2UIphwEfss4wTji')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }


        function handleSubmit(e) {
            e.preventDefault();
            alert.success("Email was sent, Thank you");
            //grab the information on submit has be clicked
        }

    return (
            <contact>
            <form id="contact-form" onSubmit={sendEmail} method="POST">
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="from_name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="from_name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="tel" className="form-control" placeholder="Phone Number" name="contact"/>
                        <format>Format: 123-456-7890</format>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message">
                    </textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <CustomButton id="email" type="submit"
                                value="Send Message" onClick={handleSubmit}>Submit
                        </CustomButton>
                    </div>
                </div>
            </form>
            </contact>
    );
}

export default ContactFormComponent;
