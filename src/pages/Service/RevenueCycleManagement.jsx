import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/revenue-cycle-management-banner.avif'
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function RevenueCycleManagement() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center"
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
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl">
                                        Streamline Your Financial Flow with Ahakyr's RCM Expertise
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Healthcare revenue cycles are complex—spanning everything from patient intake to final reimbursement. At Ahakyr, our RCM services are designed to optimize every step, improving cash flow, reducing errors, and enhancing patient satisfaction.
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

                {/* What Is Revenue Cycle Management Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-chart-line text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What is Revenue Cycle Management?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Revenue Cycle Management (RCM) refers to the full process of tracking and managing revenue from the patient's initial encounter through to final payment.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    It includes administrative and clinical operations that ensure proper billing, coding, and collection. Efficient RCM mitigates revenue loss, ensures compliance, and supports financial stability.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Revenue Cycle Management Excellence"
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
                                            Optimized Financial Flow
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Streamline your revenue cycle from patient intake to final payment with our comprehensive RCM solutions.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* The Ahakyr Advantage Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">The Ahakyr Advantage</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cogs text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">End-to-End RCM Oversight</h3>
                                        <p className="text-emerald-100">
                                            From patient intake to payment reconciliation—comprehensive support under one roof.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-line text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Revenue Optimization</h3>
                                        <p className="text-blue-100">
                                            Cleaner claims, faster reimbursements, and fewer denials drive improved cash flow and ROI.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Regulatory Compliance</h3>
                                        <p className="text-purple-100">
                                            Safeguarding patient data and adhering to HIPAA and industry standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-heart text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Patient-Centered Approach</h3>
                                        <p className="text-orange-100">
                                            Clear communication, empathetic guidance, and transparent billing practices.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalable & Adaptive</h3>
                                        <p className="text-teal-100">
                                            Flexible staffing and processes tailored to your clinic, hospital, or specialty practice needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Comprehensive RCM Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Comprehensive RCM Services</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-user-check text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Patient Registration & Eligibility</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Capture accurate patient demographics and insurance details upfront, with eligibility checks and pre-authorizations to minimize claim denials.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-code text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Medical Coding & Claim Submission</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Accurate coding (ICD, CPT) ensures clean claims. We perform quality checks and submit electronically for faster reimbursement.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-credit-card text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Payment Posting & Reconciliation</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our team posts both electronic and manual payments, reconciles EOBs and ERAs, and tracks discrepancies to maintain financial integrity.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-phone text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Accounts Receivable Follow-Up</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Proactive follow-up on unpaid invoices, aging claims, and denied reimbursements—ensuring timely resolution and optimized cash flow.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Denial Management & Appeals</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Analyze causes of denials, pursue appeals when needed, and adjust workflows to reduce future rejections.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-bar text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Reporting & Analytics</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Gain actionable insights through customized performance reports—covering claim cycle times, denial rates, A/R days, and revenue trends.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our RCM Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our RCM Process in Action</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Onboarding & Assessment",
                                    description: "We audit your current operations—including registration workflows, billing accuracy, and A/R performance.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Process Design & Implementation",
                                    description: "Create streamlined pipelines for coding, submission, posting, and follow-up—integrated with your systems.",
                                    icon: "fa-cogs",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Execution & Monitoring",
                                    description: "Execute RCM workflows with vigilant quality control and benchmark tracking.",
                                    icon: "fa-play-circle",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Denial Resolution & Appeals",
                                    description: "Systematically identify and overturn clearable denials, while learning from patterns to improve processes.",
                                    icon: "fa-gavel",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Performance Review & Optimization",
                                    description: "Regular reporting plus process tweaks ensure sustained efficiency and revenue gains.",
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

                {/* Industries & Use Cases Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries & Use Cases</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-hospital", title: "Hospitals & Medical Centers", description: "Manage high claim volume with precision and scale", color: "bg-blue-500" },
                                { icon: "fa-user-md", title: "Physician Practices & Clinics", description: "Streamline revenue cycle tasks while minimizing admin burden", color: "bg-green-500" },
                                { icon: "fa-microscope", title: "Specialty Providers", description: "Navigate complex coding and high-value billing with accuracy for Surgery, Labs, Imaging", color: "bg-purple-500" },
                                { icon: "fa-building", title: "Ambulatory & Multi-Site Practices", description: "Centralized RCM workflows with unified reporting and compliance framework", color: "bg-orange-500" }
                            ].map((industry, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-gray-100 rounded-2xl p-6 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center mb-2">
                                            <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${industry.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 ">{industry.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow flex items-center justify-center">{industry.description}</p>
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
                                    Ready to Optimize Your Revenue Flow?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr to transform your RCM from a liability into a strategic advantage. Schedule a free consultation today to uncover how smarter processes, efficient workflows, and empathetic billing practices can improve your bottom line and patient relationships.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a free consultation and see how we can help optimize your revenue cycle effectively.
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
