import { useState, useEffect } from 'react';
import './styles.scss';
import GoogleMapArea from './../../pages/google-map/GoogleMapArea';
import { Link } from 'react-router-dom';

import logo from './../../assets/img/logo/logo.png';
import facebook from './../../assets/img/redes/facebook-64.png';
import facebookLight from './../../assets/img/redes/facebook-64_b.png';
import instagram from './../../assets/img/redes/instagram-64.png';
import instagramLight from './../../assets/img/redes/instagram-64_b.png';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer id="contactos" className="footer style-2">
            <div className="container">
                <div className="footer__main">
                    <div className="row">
                        <div className="col-xl-4 mt-10 text-center">
                            <ul className="mb-4">
                                <li>
                                    <img
                                        width="120"
                                        height="120"
                                        src={logo}
                                        alt="Bitcoin Neuquen"
                                    />
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h6>Let&apos;s bitcoin! 🤙</h6>
                                </li>
                            </ul>
                            <ul className="list mb-4">
                                <li>
                                    <p>
                                        La Pampa 1200, Neuquén Cap. Argentina.
                                    </p>
                                </li>
                            </ul>
                            <ul className="mb-4">
                                <li>
                                    <h6>Nuestras Redes</h6>
                                </li>
                                <li>
                                    <div
                                        id="footer-social-links"
                                        className="mb-4 flex"
                                    >
                                        <a
                                            className="mx-2 w-16 h-16"
                                            href="https://www.facebook.com/adriantecnicopc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={facebook}
                                                className="mx-auto logo light"
                                                alt="Facebook"
                                            />
                                            <img
                                                src={facebookLight}
                                                className="mx-auto logo dark"
                                                alt="Facebook"
                                            />
                                        </a>
                                        <a
                                            className="mx-2 w-16 h-16"
                                            href="https://www.instagram.com/bitcoin.neuquen?igsh=bWxlNDBjaWY0Yjhj"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={instagram}
                                                className="mx-auto logo light"
                                                alt="Instagram"
                                            />
                                            <img
                                                src={instagramLight}
                                                className="mx-auto logo dark"
                                                alt="Instagram"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="mb-4">
                                <li>
                                    <h6>Nuestros Representantes</h6>
                                </li>
                                <li>
                                    <p>Adrian Delgado</p>
                                </li>
                                <li>
                                    <p>Fede Delgado</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-8">
                            <GoogleMapArea space={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer__bottom">
                    <p>
                        ©2024 Bitcoin Neuquén. All rights reserved. Terms of
                        Service | Privacy Terms
                    </p>
                </div>
            </div>

            {isVisible && (
                <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>
            )}
        </footer>
    );
}

export default Footer;
