import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/img/logo/logo.png';
import DarkMode from './DarkMode';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        };
    }, []);

    // const [menuActive, setMenuActive] = useState(null);
    //
    // const handleMenuActive = () => {
    //     setMenuActive(!menuActive);
    // };

    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = (index) => {
        setActiveIndex(index);
    };

    return (
        <header
            id="header_main"
            className={`header ${scroll ? 'is-fixed' : ''}`}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                            <div className="header__left">
                                <div className="logo">
                                    <NavLink to="/" className="light">
                                        <img
                                            width="50"
                                            height="50"
                                            src={logo}
                                            alt="Bitcoin Neuquen"
                                        />
                                    </NavLink>
                                    <NavLink to="/" className="dark">
                                        <img
                                            width="50"
                                            height="50"
                                            src={logo}
                                            alt="Bitcoin Neuquen"
                                        />
                                    </NavLink>
                                </div>
                                <div className="left__main">
                                    <nav
                                        id="main-nav"
                                        className={`main-nav`}
                                    >
                                        <ul
                                            id="menu-primary-menu"
                                            className="menu"
                                        >
                                            {menus.map((data, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() =>
                                                        handleDropdown(idx)
                                                    }
                                                    className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`}
                                                >
                                                    <ScrollLink
                                                        to={data.links}
                                                        smooth={true}
                                                        duration={500}
                                                    >
                                                        {data.name}
                                                    </ScrollLink>
                                                    {data.namesub && (
                                                        <ul className="sub-menu">
                                                            {data.namesub.map(
                                                                (submenu) => (
                                                                    <li
                                                                        key={
                                                                            submenu.id
                                                                        }
                                                                        className="menu-item"
                                                                    >
                                                                        <NavLink
                                                                            to={
                                                                                submenu.links
                                                                            }
                                                                        >
                                                                            {
                                                                                submenu.sub
                                                                            }
                                                                        </NavLink>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="header__right">
                                <DarkMode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
