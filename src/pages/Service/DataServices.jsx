import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function DataServices() {
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
                                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
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
                                        Empower Your Business with Ahakyr's Data Excellence
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Data is the new core of business intelligence—and at Ahakyr, we transform it into your competitive advantage. Our comprehensive Data Services blend strategy, engineering, analytics, and automation to convert raw information into actionable insights.
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

                {/* What Are Data Services Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        {/* <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-database text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Transform Data Into Strategic Advantage
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Our Data Services combine cutting-edge technology with strategic expertise to unlock the full potential of your data assets.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    From data strategy to AI-powered insights, we provide end-to-end solutions that drive informed decision-making and business growth.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Data Services Excellence"
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
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
                                            Data-Driven Intelligence
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Convert raw information into actionable insights with our comprehensive analytics and AI-powered solutions.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div> */}

                        {/* Our Data Services Grid */}
                        <section className="mt-20">
                            <div className="text-center mb-1 py-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-1">Our Data Services</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-line text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data Strategy & Consulting</h3>
                                        <p className="text-blue-100">
                                            We start with a clear roadmap. Ahakyr helps define your data goals, establish a governance framework, and implement quality controls that align with business strategy and compliance requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-exchange-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data Integration & Migration</h3>
                                        <p className="text-emerald-100">
                                            Unify data from diverse systems and platforms with our seamless migration and ETL services—facilitating a 360° view of your enterprise data while minimizing disruption.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-bar text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Analytics & Business Intelligence</h3>
                                        <p className="text-purple-100">
                                            From predictive modeling to dashboard reporting, we turn your data into strategic insights. Drive decisions with real-time visualizations and scalable analytics pipelines.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cogs text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
                                        <p className="text-orange-100">
                                            Design, implement, and maintain pipelines that power your data workflows. Build robust data lakes, warehouses, and automated delivery mechanisms with cloud-first architecture.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data Security & Privacy</h3>
                                        <p className="text-red-100">
                                            Protect your critical data assets with encryption, masking, auditing, and privacy compliance in line with GDPR, CCPA, HIPAA, and other standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-brain text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">AI & Machine Learning Solutions</h3>
                                        <p className="text-teal-100">
                                            Unlock value with ML-driven automation, predictive modeling, and NLP-based text and voice analytics tailored to your operational and strategic needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Supporting Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Supporting Services</h2>
                            </div>

                            {/* Supporting Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-keyboard text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Entry & Processing</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We deliver accurate and secure data entry, cleansing, and validation services to ensure your datasets are usable and error-free.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-file-alt text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Conversion & Digitization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Convert legacy formats—PDFs, scanned docs, CSVs—to modern accessible formats using OCR and digitization techniques.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-search text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Extraction & Mining</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Extract structured data from documents, emails, websites, or databases. Leverage data mining and advanced modeling to uncover hidden trends and predictive signals.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tags text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Annotation (AI Training Data)</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We provide high-quality image, audio, video, and text annotation for training AI and ML systems across computer vision and NLP applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Ahakyr Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Ahakyr's Data Services?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    title: "End-to-end solutions",
                                    description: "From strategy to deployment, one partner drives all elements.",
                                    icon: "fa-arrows-alt",
                                    color: "bg-blue-500"
                                },
                                {
                                    title: "Customized, industry-aligned delivery",
                                    description: "Tailored to sectors like healthcare, finance, retail, logistics, and more.",
                                    icon: "fa-industry",
                                    color: "bg-emerald-500"
                                },
                                {
                                    title: "Cutting-edge technology",
                                    description: "Latest cloud platforms, AI/ML tools, and BI frameworks.",
                                    icon: "fa-rocket",
                                    color: "bg-purple-500"
                                },
                                {
                                    title: "Quality & compliance",
                                    description: "Rigorous frameworks ensure data integrity, governance, and adherence to privacy regulations.",
                                    icon: "fa-check-circle",
                                    color: "bg-orange-500"
                                },
                                {
                                    title: "Scalable & flexible models",
                                    description: "Suitable for startups, SMBs, and enterprise-scale needs.",
                                    icon: "fa-expand-arrows-alt",
                                    color: "bg-red-500"
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="relative bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    {/* Icon */}
                                    <div className="text-center mb-6">
                                        <div className={`${benefit.color} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                                            <i className={`fas ${benefit.icon} text-2xl`} style={{ color: benefit.color.replace('bg-', '#') }}></i>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Data Service Approach Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Data Service Approach</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Strategy Planning",
                                    description: "Clarify your objectives and set up governance and expectations.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Integration & Engineering",
                                    description: "Consolidate and migrate data into unified, cloud‑based environments.",
                                    icon: "fa-cogs",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Analytics & Modeling",
                                    description: "Apply machine learning, BI dashboards, and forecasting to derive meaningful insights.",
                                    icon: "fa-chart-line",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Secure Delivery & Compliance",
                                    description: "Embed data controls, monitoring, and privacy safeguards in every process.",
                                    icon: "fa-shield-alt",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Ongoing Optimization",
                                    description: "Track performance—adapt models, dashboards, and governance for long-term value.",
                                    icon: "fa-sync-alt",
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

                {/* Ideal Use Cases & Industries Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Ideal Use Cases & Industries</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-shopping-cart", title: "Retail & eCommerce", description: "Customer segmentation, trend forecasting, campaign optimization.", color: "bg-blue-500" },
                                { icon: "fa-university", title: "Finance & Banking", description: "Risk modeling, fraud detection, compliance dashboards.", color: "bg-green-500" },
                                { icon: "fa-heartbeat", title: "Healthcare", description: "Patient analytics, predictive diagnostics, operational modeling.", color: "bg-purple-500" },
                                { icon: "fa-truck", title: "Transportation & Logistics", description: "Route optimization, demand forecasting, inventory analytics.", color: "bg-orange-500" }
                            ].map((industry, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-white rounded-2xl p-6 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center mb-2">
                                            <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${industry.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">{industry.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow flex items-center justify-center">{industry.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-lg text-gray-600 font-semibold">
                                Manufacturing, Education, Social Media, and more
                            </p>
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
                                    Ready to Unlock Your Data's Potential?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Ahakyr is your trusted U.S.-based partner for data-driven transformation. Whether you're looking to build a data roadmap, launch predictive analytics, or integrate AI into operations, we're here to help.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Schedule a free consultation today to see how our data services can power your strategic growth.
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
