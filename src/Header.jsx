import TitleComponent from './Components/TitleComponent';

function Header() {
    return (
        <>
            <header id="top" className="code-section font-['Poppins']">
                <nav className="container mx-auto px-6 py-10">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">
                            <a
                                id="nav-name-text"
                                className="text-center text-6xl font-black text-blue-500"
                            >
                                <TitleComponent title={'Sistema informatico'} />
                            </a>
                        </div>
                        <div
                            id="nav-links"
                            className="hidden items-center space-x-8 text-sm md:flex lg:text-base"
                        >
                            {/* <a */}
                            {/*     href="/#how-it-works" */}
                            {/*     className="how-it-works-link text-gray-800" */}
                            {/* > */}
                            {/*     How It Works */}
                            {/* </a> */}
                            {/* <a href="/#pricing" className="pricing-link text-gray-800"> */}
                            {/*     Pricing */}
                            {/* </a> */}
                            <a
                                href="https://t.me/tzalejo"
                                target="_blank"
                                className="how-it-works-link text-indigo-600 hover:text-indigo-700 transition-colors duration-300 ease-in-out"
                            >
                                Comunidad Bitcoin
                            </a>
                        </div>
                        <div
                            id="mobile-menu-icon"
                            className="flex items-center md:hidden"
                        >
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
                    <div
                        id="nav-links-mobile"
                        className="mt-4 hidden md:hidden"
                    >
                        <div className="relative z-10 flex flex-col space-y-2 bg-white pb-4 text-center text-lg">
                            <a
                                href="/#how-it-works"
                                className="how-it-works-link text-gray-800"
                            >
                                How It Works
                            </a>
                            <a
                                href="/#pricing"
                                className="pricing-link text-gray-800"
                            >
                                Pricing
                            </a>
                            <a
                                href="/#blog"
                                className="blog-link text-gray-800"
                            >
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
