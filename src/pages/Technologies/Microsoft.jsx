import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from '../../assets/banners/microsoft-banner.avif'

function Microsoft() {
    return (
        <div className="microsoft-page">
            <Navbar transparent />

            <main>
                {/* Hero */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>


                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-white bg-opacity-10 flex items-center justify-center">
                                            <i className="fab fa-microsoft text-white text-3xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        Powering Businesses with Scalable, Secure, and Integrated Microsoft Solutions
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        At Ahakyr, we harness the power of Microsoft technologies to build robust digital ecosystems that drive productivity, collaboration, and innovation. As a trusted Microsoft partner, we offer tailored solutions that help businesses across the USA accelerate digital transformation while ensuring security, scalability, and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                {/* Services */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">Our Microsoft Technology Services</h2>
                                {/* <p className="text-blueGray-600 max-w-3xl mx-auto">
                                    End-to-end consulting, implementation, and managed services across the Microsoft stack.
                                </p> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                            {/* Microsoft 365 */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-users text-blue-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Microsoft 365 Integration</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Boost collaboration, communication, and productivity with Microsoft 365. We help organizations implement and optimize Microsoft Teams, SharePoint, Outlook, and other core apps to enable seamless remote and hybrid work.
                                </p>
                            </div>

                            {/* Azure Cloud */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-cloud text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Azure Cloud Services</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Leverage the full potential of Microsoft Azure to migrate, manage, and scale your infrastructure and applications. From cloud strategy to implementation, we ensure your business gets the agility and reliability it needs.
                                </p>
                            </div>

                            {/* Dynamics 365 */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-emerald-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-project-diagram text-emerald-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Dynamics 365 CRM & ERP</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Empower your sales, service, and operations teams with Dynamics 365. We offer end-to-end support for deployment, customization, and integration of CRM and ERP systems tailored to your business needs.
                                </p>
                            </div>

                            {/* Power Platform */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-purple-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-bolt text-purple-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Power Platform (Power BI, Power Apps, Power Automate)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Turn data into actionable insights with Power BI, build custom apps with Power Apps, and streamline workflows using Power Automate. We help you adopt low-code solutions that unlock innovation and reduce time to market.
                                </p>
                            </div>

                            {/* Windows Server & AD */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-orange-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-server text-orange-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Windows Server & Active Directory</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    We support businesses in managing their server environments using Microsoft’s core infrastructure technologies. From Active Directory to Windows Server management, we ensure performance, access control, and security are always top-notch.
                                </p>
                            </div>

                            {/* Visual placeholder for balance on large screens */}
                            {/* <div className="hidden lg:flex items-center justify-center rounded-2xl p-0">
                                <div className="rounded-2xl w-full h-56 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-inner flex items-center justify-center">
                                    <span className="text-blueGray-400">Ahakyr • Microsoft Partner</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* Why Choose Ahakyr */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Why Choose Ahakyr for Microsoft Technology Solutions?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {[
                                "Certified Microsoft Experts with hands-on experience across industries",
                                "Customizable solutions aligned with your business objectives",
                                "Seamless integration with existing enterprise systems",
                                "24/7 support and managed services for uninterrupted operations",
                                "Security-first approach in every solution",
                            ].map((point, idx) => (
                                <div key={idx} className="flex items-start bg-blueGray-50 rounded-xl p-5 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100">
                                            <i className="fas fa-check text-emerald-600"></i>
                                        </span>
                                    </div>
                                    <p className="text-blueGray-700">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gradient-to-br from-blueGray-800 to-blueGray-900 relative">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Transform your digital journey with Microsoft technologies and Ahakyr’s expertise.
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-2 mb-10 text-blueGray-200">
                                    Let’s build smarter, faster, and better—together. Get in touch to explore how we can bring the best of Microsoft to your business.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link to="/contact-us" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl">
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Microsoft;