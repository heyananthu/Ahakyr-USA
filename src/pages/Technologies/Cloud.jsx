import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

import banner from '../../assets/banners/cloud-banner.avif'
import banner2 from '../../assets/banners/cloud-banner2.jpg'
import banner3 from '../../assets/banners/cloud-banner3.jpg'

export default function Cloud() {
    return (
        <div className="cloud-page">
            {/* Page-specific style tweaks */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            .cloud-page footer .absolute.pointer-events-none { display: none !important; }
          `,
                }}
            />

            <Navbar transparent />

            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>

                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl">
                                        Power Your Growth with Ahakyr’s Cloud Expertise
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In a world where agility, data security, and scalability are non-negotiables, Ahakyr equips your business with robust cloud technologies. From infrastructure modernization to seamless application delivery, our cloud solutions support smarter workflows, disaster resilience, and optimized cost structures.
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
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                {/* Overview Section - matches Infra page structure */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-cloud text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">Comprehensive Cloud Solutions</h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Our team specializes in a spectrum of cloud models to suit your specific needs:
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Public, Private, Hybrid, and Multi-Cloud models tailored for security, performance, and flexibility.
                                </p>
                                <Link
                                    to="/contact"
                                    className="font-bold text-blueGray-700 mt-2 hover:text-blueGray-500 ease-linear transition-all duration-150"
                                >
                                    Talk to Cloud Experts
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img alt="Cloud Infrastructure" src={banner2} className="w-full align-middle rounded-t-lg" />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-95-px -top-94-px"
                                        >
                                            <polygon points="-30,95 583,95 583,65" className="text-lightBlue-500 fill-current"></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">Cloud at Scale</h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Build resilient, scalable systems with automation-first operations and security best practices baked in.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Cloud Models List (bulleted) */}
                        <div className="max-w-5xl mx-auto mt-10">
                            <ul className="list-none space-y-4 text-blueGray-700">
                                <li className="flex">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                        <i className="fas fa-globe"></i>
                                    </span>
                                    <p>
                                        <strong>Public Cloud</strong> — Harness market-leading services like AWS, Microsoft Azure, and Google Cloud for unmatched scalability and global reach.
                                    </p>
                                </li>
                                <li className="flex">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                                        <i className="fas fa-shield-alt"></i>
                                    </span>
                                    <p>
                                        <strong>Private Cloud</strong> — Keep sensitive workloads secure with customized, dedicated cloud environments—ideal for compliance-driven industries.
                                    </p>
                                </li>
                                <li className="flex">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3">
                                        <i className="fas fa-exchange-alt"></i>
                                    </span>
                                    <p>
                                        <strong>Hybrid Cloud</strong> — Bridge on-premises systems with public or private cloud to enjoy the perfect blend of performance and flexibility.
                                    </p>
                                </li>
                                <li className="flex">
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 mr-3">
                                        <i className="fas fa-layer-group"></i>
                                    </span>
                                    <p>
                                        <strong>Multi-Cloud</strong> — Mitigate vendor risk and optimize performance by leveraging multiple cloud platforms simultaneously.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Our Cloud Services - styled like Infra Services Grid */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Cloud Services</h2>
                            <p className="text-lg text-blueGray-600 max-w-3xl mx-auto">
                                Ahakyr helps you adopt the right cloud service model for your goals:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {/* IaaS */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-server text-blue-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">IaaS (Infrastructure as a Service)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    On-demand compute, networking, and storage—without the capital expense of managing hardware.
                                </p>
                            </div>

                            {/* PaaS */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-green-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-cubes text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">PaaS (Platform as a Service)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Simplify app deployment with pre-built environments, freeing your team to focus on innovation.
                                </p>
                            </div>

                            {/* SaaS */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-orange-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-cloud text-orange-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">SaaS (Software as a Service)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Ready-to-use cloud applications with no installation or maintenance hassles.
                                </p>
                            </div>

                            {/* FaaS */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-purple-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-bolt text-purple-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">FaaS / Serverless Computing</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Tools and frameworks to build event-driven applications without managing servers.
                                </p>
                            </div>

                            {/* XaaS */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-infinity text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">XaaS ("Everything as a Service")</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    An expanding ecosystem of cloud offerings: from AIaaS to DaaS—all available on-demand.
                                </p>
                            </div>

                            {/* Visual card to balance grid on large screens */}
                            <div className="hidden lg:flex items-center justify-center rounded-2xl p-0">
                                <img src={banner3} alt="Cloud services" className="rounded-2xl w-full object-cover h-56 shadow" />
                            </div>
                        </div>

                        <section className="py-20">
                            <div className="container mx-auto px-4">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Cloud Matters — Delivered by Ahakyr</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                                    {[
                                        {
                                            title: "Elasticity & Cost Efficiency",
                                            description: "Scale resources dynamically to match demand and only pay for what you use.",
                                            icon: "fa-sliders-h",
                                            colorBg: "bg-blue-500",
                                            textColor: "text-blue-500",
                                        },
                                        {
                                            title: "Enhanced Security & Compliance",
                                            description: "We build with data protection in mind—implementing encryption, access controls, and compliance best practices.",
                                            icon: "fa-shield-alt",
                                            colorBg: "bg-purple-500",
                                            textColor: "text-purple-500",
                                        },
                                        {
                                            title: "Reliable Disaster Recovery",
                                            description: "Cloud-native backup and recovery solutions that ensure business continuity under any circumstances.",
                                            icon: "fa-life-ring",
                                            colorBg: "bg-rose-500",
                                            textColor: "text-rose-500",
                                        },
                                        {
                                            title: "Modern Remote Work Enablement",
                                            description: "Effortlessly access workflows from anywhere, enabling collaboration across distributed teams.",
                                            icon: "fa-users",
                                            colorBg: "bg-teal-500",
                                            textColor: "text-teal-500",
                                        },
                                        {
                                            title: "AI-Ready Infrastructure",
                                            description: "Cloud platforms optimized for AI workloads — supporting scalable compute, storage, and model training needs.",
                                            icon: "fa-brain",
                                            colorBg: "bg-amber-500",
                                            textColor: "text-amber-500",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="relative bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                            {/* Icon */}
                                            <div className="text-center mb-6">
                                                <div className={`${item.colorBg} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                                                    <i className={`fas ${item.icon} text-2xl ${item.textColor}`}></i>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="text-center">
                                                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* How We Guide Your Journey */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-blueGray-800">How Ahakyr Guides Your Cloud Journey</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Cloud Strategy & Assessment</h4>
                                <p className="mt-2 text-blueGray-600">Tailoring the optimal cloud model for your business context—public, private, hybrid, or multi-cloud.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Architecture & Migration</h4>
                                <p className="mt-2 text-blueGray-600">Architecting robust, secure cloud infrastructure, and executing seamless data and application migration.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Automation & CI/CD Enablement</h4>
                                <p className="mt-2 text-blueGray-600">Implementing Infrastructure-as-Code (IaC), DevOps pipelines, and automation to drive agility.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Secured Deployment</h4>
                                <p className="mt-2 text-blueGray-600">Securely configuring networks, instances, identity access, and encryption for protected cloud operations.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Monitoring & Optimization</h4>
                                <p className="mt-2 text-blueGray-600">Continuous tracking, cost analysis, and performance tuning for sustained efficiency.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h4 className="text-xl font-semibold">Support & Innovation</h4>
                                <p className="mt-2 text-blueGray-600">Ongoing management, enhancements, and scalable support as your cloud needs evolve.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Benefits Section - Redesigned */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Is Cloud Right for You?</h2>
                            <p className="text-base md:text-lg text-blueGray-600 max-w-3xl mx-auto">
                                Cloud is ideal if you’re looking to:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
                            {[
                                { icon: "fa-user-tie", title: "CIOs & IT Leaders", description: "Modernize legacy systems and reduce hardware overhead", gradient: "from-blue-500 to-indigo-500" },
                                { icon: "fa-rocket", title: "DevOps & Engineering", description: "Boost agility and shorten development cycles", gradient: "from-emerald-500 to-teal-500" },
                                { icon: "fa-shield-alt", title: "Security & Compliance", description: "Expand securely with minimal setup time", gradient: "from-purple-500 to-fuchsia-500" },
                                { icon: "fa-brain", title: "Data & AI Teams", description: "Gain a resilient foundation for AI and data-intensive workloads", gradient: "from-orange-500 to-amber-500" }
                            ].map((benefit, index) => (
                                <div key={index} className="group h-full">
                                    {/* Gradient border wrapper */}
                                    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-r ${benefit.gradient} transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-2px]`}>
                                        <div className="bg-white rounded-2xl h-full p-6 flex flex-col">
                                            <div className="flex items-center justify-center mb-4">
                                                <div className={`w-14 h-14 rounded-xl text-white flex items-center justify-center shadow-md bg-gradient-to-r ${benefit.gradient}`}>
                                                    <i className={`fas ${benefit.icon} text-xl`}></i>
                                                </div>
                                            </div>
                                            {/* <h3 className="text-lg font-extrabold text-gray-800 text-center mb-2">{benefit.title}</h3> */}
                                            <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-blueGray-800 to-blueGray-900 border-0 relative -mb-px">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Ready to Elevate Your Cloud?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr as your technology ally and unlock the transformative power of cloud. Let our experts shape a custom cloud strategy that drives your business forward—securely, flexibly, and smartly.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us to start your cloud transformation journey.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
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