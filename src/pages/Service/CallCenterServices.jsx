import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function CallCenterServices() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')",
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
                                        Deliver Exceptional Customer Interactions with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's fast-paced market, reliable and responsive customer communication is non-negotiable. At Ahakyr, our comprehensive Call Center Services ensure your brand remains accessible, trusted, and efficient—no matter the channel.
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

                {/* Our Call Center Solutions Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-headset text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Our Call Center Solutions
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    From inbound support to live chat and email management, we provide comprehensive customer service solutions that scale with your business needs.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Our multichannel approach ensures consistent, professional customer experiences across all touchpoints.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Call Center Excellence"
                                        src="https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
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
                                            24/7 Customer Support
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Always-on support across phone, chat, and email channels to meet global customer expectations and drive satisfaction.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Call Center Services Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Call Center Solutions</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-phone text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Inbound Call Center Services</h3>
                                        <p className="text-blue-100">
                                            Ensure critical touchpoints are handled by skilled professionals who resolve customer queries, manage orders, schedule appointments, and deliver technical support with efficiency and empathy. Benefits include 24/7 availability, cost-effective operations, quick issue resolution, and enhanced customer loyalty.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-comments text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Live Chat Support</h3>
                                        <p className="text-emerald-100">
                                            Engage your website visitors in real time with fast, personalized responses that drive satisfaction and conversion. Our live chat integrates seamlessly with CRM systems and AI tools for scalable, effective support.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-envelope text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Email Support Services</h3>
                                        <p className="text-purple-100">
                                            Upgrade your email-based support with structured workflows, ticketing systems, and round-the-clock handling. With consistent, documented responses integrated into your CRM, stay in control of every customer interaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Partner with Ahakyr Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Partner with Ahakyr?</h2>
                            </div>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Benefit 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-clock text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Always-On Support</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        From phone to chat to email, we offer 24/7 responsiveness to meet global expectations.
                                    </p>
                                </div>

                                {/* Benefit 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-handshake text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Unified Customer Experience</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Consistent tone and quality across all channels to reinforce your brand credibility.
                                    </p>
                                </div>

                                {/* Benefit 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-dollar-sign text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Cost Savings with Scale</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Outsource support operations while retaining excellent standards and flexibility.
                                    </p>
                                </div>

                                {/* Benefit 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-sitemap text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Omnichannel Integration</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Manage customer interactions across voice, chat, and email within a unified system.
                                    </p>
                                </div>

                                {/* Benefit 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-shield-alt text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Compliance and Trust</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Secure handling of sensitive customer data with audit-ready processes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Work Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">How We Work</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Needs Assessment & Strategy",
                                    description: "We begin with understanding your industry, customer workflows, volume expectations, and communication preferences.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Channel Configuration & Staffing",
                                    description: "Select from phone, chat, email, or blended services supported by skilled, trained agents.",
                                    icon: "fa-cogs",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Technology & CRM Integration",
                                    description: "Implement systems featuring IVR routing, ticketing, live chat widgets, scripts, and dashboards—all fully integrated.",
                                    icon: "fa-laptop-code",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Training & Brand Alignment",
                                    description: "Agents become an extension of your team—adopting your brand voice, processes, and quality standards.",
                                    icon: "fa-graduation-cap",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Launch & Continuous Optimization",
                                    description: "After go-live, we monitor performance, gather insights, and adjust workflows for maximum customer delight and efficiency.",
                                    icon: "fa-rocket",
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
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry-Aligned Use Cases Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industry-Aligned Use Cases</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-shopping-cart", title: "E-commerce & Retail", description: "Order support, returns processing, and real-time shopper engagement.", color: "bg-blue-500" },
                                { icon: "fa-heartbeat", title: "Healthcare & Insurance", description: "Appointment coordination and claim support with empathetic communication.", color: "bg-green-500" },
                                { icon: "fa-chart-line", title: "FinTech & SaaS", description: "Onboarding assistance, billing queries, technical support.", color: "bg-purple-500" },
                                { icon: "fa-plane", title: "Hospitality & Travel", description: "Reservation support, changes, pre-trip assistance, and more.", color: "bg-orange-500" }
                            ].map((useCase, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-gray-100 rounded-2xl p-6 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center mb-2">
                                            <div className={`${useCase.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${useCase.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 ">{useCase.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow flex items-center justify-center">{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Ahakyr Advantage Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">The Ahakyr Advantage at a Glance</h2>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Feature</th>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Multichannel Expertise</td>
                                                <td className="px-6 py-4 text-gray-600">Voice, chat, and email—handled seamlessly under one strategy.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Scalable Model</td>
                                                <td className="px-6 py-4 text-gray-600">Ramp resources up or down to meet demand without delays.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Cost-Optimized</td>
                                                <td className="px-6 py-4 text-gray-600">Avoid full-time staffing overhead while maintaining professional quality.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Default Proficiency</td>
                                                <td className="px-6 py-4 text-gray-600">Agents ready to deliver fluently in U.S. English with cultural alignment.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
                                    Ready to Elevate Your Support?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    With Ahakyr, your customers get more than help—they get connection. Whether you're scaling fast, launching new services, or need dependable support infrastructure, our Call Center Services bring clarity, responsiveness, and care to every interaction.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Get in touch for a free consultation and let's explore how we can transform your customer experience.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
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
            </main>
            <Footer />
        </>
    );
}
