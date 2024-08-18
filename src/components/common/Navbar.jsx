import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isSectorDropdownOpen, setIsSectorDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Determine if the current route is one of the dropdown routes
    const isServiceActive =
        location.pathname.startsWith("/ifms-service") ||
        location.pathname.startsWith("/psmg-service") ||
        location.pathname.startsWith("/other-service");

    const isSectorActive =
        location.pathname.startsWith("/industrial-sector") ||
        location.pathname.startsWith("/retail-sector") ||
        location.pathname.startsWith("/private-security-sector") ||
        location.pathname.startsWith("/other-sector");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMouseEnterService = () => {
        setIsServiceDropdownOpen(true);
    };

    const handleMouseLeaveService = () => {
        setIsServiceDropdownOpen(false);
    };

    const handleMouseEnterSector = () => {
        setIsSectorDropdownOpen(true);
    };

    const handleMouseLeaveSector = () => {
        setIsSectorDropdownOpen(false);
    };

    return (
        <nav className="bg-slate-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/images/logo-trans.png"
                        className="h-12 object-cover"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-3xl font-bold whitespace-nowrap navbar-title-text">
                        DSS
                    </span>
                </NavLink>
                <button
                    onClick={toggleMobileMenu}
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-multi-level"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isMobileMenuOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-multi-level"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-slate-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-900">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                        isActive
                                            ? "text-blue-700 "
                                            : "text-white"
                                    }`
                                }
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                        isActive
                                            ? "text-blue-700 "
                                            : "text-white"
                                    }`
                                }
                                aria-current="page"
                            >
                                About
                            </NavLink>
                        </li>
                        <li
                            onMouseEnter={handleMouseEnterService}
                            onMouseLeave={handleMouseLeaveService}
                            className="relative"
                        >
                            <NavLink
                                id="serviceNavbarLink"
                                to={"/services"}
                                className={({ isActive }) =>
                                    `flex items-center justify-between w-full py-2 px-3 rounded ${
                                        isServiceActive || isActive
                                            ? "text-blue-700 "
                                            : "text-white"
                                    } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto`
                                }
                            >
                                Services
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </NavLink>
                            {isServiceDropdownOpen && (
                                <div
                                    id="serviceNavbar"
                                    className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                                >
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <NavLink
                                                to="/ifms-service"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Integrated Facility Management
                                                Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/psmg-service"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Private Security and Manned
                                                Guarding
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/other-service"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Other Service
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li
                            onMouseEnter={handleMouseEnterSector}
                            onMouseLeave={handleMouseLeaveSector}
                            className="relative"
                        >
                            <NavLink
                                id="sectorNavbarLink"
                                to={"/sectors"}
                                className={({ isActive }) =>
                                    `flex items-center justify-between w-full py-2 px-3 rounded ${
                                        isSectorActive || isActive
                                            ? "text-blue-700 "
                                            : "text-white"
                                    } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto`
                                }
                            >
                                Sectors
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </NavLink>
                            {isSectorDropdownOpen && (
                                <div
                                    id="serviceNavbar"
                                    className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                                >
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li>
                                            <NavLink
                                                to="/industrial-sector"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Industrial Sector
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/retail-sector"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Retail Sector
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to="/private-security-sector"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Private Security
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/other-sector"
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 ${
                                                        isActive
                                                            ? "text-blue-700 "
                                                            : "hover:bg-gray-100"
                                                    }`
                                                }
                                            >
                                                Other Sector
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                                        isActive
                                            ? "text-blue-700 "
                                            : "text-white"
                                    }`
                                }
                                aria-current="page"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
