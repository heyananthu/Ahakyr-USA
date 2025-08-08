import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Erp() {
    return (
        <div className="erp-page">
            <style dangerouslySetInnerHTML={{
                __html: `
                    .erp-page footer .absolute.pointer-events-none {
                        display: none !important;
                    }
                `
            }} />
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')",
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
                                        Unify Your Business with Intelligent ERP Solutions from Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Manage every part of your organization—from finance and HR to operations and supply chain—with a unified ERP system. At Ahakyr, we design, implement, and support ERP deployments that power smarter decision-making, operational efficiency, and scalable growth.
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

                {/* What Is ERP Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-sitemap text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What Is ERP?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Enterprise Resource Planning (ERP) is a comprehensive software platform that integrates core business functions into one centralized system—eliminating data silos and enabling real-time collaboration across departments.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Connect finance, HR, supply chain, project management, CRM, and more.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="ERP Solutions Excellence"
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
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
                                            Unified Business Operations
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Integrate all your business processes into one intelligent system for seamless operations and data-driven insights.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Our ERP Capabilities Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our ERP Capabilities</h2>
                            </div>

                            {/* Capabilities Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Capability 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-route text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Strategic ERP Consulting & Roadmapping</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We analyze your workflows, data architecture, and scalability needs. You get a clear roadmap aligned to your business goals, compliance needs, and industry requirements.
                                    </p>
                                </div>

                                {/* Capability 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-puzzle-piece text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Module Selection & Customization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Choose the ERP modules that matter most—finance, inventory, HR, procurement, CRM, manufacturing, projects, and vertical-specific components. We tailor setups that fit your use cases.
                                    </p>
                                </div>

                                {/* Capability 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cloud text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Deployment: Cloud, On‑Premise or Hybrid</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Work in the environment that fits your business: cloud for agility, on‑premise for control, or hybrid for a balance of both. Successful ERP adoption begins with a deployment suited to your infrastructure and data governance.
                                    </p>
                                </div>

                                {/* Capability 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-plug text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Seamless Integration</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Connect ERP with your existing platforms—CRM, BI tools, e-commerce, payroll, and more—for a cohesive, real-time enterprise ecosystem.
                                    </p>
                                </div>

                                {/* Capability 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-database text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Migration & Quality Assurance</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We extract, cleanse, and migrate your legacy data into your new ERP environment—ensuring data accuracy, integrity, and consistent history.
                                    </p>
                                </div>

                                {/* Capability 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-graduation-cap text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Training & User Adoption</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our expert-led training and change-management support ensure your team adopts the new ERP system confidently—maximizing ROI from day one.
                                    </p>
                                </div>

                                {/* Capability 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-headset text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Ongoing Support & System Evolution</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        From patching and updates to custom enhancements and performance tuning, we provide continuous ERP support as your business evolves.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Why Ahakyr ERP Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Ahakyr ERP?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-link text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Integrated Business Operations</h3>
                                        <p className="text-emerald-100">
                                            One unified system that spans finance, HR, inventory, sales, supply chain, and analytics—eliminating inefficiencies and improving transparency.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalable & Future-Ready</h3>
                                        <p className="text-blue-100">
                                            Modular ERP systems grow with your organization—adding new capabilities as your business scales.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-industry text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Industry-Centric Expertise</h3>
                                        <p className="text-purple-100">
                                            Tailored configurations for sectors such as healthcare, manufacturing, retail, construction, and services.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-bar text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data-Driven Decisions</h3>
                                        <p className="text-orange-100">
                                            Real-time BI dashboards, financial insights, and workflow metrics help leaders act fast and with confidence.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-dollar-sign text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Cost and Risk Optimization</h3>
                                        <p className="text-teal-100">
                                            Fewer redundancies, better process governance, and improved financial tracking mean higher profitability and reduced error-prone work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        
                    </div>
                </section>

                {/* Our ERP Implementation Approach Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our ERP Implementation Approach</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Analysis",
                                    description: "Review your existing systems, user workflows, and business requirements.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Solution Design & Roadmapping",
                                    description: "Choose modules, plan deployment, data strategy, compliance needs, and project timelines.",
                                    icon: "fa-drafting-compass",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Configuration & Migration",
                                    description: "Set up your ERP solution, integrate third-party tools, and securely migrate your data.",
                                    icon: "fa-cogs",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "User Training & Rollout",
                                    description: "Hands-on training, user support, and phased rollout ensure smooth adoption.",
                                    icon: "fa-rocket",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Monitoring & Optimization",
                                    description: "Track performance, user feedback, and continuously refine the system for better efficiency.",
                                    icon: "fa-chart-line",
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

                {/* Common Use Cases Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Common Use Cases</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: "fa-industry", title: "Manufacturing & Distribution", description: "Streamline production, inventory tracking, order fulfillment, and supply chain coordination", color: "bg-blue-500" },
                                { icon: "fa-heartbeat", title: "Healthcare & Life Sciences", description: "Integrated billing, patient management, purchasing, and compliance tracking", color: "bg-green-500" },
                                { icon: "fa-shopping-cart", title: "Retail & eCommerce", description: "Manage sales orders, inventory across channels, supplier coordination, and financial transactions", color: "bg-purple-500" },
                                { icon: "fa-briefcase", title: "Professional Services & HR", description: "Time tracking, payroll management, staffing, project billing, and HR workflows", color: "bg-orange-500" },
                                { icon: "fa-hard-hat", title: "Construction & SCM", description: "Procurement, contract management, resource planning, task management, and real-time financials", color: "bg-red-500" }
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

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-blueGray-800 to-blueGray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Ready to Transform Your Operations?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr to build an ERP solution that unifies your systems and empowers smarter business. Whether migrating from legacy systems or scaling with modular ERP additions, we're your trusted partner every step of the way.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us for a free consultation and ERP roadmap session today—let's build a smarter, more efficient future for your enterprise.
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
        </div>
    );
}
