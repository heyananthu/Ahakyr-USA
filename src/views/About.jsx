import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from '../assets/banners/about-banner.avif'
import banner2 from '../assets/banners/staff-augmentation-banner.avif'
export default function About() {
  return (
    <>
      <Navbar transparent />
      <main>
        {/* Hero Section */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${banner})`
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="md:pr-12 mt-12 md:mt-1">
                  <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight tracking-wide drop-shadow-2xl">
                    Technology with a Purpose. Solutions that Drive Progress.
                  </h1>
                  <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                    Ahakyr is a forward-thinking IT solutions company based in the United States,
                    dedicated to crafting intelligent, scalable, and ethical technology solutions
                    for businesses across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            {/* Mission and Vision Row */}
            <div className="flex flex-wrap mb-12">
              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full   mb-8 shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto">
                    <div className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-bullseye text-xl"></i>
                    </div>
                    <h6 className="text-2xl font-semibold mb-4">Our Mission</h6>
                    <p className="text-lg leading-relaxed text-blueGray-600">
                      To enable businesses in the USA and beyond to leverage intelligent
                      technologies that are purposeful, human-centric, and built for long-term value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-6/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full md:h-72 mb-8  shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto">
                    <div className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-eye text-xl"></i>
                    </div>
                    <h6 className="text-2xl font-semibold mb-4">Our Vision</h6>
                    <p className="text-lg leading-relaxed text-blueGray-600">
                      To become a trusted global technology partner, known for innovation,
                      dependability, and ethical digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="container mx-auto mt-20">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-users text-xl"></i>
                  </div>
                  <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Who We Are
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Founded by a team of passionate technologists, strategists, and innovators, <span className="font-semibold">Ahakyr</span> is built on a vision to redefine how businesses use technology to solve real-world problems. With a USA-focused delivery model and development centers in India, we combine <span className="font-semibold">global expertise with local responsiveness.</span>
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                    We collaborate with startups, SMBs, and enterprises to create powerful digital ecosystems—from intelligent automation to robust enterprise platforms.

                  </p>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                      alt="Team collaboration"
                      src={banner2}
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-lightBlue-500 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Global Expertise, Local Touch
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Combining the best of both worlds with our hybrid delivery model.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Stand For Section */}
            <div className="text-center mb-12 mt-12">
              <h3 className="text-4xl font-semibold text-blueGray-700 mb-4">What We Stand For</h3>
              <p className="text-lg text-blueGray-500 max-w-3xl mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </div>

            {/* Values Grid */}
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-64 mb-6 shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto text-center">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-400">
                      <i className="fas fa-users"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-3">Human-Centric Design</h6>
                    <p className="text-blueGray-500 text-sm leading-relaxed">
                      Technology should work for people. We prioritize user experience, accessibility, and simplicity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-64 mb-6 shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto text-center">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-3">Innovation & Excellence</h6>
                    <p className="text-blueGray-500 text-sm leading-relaxed">
                      We embrace new technologies like AI, machine learning, and blockchain to drive real change—not just trends.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-64 mb-6 shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto text-center">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-3">Transparency & Trust</h6>
                    <p className="text-blueGray-500 text-sm leading-relaxed">
                      We believe in open communication, fair practices, and long-term relationships with our clients and partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-64 mb-6 shadow-lg rounded-lg">
                  <div className="px-6 py-8 flex-auto text-center">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-tachometer-alt"></i>
                    </div>
                    <h6 className="text-xl font-semibold mb-3">Speed & Quality</h6>
                    <p className="text-blueGray-500 text-sm leading-relaxed">
                      Whether it's product development or customer support, our agile teams deliver on time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* What We Do Best */}
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="What we do best"
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://www.shutterstock.com/image-photo/consulting-between-bookkeepers-business-lawyers-600nw-2269378583.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-cogs text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">What We Do Best</h3>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-mobile-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">Custom Software & App Development</h4>
                          <p className="text-blueGray-500">Web, mobile, and enterprise-grade platforms using modern stacks.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-brain"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">AI/ML & Data Engineering</h4>
                          <p className="text-blueGray-500">Automate tasks, personalize services, and extract insights with smart technologies.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-database"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">ERP, CRM & Workflow Automation</h4>
                          <p className="text-blueGray-500">Implementation, integration, and support across systems like Zoho, Salesforce, Odoo, and Dynamics.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-cloud"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">IT Infrastructure & DevOps</h4>
                          <p className="text-blueGray-500">Scalable architecture, CI/CD pipelines, cloud migration, and testing solutions.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-headset"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">Call Center & Support Services</h4>
                          <p className="text-blueGray-500">Inbound/outbound, email/chat support, virtual staffing, and lead generation—all managed under US quality standards.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-start">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-chart-line"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">Digital Marketing & Analytics</h4>
                          <p className="text-blueGray-500">SEO, performance marketing, social media, and data-driven growth solutions.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence & Industries */}
        <div className="container mx-auto px-4 pb-32 pt-1 md:pt-12 ">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-globe text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold">Our Global Presence</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  While headquartered in the United States, Ahakyr operates with offshore
                  development centers in India and client presence across North America,
                  Europe, and the Middle East.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This hybrid model allows us to offer cost-effective, high-quality,
                  and scalable delivery to our global clients.
                </p>

              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Global presence"
                className="max-w-full rounded-lg shadow-xl"
                // style={{
                //   transform:
                //     "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                // }}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              />
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  icon: "fa-heartbeat",
                  color: "bg-red-500",
                  title: "Healthcare & Life Sciences",
                },
                {
                  icon: "fa-shopping-cart",
                  color: "bg-emerald-500",
                  title: "Retail & E-Commerce",
                },
                {
                  icon: "fa-shipping-fast",
                  color: "bg-blue-500",
                  title: "Logistics & Transportation",
                },
                {
                  icon: "fa-cogs",
                  color: "bg-purple-500",
                  title: "Manufacturing",
                },
                {
                  icon: "fa-chart-line",
                  color: "bg-green-600",
                  title: "Finance & Insurance",
                },
                {
                  icon: "fa-building",
                  color: "bg-orange-500",
                  title: "Construction & Real Estate",
                },
                {
                  icon: "fa-graduation-cap",
                  color: "bg-indigo-500",
                  title: "Education & E-Learning",
                },
                {
                  icon: "fa-coffee",
                  color: "bg-teal-500",
                  title: "Hospitality & Tourism",
                },
              ].map((industry, index) => (
                <div key={index} className="flex justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl group">
                    <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${industry.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry.title}</h3>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>


        {/* Additional Services */}
        {/* <section className="pb-20 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Complete Service Portfolio</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  From technical solutions to business support services, we've got you covered.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Call Center & Support Services</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Inbound/outbound, email/chat support, virtual staffing, and lead generation—all managed under US quality standards.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Digital Marketing & Analytics</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    SEO, performance marketing, social media, and data-driven growth solutions.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Security & Compliance</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Built responsibly with data security and future-proof architecture at the core.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Partnership Approach</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    We don't just deliver code—we deliver clarity, outcomes, and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* Call to Action */}
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-32">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Let's Build the Future, Together
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  If you're looking for a technology partner who listens, innovates, and delivers—Ahakyr is here to empower your next move. Let's build smarter, faster, and more meaningful digital experiences—together.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-lightBlue-400 mr-2"></i>
                    <span className="text-white">hello@ahakyr.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-lightBlue-400 mr-2"></i>
                    <span className="text-white">Austin, Texas, USA</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-14">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                  >
                    <i className="fas fa-envelope mr-3"></i>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        {/* <section className="relative block py-24 lg:pt-0 pt-12 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Ready to Get Started?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24 hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 hover:bg-lightBlue-400 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
