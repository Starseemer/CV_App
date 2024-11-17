import React from 'react';
import './contact_view.css';
import { SocialIcon } from 'react-social-icons'

const ContactView = () => {
    return (
        <div>
            <div id="title-center">
            <h3>Get In Touch</h3>
            </div>
        <div className="card" style={{ width: 40 + "rem", marginTop: 2 + "rem", marginLeft: 0 }}>
            
            <div id="content-center">
            <p>Email: berkyldzgorer@gmail.com</p>
            <p>Phone: +49 176 79808498</p>
            </div>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="buttons">
                <SocialIcon url="https://github.com/Starseemer" />
                <SocialIcon url="https://www.linkedin.com/in/berk-y%C4%B1ld%C4%B1zg%C3%B6rer-0397a8144/" />
            </div>
        </div>
        </div>
    );
};

export default ContactView;