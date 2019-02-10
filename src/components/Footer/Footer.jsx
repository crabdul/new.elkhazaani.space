import React, { Component } from 'react';
import { Link, withPrefix } from 'gatsby';
import './Footer.css';

const Footer = () => (
    <footer>
        <a href='https://github.com/crabdul' target="_blank">
            <img src={withPrefix('logos/github.svg')} alt=" icon" id="footer-github"/>
        </a>
        <a href='mailto:karim.elkhazaani@zoho.com' >
            <img src={withPrefix('logos/email.svg')} alt="mail icon" id="footer-email" />
        </a>
        <a href='https://www.linkedin.com/in/el-khazaani/' target="_blank">
            <img src={withPrefix('logos/linkedin.svg')} alt="linkedin icon" id="footer-linkedin" />
        </a>
    </footer>
)

export default Footer;
