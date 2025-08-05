/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import ahakyrLogo from "../../assets/ahakyr/ahakyr-copy.png";
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/", icon: "fas fa-home" },
    { name: "About", path: "/about-us", icon: "fas fa-info-circle" },
    { name: "Services", path: "/services", icon: "fas fa-cogs" },
    { name: "Blog", path: "/blog", icon: "fas fa-blog" },
    { name: "Contact Us", path: "/contact", icon: "fas fa-envelope" },
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
                <li key={index} className="flex items-center">
                  <Link
                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    to={item.path}
                  >
                    <i className={`lg:text-blueGray-200 text-blueGray-400 ${item.icon} text-lg leading-lg mr-2`} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
