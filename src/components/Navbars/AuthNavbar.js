/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import ahakyrLogo from "../../assets/ahakyr/ahakyr-copy.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [technologiesOpen, setTechnologiesOpen] = React.useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setNavbarOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about-us", icon: "fas fa-info-circle" },
    { name: "Services", path: "", icon: "fas fa-cogs", hasDropdown: true },
    { name: "Technologies", path: "", icon: "fas fa-laptop", hasDropdown: true },
    { name: "Contact Us", path: "/contact-us", icon: "fas fa-envelope" },
  ];

  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* Logo & Hamburger */}
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase focus:outline-none"
          >
            AHAKYR
          </Link>
          <button
            className="cursor-pointer text-xl px-3 py-1 border border-transparent rounded bg-transparent block lg:hidden focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="text-white fas fa-bars"></i>
          </button>
        </div>

        {/* Menu */}
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none transition-all duration-300" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {menuItems.map((item, index) => (
              <li key={index} className="relative lg:flex lg:items-center">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={
                      !isMobile
                        ? () =>
                          item.name === "Services"
                            ? setServicesOpen(true)
                            : setTechnologiesOpen(true)
                        : undefined
                    }
                    onMouseLeave={
                      !isMobile
                        ? () =>
                          item.name === "Services"
                            ? setServicesOpen(false)
                            : setTechnologiesOpen(false)
                        : undefined
                    }
                  >
                    {/* Main Menu Button */}
                    <button
                      onClick={
                        isMobile
                          ? () =>
                            item.name === "Services"
                              ? setServicesOpen(!servicesOpen)
                              : setTechnologiesOpen(!technologiesOpen)
                          : undefined
                      }
                      className="w-full lg:w-auto lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold focus:outline-none"
                    >
                      <i
                        className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`}
                      />
                      {item.name}
                      <i
                        className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${item.name === "Services"
                            ? servicesOpen && "rotate-180"
                            : technologiesOpen && "rotate-180"
                          }`}
                      ></i>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`${item.name === "Services"
                          ? servicesOpen
                            ? "block lg:opacity-100 lg:visible lg:translate-y-0"
                            : "hidden lg:opacity-0 lg:invisible lg:translate-y-2"
                          : technologiesOpen
                            ? "block lg:opacity-100 lg:visible lg:translate-y-0"
                            : "hidden lg:opacity-0 lg:invisible lg:translate-y-2"
                        } w-full lg:w-72 bg-gray-800 rounded-lg shadow-xl z-[9999] transition-all duration-200 ease-out lg:absolute lg:top-full lg:left-0 lg:mt-2`}
                    >
                      {item.name === "Services" && (
                        <>
                          <Link
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium"
                            to="/staff-augmentation"
                            onClick={closeAllDropdowns}
                          >
                            Staff Augmentation
                          </Link>
                          <Link
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium"
                            to="/call-center-services"
                            onClick={closeAllDropdowns}
                          >
                            Call Center Services
                          </Link>
                          <Link
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium"
                            to="/seo-digital-marketing"
                            onClick={closeAllDropdowns}
                          >
                            SEO & Digital Marketing
                          </Link>
                        </>
                      )}

                      {item.name === "Technologies" && (
                        <>
                          <Link
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium"
                            to="/cloud-services"
                            onClick={closeAllDropdowns}
                          >
                            Cloud Services
                          </Link>
                          <Link
                            className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium"
                            to="/microsoft-technologies"
                            onClick={closeAllDropdowns}
                          >
                            Microsoft Technologies
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold focus:outline-none"
                    to={item.path}
                    onClick={closeAllDropdowns}
                  >
                    <i
                      className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`}
                    />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
