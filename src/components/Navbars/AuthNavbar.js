import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [technologiesOpen, setTechnologiesOpen] = React.useState(false);
  const [itServicesOpen, setItServicesOpen] = React.useState(false);
  const [dataServicesOpen, setDataServicesOpen] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setTechnologiesOpen(false);
    setNavbarOpen(false);
    setItServicesOpen(false);
    setDataServicesOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about-us", icon: "fas fa-info-circle" },
    { name: "Services", path: "", icon: "fas fa-cogs", hasDropdown: true },
    { name: "Technologies", path: "", icon: "fas fa-laptop", hasDropdown: true },
    { name: "Contact Us", path: "/contact-us", icon: "fas fa-envelope" },
  ];

  const menuFont = "text-base"; // Consistent font size for menu items

  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {/* Logo & Hamburger */}
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-white text-lg md:text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase focus:outline-none"
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
            "lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none transition-all duration-300" +
            (navbarOpen ? " block rounded shadow-lg bg-white" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 list-none lg:ml-auto">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center relative lg:justify-start justify-center ${menuFont}`}
              >
                {item.hasDropdown ? (
                  item.name === "Services" ? (
                    <div
                      className="relative lg:pb-2"
                      onMouseEnter={
                        !isMobile ? () => setServicesOpen(true) : undefined
                      }
                      onMouseLeave={
                        !isMobile
                          ? () => {
                            setServicesOpen(false);
                            setItServicesOpen(false);
                          }
                          : undefined
                      }
                    >
                      {/* Main Services Button */}
                      <button
                        onClick={
                          isMobile
                            ? () => setServicesOpen(!servicesOpen)
                            : undefined
                        }
                        className={`w-full lg:w-auto lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold focus:outline-none ${menuFont}`}
                      >
                        <i
                          className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`}
                        />
                        {item.name}
                        <i
                          className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${servicesOpen && "rotate-180"
                            }`}
                        ></i>
                      </button>

                      {/* Main Services Dropdown */}
                      <div
                        className={`${servicesOpen
                          ? "block lg:opacity-100 lg:visible lg:translate-y-0"
                          : "hidden lg:opacity-0 lg:invisible lg:translate-y-2"
                          } w-full lg:w-72 bg-gray-800 rounded-lg shadow-xl z-[9999] transition-all duration-200 ease-out lg:absolute lg:top-full lg:left-0 lg:mt-0`}
                      >
                        {/* IT Services Submenu Trigger */}
                        <div
                          className="relative group"
                          onMouseEnter={
                            !isMobile ? () => setItServicesOpen(true) : undefined
                          }
                          onMouseLeave={
                            !isMobile ? () => setItServicesOpen(false) : undefined
                          }
                        >
                          <div className="flex justify-between items-center w-full">
                            <Link
                              to="/services"
                              className="block text-white py-3 px-4 hover:bg-gray-700 hover:text-blue-300 font-medium flex-grow"
                              onClick={closeAllDropdowns}
                            >
                              IT Services
                            </Link>
                            {/* Toggle button visible only on mobile for submenu */}
                            {/* {isMobile && ( */}
                            <button
                              type="button"
                              className="text-white px-3 py-3 hover:bg-gray-700"
                              aria-label="Toggle IT Services submenu"
                              onClick={() => setItServicesOpen(!itServicesOpen)}
                            >
                              <i
                                className={`fas fa-chevron-${itServicesOpen ? "up" : "down"}`}
                              />
                            </button>
                            {/* )} */}
                          </div>


                          {/* IT SERVICES SUBMENU */}
                          <div
                            className={
                              isMobile
                                ? `${itServicesOpen ? "block" : "hidden"} w-full bg-gray-700 rounded-b-md`
                                : `absolute top-0 right-full ${itServicesOpen ? "block lg:opacity-100 lg:visible" : "hidden lg:opacity-0 lg:invisible"
                                } w-64 bg-gray-800 rounded-lg shadow-xl z-[10000] transition-all duration-200 font-medium`
                            }
                            style={isMobile ? {} : { minWidth: "16rem" }}
                            // Fix: keep submenu open when mouse is over it
                            onMouseEnter={!isMobile ? () => setItServicesOpen(true) : undefined}
                            onMouseLeave={!isMobile ? () => setItServicesOpen(false) : undefined}
                          >
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/web-development-services"
                              onClick={closeAllDropdowns}
                            >
                              Web Development
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/custom-software-development"
                              onClick={closeAllDropdowns}
                            >
                              Custom Software Development Service
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/software-product-development"
                              onClick={closeAllDropdowns}
                            >
                              Software Product Development Service
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/mobile-app-development-services"
                              onClick={closeAllDropdowns}
                            >
                              Mobile app development
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/software-testing"
                              onClick={closeAllDropdowns}
                            >
                              Software Testing Services
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/ui-ux-designing"
                              onClick={closeAllDropdowns}
                            >
                              UI/UX
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/ai-ml-development"
                              onClick={closeAllDropdowns}
                            >
                              AI & ML
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/iot-solutions"
                              onClick={closeAllDropdowns}
                            >
                              IOT
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/blockchain"
                              onClick={closeAllDropdowns}
                            >
                              blockchain
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/data-analytics"
                              onClick={closeAllDropdowns}
                            >
                              Data Analytics
                            </Link>
                          </div>
                        </div>
                        {/* Services direct links */}
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/staff-augmentation"
                          onClick={closeAllDropdowns}
                        >
                          Staff Augmentation
                        </Link>
                        <div
                          className="relative group"
                          onMouseEnter={
                            !isMobile ? () => setDataServicesOpen(true) : undefined
                          }
                          onMouseLeave={
                            !isMobile ? () => setDataServicesOpen(false) : undefined
                          }
                        >
                          <div className="flex justify-between items-center w-full">
                            <Link
                              to="/services"
                              className="block text-white py-3 px-4 hover:bg-gray-700 hover:text-blue-300 font-medium flex-grow"
                              onClick={closeAllDropdowns}
                            >
                              Data Services
                            </Link>
                            {/* Toggle button visible only on mobile for submenu */}
                            {/* {isMobile && ( */}
                            <button
                              type="button"
                              className="text-white px-3 py-3 hover:bg-gray-700"
                              aria-label="Toggle Data Services submenu"
                              onClick={() => setDataServicesOpen(!dataServicesOpen)}
                            >
                              <i
                                className={`fas fa-chevron-${dataServicesOpen ? "up" : "down"}`}
                              />
                            </button>
                            {/* )} */}
                          </div>


                          {/* IT SERVICES SUBMENU */}
                          <div
                            className={
                              isMobile
                                ? `${dataServicesOpen ? "block" : "hidden"} w-full bg-gray-700 rounded-b-md`
                                : `absolute top-0 right-full ${dataServicesOpen ? "block lg:opacity-100 lg:visible" : "hidden lg:opacity-0 lg:invisible"
                                } w-64 bg-gray-800 rounded-lg shadow-xl z-[10000] transition-all duration-200 font-medium`
                            }
                            style={isMobile ? {} : { minWidth: "16rem" }}
                            // Fix: keep submenu open when mouse is over it
                            onMouseEnter={!isMobile ? () => setDataServicesOpen(true) : undefined}
                            onMouseLeave={!isMobile ? () => setDataServicesOpen(false) : undefined}
                          >
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/data-entry"
                              onClick={closeAllDropdowns}
                            >
                              Data Entry Services
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/data-annotation"
                              onClick={closeAllDropdowns}
                            >
                              Data Annotation
                            </Link>
                            <Link
                              className={`block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 text-sm ${menuFont}`}
                              to="/image-annotation"
                              onClick={closeAllDropdowns}
                            >
                              Image Annotation Service
                            </Link>
                          </div>
                        </div>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/call-center-services"
                          onClick={closeAllDropdowns}
                        >
                          Call Center Services
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/revenue-cycle-management"
                          onClick={closeAllDropdowns}
                        >
                          Revenue Cycle Management
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/enterprise-resource-planning"
                          onClick={closeAllDropdowns}
                        >
                          Enterprise Resource Planning
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/it-infrastructure-management"
                          onClick={closeAllDropdowns}
                        >
                          IT Infrastructure and Management
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/seo-digital-marketing"
                          onClick={closeAllDropdowns}
                        >
                          SEO & Digital Marketing
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // TECHNOLOGIES DROPDOWN
                    <div
                      className="relative lg:pb-2"
                      onMouseEnter={
                        !isMobile ? () => setTechnologiesOpen(true) : undefined
                      }
                      onMouseLeave={
                        !isMobile ? () => setTechnologiesOpen(false) : undefined
                      }
                    >
                      <button
                        onClick={
                          isMobile
                            ? () => setTechnologiesOpen(!technologiesOpen)
                            : undefined
                        }
                        className={`w-full lg:w-auto lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center uppercase font-bold focus:outline-none ${menuFont}`}
                      >
                        <i
                          className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`}
                        />
                        {item.name}
                        <i
                          className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${technologiesOpen && "rotate-180"
                            }`}
                        ></i>
                      </button>
                      <div
                        className={`${technologiesOpen
                          ? "block lg:opacity-100 lg:visible lg:translate-y-0"
                          : "hidden lg:opacity-0 lg:invisible lg:translate-y-2"
                          } w-full lg:w-72 bg-gray-800 rounded-lg shadow-xl z-[9999] transition-all duration-200 ease-out lg:absolute lg:top-full lg:left-0 lg:mt-0`}
                      >
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/cloud-services"
                          onClick={closeAllDropdowns}
                        >
                          Cloud Services
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/microsoft-technologies"
                          onClick={closeAllDropdowns}
                        >
                          Microsoft Technologies
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/javascript-technologies"
                          onClick={closeAllDropdowns}
                        >
                          Javascript Technologies
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/mobile-app-development"
                          onClick={closeAllDropdowns}
                        >
                          Mobile App Development
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/devops"
                          onClick={closeAllDropdowns}
                        >
                          DevOps
                        </Link>
                        <Link
                          className={`block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium ${menuFont}`}
                          to="/test-automation"
                          onClick={closeAllDropdowns}
                        >
                          Test Automation
                        </Link>
                      </div>
                    </div>
                  )
                ) : (
                  // Plain menu item
                  <Link
                    className={`lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 lg:-mt-2 flex items-center uppercase font-bold focus:outline-none ${menuFont}`}
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
