import TitleComponent from './Components/TitleComponent';
import logo from './assets/logo.png';

function Header() {
    return (
        <>
            <header
                id="top"
                className="code-section from-white to-[#40424e] font-['Poppins']"
            >
                <nav className="container mx-auto px-6 py-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <a
                                id="nav-name-text"
                                className="text-center text-6xl font-black text-blue-500"
                                style={{ color: '#1E1F25' }}
                            >
                                <TitleComponent title={'Bitcoin Neuquen'} />
                            </a>
                        </div>

                        <img
                            src={logo}
                            alt="Logo"
                            className="w-36 h-36"
                            id="nav-logo"
                        />

                        <div
                            id="nav-links"
                            className="hidden items-center space-x-8 text-sm md:flex lg:text-base"
                        >
                            <a
                                href="https://t.me/+wS-A1u2d-ew5OTFh"
                                target="_blank"
                                className="relative inline cursor-pointer text-xl font-medium before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full		 before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
                            >
                                Comunidad Bitcoin
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
