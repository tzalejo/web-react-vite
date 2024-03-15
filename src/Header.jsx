

function Header() {

    return (
        <>
            <header id="top" className="code-section font-['Poppins']">
                <nav className="container mx-auto px-6 py-10">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">
                            <a
                                id="nav-name-text"
                                href="/"
                                className="primary-color-text text-xl lg:text-3xl text-blue-600"
                            >
                                Sistema informatico
                            </a>
                        </div>
                        <div
                            id="nav-links"
                            className="hidden items-center space-x-8 text-sm md:flex lg:text-base"
                        >
                            <a
                                href="/#how-it-works"
                                className="how-it-works-link text-gray-800"
                            >
                                How It Works
                            </a>
                            <a href="/#pricing" className="pricing-link text-gray-800">
                                Pricing
                            </a>
                            <a href="/#blog" className="blog-link text-gray-800">
                                Blog
                            </a>
                        </div>
                        <div
                            id="nav-cta"
                            className="hidden items-center space-x-4 text-sm md:flex lg:text-base"
                        >
                            <div id="nav-cta-login-buttons" className="invisible">
                                <a href="/login" className="px-4 py-2 text-gray-800">
                                    Log In
                                </a>
                                <a
                                    href="/signup"
                                    className="primary-color-bg rounded px-4 py-2 text-white bg-blue-600"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                        <div id="mobile-menu-icon" className="flex items-center md:hidden">
                            <button
                                className="text-gray-800"
                                aria-label="Navigation Dropdown Menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="nav-links-mobile" className="mt-4 hidden md:hidden">
                        <div className="relative z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg">
                            <a
                                href="/#how-it-works"
                                className="how-it-works-link text-gray-800"
                            >
                                How It Works
                            </a>
                            <a href="/#pricing" className="pricing-link text-gray-800">
                                Pricing
                            </a>
                            <a href="/#blog" className="blog-link text-gray-800">
                                Blog
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
