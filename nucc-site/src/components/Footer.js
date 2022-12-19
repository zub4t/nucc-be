import React from 'react';
import FooterContainer from '../styled-components/FooterContainer';
import '@fortawesome/fontawesome-free/js/all.js';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="redes-sociais">
                <a href="https://www.facebook.com/nuccfcup/" target="_blank" title="Facebook"
                   className="x1"><i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/nucc_fcup/" target="_blank" title="Instagram"
                   className="x1"><i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/company/nucc-fcup" target="_blank" title="Linkedin"
                   className="x1"><i className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://twitter.com/nuccfcup" target="_blank" title="Twitter"
                   className="x1"><i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://youtube.com/channel/UCRX39nFDLSN4CAV40iUbZ8g" target="_blank" title="Youtube"
                   className="x1"><i className="fab fa-youtube fa-2x"></i>
                </a>
            </div>
            <div className="py-2 text-center copyright">
                <small>Copyright © NuCC 2020</small>
            </div>

        </FooterContainer>
    )
}

export default Footer;