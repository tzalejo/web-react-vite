import logo from './../assets/logo.png';
import facebook from './../assets/redes/facebook-64.png';
import instagram from './../assets/redes/instagram-64.png';
function Footer() {
    return (
        <>
            <footer className="py-16 font-['Poppins'] code-section clicked-element hovered-element">
                <div id="footer" className="container mx-auto px-4 text-center">
                    <div className="flex justify-between items-center mb-8 px-4">
                        <div className="m-8 text-xl font-bold">
                            <a
                                id="footer-brand-name"
                                className="primary-color-text text-3xl text-orange-300 flex-shrink-0"
                            >
                                Bitcoin Neuqu&eacute;n
                            </a>
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-36 h-36 mx-auto mt-4"
                                id="nav-logo"
                            />
                            <a className="text-lg text-gray-600">
                                La Pampa 1200, Neuqu&eacute;n Cap.
                            </a>
                        </div>
                        <div id="footer-social-links" className="mb-8 flex">
                            <a
                                className="mx-2 w-16 h-16"
                                href="https://www.facebook.com/adriantecnicopc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={facebook}
                                    className="mx-auto"
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
                                    className="mx-auto"
                                    alt="Instagram"
                                />
                            </a>
                        </div>
                    </div>
                    <p id="footer-copyright" className="text-lg text-gray-600">
                        © 2024 Bitcoin Neuqu&eacute;n. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
