
function Footer() {
    return (
        <>
            <footer className="code-section py-16 font-['Poppins']" id="2rsyn">
                <div id="footer" className="container mx-auto px-4 text-center">
                    <div className="m-8 text-xl font-bold">
                        <a
                            id="footer-brand-name"
                            href="/"
                            className="primary-color-text text-3xl text-blue-600"
                        >
                            Sistema informatico
                        </a>
                    </div>
                    <div
                        id="footer-nav-links"
                        className="mb-8 flex flex-col justify-center sm:flex-row"
                    >
                        <a
                            href="/"
                            className="mx-8 text-lg text-gray-700 hover:text-blue-500"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/"
                            className="mx-8 text-lg text-gray-700 hover:text-blue-500"
                        >
                            Terms of Service
                        </a>
                    </div>
                    <div id="footer-social-links" className="mb-8 hidden">
                        <a href="/" className="mx-2">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" className="mx-2">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="/" className="mx-2">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <p id="footer-copyright" className="text-lg text-gray-600">
                        © 2023 Sistema informatico. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
