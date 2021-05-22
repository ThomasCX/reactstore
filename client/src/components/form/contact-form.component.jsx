import React, {useState}from 'react';
import { useAlert } from "react-alert";
import { send } from 'emailjs-com';

import {contact, format} from "./contact-form.styles";
import CustomButton from "../custom-button/custom-button.component";

const ContactFormComponent = () => {
    const alert = useAlert();
    const [toSend, setToSend] = useState({
        to_name: '',
        from_name: '',
        subject: '',
        contact: '',
        message: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_qk8yx9c',
            'template_el4yh8m',
            toSend,
            'user_OeIiQG2UIphwEfss4wTji'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


        const handleSubmit = (e) => {
            alert.success("Email was sent, Thank you");
            document.getElementById("to_name").value = "";
            document.getElementById("from_name").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("message").value = "";
        }

    return (
            <contact>
            <form id="contact-form" onSubmit={onSubmit} method="POST">
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input id='to_name'
                            type="text" className="form-control"
                               placeholder="Name" name="to_name"
                               value={toSend.to_name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id='from_name'
                            type="email" className="form-control" placeholder="Email Address" name="from_name"
                               value={toSend.from_name}
                               onChange={handleChange}/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id='subject'
                            type="text" className="form-control"
                               placeholder="Subject" name="subject"
                               value={toSend.subject}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input id='tel'
                            type="tel" className="form-control"
                               placeholder="Phone Number" name="contact"
                               value={toSend.contact}
                               onChange={handleChange}
                        />
                        <format>Format: 123-456-7890</format>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                    <textarea
                        className="form-control" id="message" cols="30" rows="8"
                              placeholder="Your message" name="message"
                              value={toSend.message}
                              onChange={handleChange}
                    >
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
