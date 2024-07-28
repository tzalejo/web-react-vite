import logo from './../assets/logo.png';

function Header() {
    return (
        <>
            <header className="bg-white shadow-lg h-24 fixed w-full z-10 top-0 hidden md:flex">
                <a
                    href=""
                    className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-12 xl:px-12"
                >
                    <img className="w-16 h-16" src={logo} alt="" />
                </a>
                <nav className="header-links contents font-semibold text-base lg:text-lg">
                    <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
                        <li className="text-center block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4 active">
                            <a href="">
                                <span>Home</span>
                            </a>
                        </li>

                        <li className="text-center block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4 active">
                            <a href="">
                                <span>Saldo</span>
                            </a>
                        </li>
                        <li className="text-center block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4 active">
                            <a href="">
                                <span>Exchange</span>
                            </a>
                        </li>
                        <li className="text-center block border border-white rounded hover:border-gray-200  hover:bg-gray-200 py-2 px-4 active">
                            <a href="">
                                <span>Nuestro Clientes</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="border flex items-center px-4 lg:px-6 xl:px-8">
                    <a
                        className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded"
                        href="https://t.me/+wS-A1u2d-ew5OTFh"
                        target="_blank"
                    >
                        Contactame
                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;
