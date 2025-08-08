/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import ahakyrLogo from "../../assets/ahakyr/ahakyr-copy.png";
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [itServicesOpen, setItServicesOpen] = React.useState(false);
  const [dataServicesOpen, setDataServicesOpen] = React.useState(false);

  // Handle dropdown timeouts for better UX
  const [servicesTimeout, setServicesTimeout] = React.useState(null);
  const [itServicesTimeout, setItServicesTimeout] = React.useState(null);
  const [dataServicesTimeout, setDataServicesTimeout] = React.useState(null);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    return () => {
      if (servicesTimeout) clearTimeout(servicesTimeout);
      if (itServicesTimeout) clearTimeout(itServicesTimeout);
      if (dataServicesTimeout) clearTimeout(dataServicesTimeout);
    };
  }, [servicesTimeout, itServicesTimeout, dataServicesTimeout]);

  const handleServicesEnter = () => {
    if (servicesTimeout) clearTimeout(servicesTimeout);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => setServicesOpen(false), 150);
    setServicesTimeout(timeout);
  };

  const handleItServicesEnter = () => {
    if (itServicesTimeout) clearTimeout(itServicesTimeout);
    setItServicesOpen(true);
  };

  const handleItServicesLeave = () => {
    const timeout = setTimeout(() => setItServicesOpen(false), 150);
    setItServicesTimeout(timeout);
  };

  const handleDataServicesEnter = () => {
    if (dataServicesTimeout) clearTimeout(dataServicesTimeout);
    setDataServicesOpen(true);
  };

  const handleDataServicesLeave = () => {
    const timeout = setTimeout(() => setDataServicesOpen(false), 150);
    setDataServicesTimeout(timeout);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setServicesOpen(false);
    setItServicesOpen(false);
    setDataServicesOpen(false);
    setNavbarOpen(false);
  };

  // Handle mobile menu item clicks
  const handleMobileMenuClick = () => {
    closeAllDropdowns();
  };

  const menuItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about-us", icon: "fas fa-info-circle" },
    { name: "Services", path: "/services", icon: "fas fa-cogs", hasDropdown: true },
    { name: "Blog", path: "/blog", icon: "fas fa-blog" },
    { name: "Contact Us", path: "/contact", icon: "fas fa-envelope" },
  ];

  const itServices = [
    { name: "Web Development Service", path: "/web-development" },
    { name: "Custom Software Development Service", path: "/custom-software-development" },
    { name: "Software Product Development Service", path: "/software-product-development" },
    { name: "Mobile app development Services", path: "/mobile-app-development" },
    { name: "Software Testing Services", path: "/software-testing" },
    { name: "UI/UX", path: "/ui-ux-design" },
    { name: "AI & ML", path: "/ai-ml-development" },
    { name: "IOT", path: "/iot-solutions" },
    { name: "Blockchain", path: "/blockchain-development" },
    { name: "Data Analytics", path: "/data-analytics" },
  ];

  const dataServices = [
    { name: "Data Strategy & Consulting", path: "/data-strategy-consulting" },
    { name: "Data Integration & Migration", path: "/data-integration-migration" },
    { name: "Analytics & Business Intelligence", path: "/analytics-business-intelligence" },
    { name: "Data Engineering", path: "/data-engineering" },
    { name: "Data Security & Privacy", path: "/data-security-privacy" },
    { name: "AI & Machine Learning Solutions", path: "/ai-ml-solutions" },
    { name: "Data Entry & Processing", path: "/data-entry-processing" },
    { name: "Data Conversion & Digitization", path: "/data-conversion-digitization" },
  ];

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-lg  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              {/* <img src={ahakyrLogo} alt="Ahakyr Logo" className="w-10 h-10" /> */}
              AHAKYR
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {menuItems.map((item, index) => (
                <li key={index} className="flex items-center relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="flex items-center">
                        <Link
                          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          to="/services"
                          onClick={handleMobileMenuClick}
                        >
                          <i className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`} />
                          {item.name}
                        </Link>
                        <button
                          className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                          onClick={() => setServicesOpen(!servicesOpen)}
                        >
                          <i className={`fas fa-chevron-down ml-1 text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                      </div>

                      {/* Services Dropdown */}
                      <div
                        className={`${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} absolute top-full left-0 mt-2 w-72 bg-gray-800 rounded-lg shadow-xl z-[9999] transition-all duration-200 ease-out`}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                      >
                        {/* IT Services with Sub-dropdown */}
                        <div
                          className="relative group"
                          onMouseEnter={handleItServicesEnter}
                          onMouseLeave={handleItServicesLeave}
                        >
                          <Link
                            className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-gray-700 font-medium cursor-pointer rounded-t-lg transition-colors duration-150 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                            to="/services"
                            onClick={handleMobileMenuClick}
                          >
                            <div className="flex items-center">
                              {/* <i className="fas fa-laptop-code mr-3 text-blue-400"></i> */}
                              IT Services
                            </div>
                            {/* <i className="fas fa-chevron-right text-xs text-gray-400"></i> */}
                          </Link>

                          {/* IT Services Sub-dropdown */}
                          {/* <div
                            className={`${itServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute right-full top-0 mr-1 w-80 bg-gray-800 rounded-lg shadow-xl z-[10000] transition-all duration-200 ease-out max-h-96 overflow-y-auto`}
                            onMouseEnter={handleItServicesEnter}
                            onMouseLeave={handleItServicesLeave}
                          >
                            <div className="py-2">
                              {itServices.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  className="block py-2 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150 text-sm"
                                  to={service.path}
                                  onClick={handleMobileMenuClick}
                                >
                                  <i className="fas fa-arrow-right mr-2 text-xs text-gray-500"></i>
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div> */}
                        </div>

                        {/* Staff Augmentation */}
                        <Link
                          className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150"
                          to="/staff-augmentation"
                          onClick={handleMobileMenuClick}
                        >
                          {/* <i className="fas fa-users mr-3 text-green-400"></i> */}
                          Staff Augmentation
                        </Link>

                        {/* Data Services with Sub-dropdown */}
                        <div
                          className="relative group"
                          onMouseEnter={handleDataServicesEnter}
                          onMouseLeave={handleDataServicesLeave}
                        >
                          <Link
                            className="w-full flex justify-between items-center py-3 px-4 text-white hover:bg-gray-700 font-medium cursor-pointer rounded-b-lg transition-colors duration-150 hover:text-gray-300 focus:outline-none focus:text-gray-300"
                            to="/data-services"
                            onClick={handleMobileMenuClick}
                          >
                            <div className="flex items-center">
                              {/* <i className="fas fa-database mr-3 text-purple-400"></i> */}
                              Data Services
                            </div>
                            {/* <i className="fas fa-chevron-right text-xs text-gray-400"></i> */}
                          </Link>

                          {/* Data Services Sub-dropdown */}
                          {/* <div
                            className={`${dataServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute right-full top-0 mr-1 w-80 bg-gray-800 rounded-lg shadow-xl z-[10000] transition-all duration-200 ease-out max-h-96 overflow-y-auto`}
                            onMouseEnter={handleDataServicesEnter}
                            onMouseLeave={handleDataServicesLeave}
                          >
                            <div className="py-2">
                              {dataServices.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  className="block py-2 px-4 text-white hover:bg-gray-700 hover:text-purple-300 font-medium transition-colors duration-150 text-sm"
                                  to={service.path}
                                  onClick={handleMobileMenuClick}
                                >
                                  <i className="fas fa-arrow-right mr-2 text-xs text-gray-500"></i>
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </div> */}
                        </div>
                        {/* Call Center */}
                        <Link
                          className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150"
                          to="/call-center-services"
                          onClick={handleMobileMenuClick}
                        >
                          {/* <i className="fas fa-phone mr-3 text-green-400"></i> */}
                          Call Center Services
                        </Link>

                        <Link
                          className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150"
                          to="/revenue-cycle-management"
                          onClick={handleMobileMenuClick}
                        >
                          {/* <i className="fas fa-phone mr-3 text-green-400"></i> */}
                          Revenue Cycle Management
                        </Link>

                        <Link
                          className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150"
                          to="/enterprise-resource-planning"
                          onClick={handleMobileMenuClick}
                        >
                          {/* <i className="fas fa-phone mr-3 text-green-400"></i> */}
                          Enterprise Resource Planning
                        </Link>

                        <Link
                          className="block py-3 px-4 text-white hover:bg-gray-700 hover:text-blue-300 font-medium transition-colors duration-150"
                          to="/it-infrastructure-management"
                          onClick={handleMobileMenuClick}
                        >
                          {/* <i className="fas fa-phone mr-3 text-green-400"></i> */}
                          IT & Infrastructure Management
                        </Link>

                      </div>
                    </div>
                  ) : (
                    <Link
                      className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      to={item.path}
                      onClick={handleMobileMenuClick}
                    >
                      <i className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`} />
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
