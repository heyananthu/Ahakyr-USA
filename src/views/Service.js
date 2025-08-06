import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Service() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full  bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://www.31west.net/wp-content/uploads/2022/09/what-is-the-future-of-IT-managed-services.jpg')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl">
                                        Comprehensive IT Services for Modern Businesses
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's fast-paced digital world, reliable and forward-looking IT services are essential to staying competitive.
                                        At Ahakyr, we deliver end-to-end IT solutions designed to optimize operations, strengthen security, and prepare your business for future growth.
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

                {/* Why IT Services Matter Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why IT Services Matter for Your Business
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Growing businesses often face challenges like data overload, cybersecurity concerns, scaling infrastructure, and maintaining uptime.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    With Ahakyr as your strategic technology partner, you access customized IT strategies and managed infrastructure that support your core business goals—allowing you to focus on what really matters.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="IT Services Excellence"
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
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
                                            Strategic IT Partnership
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Transform your technology challenges into competitive advantages with our comprehensive IT solutions and expert guidance.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Key Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Key Benefits When You Choose Ahakyr</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-line text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Operational Efficiency</h3>
                                        <p className="text-emerald-100">
                                            Streamline IT workflows with proactive monitoring, automation, and best practices.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Enhanced Security</h3>
                                        <p className="text-blue-100">
                                            High-grade defense strategies and compliance adherence protect your critical data.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalability & Flexibility</h3>
                                        <p className="text-purple-100">
                                            Cloud-first infrastructure scales as your business grows—without compromise.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-lightbulb text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                                        <p className="text-orange-100">
                                            Strategic IT consulting that aligns technology with business outcomes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Core IT Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className=" text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Core IT Services</h2>
                                <p className="text-sm md:text-lg text-blueGray-600 max-w-3xl mx-auto">
                                    Comprehensive technology solutions designed to transform your business operations and drive growth
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cogs text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Managed IT Services</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We manage your full IT environment—monitoring, patches, maintenance, support—to ensure seamless operations and minimal downtime.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cloud text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Cloud Solutions & Infrastructure </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        From private to public and hybrid cloud architectures, Ahakyr ensures your infrastructure is flexible, scalable, and secure. Our services include cloud migration, resource optimization, and SaaS/IaaS management.                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lock text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Cybersecurity & Data Protection</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Safeguard your business with robust cybersecurity solutions: intrusion detection, encryption, vulnerability audits, incident response, and compliance to standards like GDPR or HIPAA.                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-server text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Network & Server Administration</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our team designs and maintains resilient network and server ecosystems—from firewalls and switches to routing, virtualization, backups, disaster recovery planning, and uptime consistency.                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-headset text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">IT Consulting & Strategic Planning</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gain clarity and direction with IT consulting tailored to your needs. We conduct audits, perform architecture reviews, and craft roadmaps that align your technology ecosystem with long-term objectives.                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lightbulb text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Technical Support & Helpdesk</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Prompt, USA-based technical support with live helpdesk, ticketing, troubleshooting, and user training—from hardware issues to cloud access—ensuring uninterrupted productivity.                                    </p>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500 md:col-span-2 lg:col-span-1">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-clipboard-check text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Regulatory Compliance & Risk Management</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We help protect your business with compliance audits, risk assessments, and controls aligned with industry standards (e.g., HIPAA, ISO, PCI). Ensuring governance and minimizing risk is our expertise.                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">How We Deliver IT Excellence</h2>
                            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our proven methodology ensures successful IT transformations with minimal disruption and maximum results
                            </p> */}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Assessment",
                                    description: "We begin with a deep-dive audit of your systems—servers, networking, security, workflows—to identify challenges and prioritize improvements.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Strategic Planning & Roadmapping",
                                    description: "We’ll define objectives, propose solutions, deliver SLAs, and outline milestones for infrastructure upgrades, migration, or support models.",
                                    icon: "fa-map",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Implementation & Migration",
                                    description: "Whether rolling out cloud environments, deploying backup solutions, or transforming data centers—we execute with minimal disruption and robust documentation.",
                                    icon: "fa-rocket",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Ongoing Management & Support",
                                    description: " With continuous monitoring, scheduled maintenance, patching, and 24/7 helpdesk support, we keep your systems secure and reliable.",
                                    icon: "fa-headset",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Review & Optimization",
                                    description: " Quarterly and annual reporting, performance reviews, and iterative improvements ensure your IT remains optimized and cost-effective.",
                                    icon: "fa-chart-bar",
                                    color: "bg-red-500"
                                }
                            ].map((process, index) => (
                                <div key={index} className="relative bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-8">
                                        <div className={`${process.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg`}>
                                            {process.step}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="text-center mb-6 mt-4">
                                        <div className={`${process.color} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                                            <i className={`fas ${process.icon} text-2xl`} style={{ color: process.color.replace('bg-', '#') }}></i>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{process.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                                    </div>

                                    {/* Connector Line */}
                                    {index < 4 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industry-Aligned Solutions</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Tailored IT services across sectors with specific compliance, data handling, and infrastructure needs
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-16">
                            {[
                                { icon: "fa-university", title: "Finance", color: "bg-green-500" },
                                { icon: "fa-heartbeat", title: "Healthcare", color: "bg-red-500" },
                                { icon: "fa-industry", title: "Manufacturing", color: "bg-blue-500" },
                                { icon: "fa-shopping-cart", title: "Retail", color: "bg-purple-500" },
                                { icon: "fa-shipping-fast", title: "Logistics", color: "bg-orange-500" },
                                { icon: "fa-graduation-cap", title: "Education", color: "bg-indigo-500" },
                                { icon: "fa-hotel", title: "Hospitality", color: "bg-pink-500" },
                                { icon: "fa-building", title: "Real Estate", color: "bg-teal-500" }
                            ].map((industry, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gray-100 rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className={`${industry.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                            <i className={`fas ${industry.icon} text-lg`}></i>
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">{industry.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="pb-20 relative block bg-gradient-to-br from-blueGray-800 to-blueGray-900">
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

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Let Ahakyr Handle Your IT—So You Can Focus on Growth
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr and turn your IT from a liability into a competitive advantage.
                                    Whether you're a growing SMB or an enterprise-level organization in the USA,
                                    our tailored IT services are designed to support your ambitions.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a complimentary IT audit and strategic planning session to see how we can elevate your infrastructure and security.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Contact Us
                                    </Link>
                                    {/* <Link
                                        to="/contact"
                                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blueGray-800 font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105"
                                    >
                                        <i className="fas fa-calendar-alt mr-3"></i>
                                        Schedule Consultation
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                {/* <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to work with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Complete this form and we will get back to you in 24
                                            hours.
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
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-blueGray-800 hover:bg-blue-400 text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
