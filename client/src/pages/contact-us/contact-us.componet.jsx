import React from "react";

import ContactFormComponent from "../../components/form/contact-form.component";

import { ContactUsStyles } from './contact-us.styles';

const ContactPage = () => (
    <ContactUsStyles>
        <h1>Contact Us</h1>
        <ContactFormComponent/>
    </ContactUsStyles>
);

export default ContactPage
