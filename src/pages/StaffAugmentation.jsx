import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function StaffAugmentation() {
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
                                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')",
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
                                        Expand Your Team Effortlessly with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's dynamic business environment, staying agile and responsive is key. Staff augmentation enables you to extend your in-house capabilities with experienced professionals—on-demand, project-specific, or long-term—without the overhead of traditional hiring.
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

                {/* What Is Staff Augmentation Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-users text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What Is Staff Augmentation?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Staff augmentation is a flexible hiring model where you supplement your internal team with remote or on-site specialists to meet project or skill-specific needs.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    It allows you to scale up or down quickly, efficiently, and cost-effectively—without compromising quality or workflow continuity.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Staff Augmentation Excellence"
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
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
                                            Flexible Team Scaling
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Scale your team instantly with experts when needed. Reduce or expand staffing based on project demands—with no long-term commitments.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Choose Ahakyr for Staff Augmentation?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Flexibility & Scalability</h3>
                                        <p className="text-emerald-100">
                                            Scale your team instantly with experts when needed. Reduce or expand staffing based on project demands—with no long-term commitments.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-dollar-sign text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Cost Optimization</h3>
                                        <p className="text-blue-100">
                                            Save on recruitment, training, and full-time benefits. Access top-tier talent only for the duration you need.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cogs text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Access to Specialized Skills</h3>
                                        <p className="text-purple-100">
                                            Fill specific roles—developers in React, Laravel, .NET, AI/ML specialists, DevOps engineers, QA testers, and more—with qualified professionals.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Rapid Onboarding</h3>
                                        <p className="text-orange-100">
                                            Our candidate pool is vetted, ready to integrate, and available quickly to drive faster time-to-market.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-handshake text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Seamless Integration</h3>
                                        <p className="text-teal-100">
                                            Embedded within your team but managed under Ahakyr's operational and quality guidelines—ensuring productivity and reliability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Staff Augmentation Models Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Types of Staff Augmentation Models</h2>
                                <p className="text-sm md:text-lg text-blueGray-600 max-w-3xl mx-auto">
                                    Flexible engagement models designed to meet your specific project and business needs
                                </p>
                            </div>

                            {/* Models Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Model 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-clock text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Short‑Term or Project‑Based Engagements</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ideal for fixed timelines or narrow-scope deliverables.
                                    </p>
                                </div>

                                {/* Model 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-calendar-alt text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Long‑Term Staffing</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        For ongoing support, recurring projects, or continuous development needs.
                                    </p>
                                </div>

                                {/* Model 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-brain text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Skill-Based Augmentation</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We supply professionals precisely matched to your technical requirements—whether AI, blockchain, mobile, cloud, or UX experts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">How It Works: Our Augmentation Process</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our proven methodology ensures successful team augmentation with minimal disruption and maximum results
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Needs Analysis",
                                    description: "We work with you to understand roles, skill sets, project scope, timelines, and desired team structure.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Candidate Sourcing & Selection",
                                    description: "We screen and propose qualified profiles based on your requirements—complete with skills evaluation and vetting.",
                                    icon: "fa-user-check",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Client Interviews & Final Selection",
                                    description: "You conduct interviews with shortlisted candidates to ensure fit and alignment.",
                                    icon: "fa-comments",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Onboarding & Integration",
                                    description: "We manage legal and operational setup, while professionals integrate with your workflows and communication tools.",
                                    icon: "fa-handshake",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Ongoing Collaboration & Support",
                                    description: "Ahakyr offers continuous management support, workflow coordination, and performance monitoring.",
                                    icon: "fa-headset",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Performance Review & Scaling",
                                    description: "Regular check-ins, performance metrics, and the ability to adjust headcount or expertise as project needs evolve.",
                                    icon: "fa-chart-bar",
                                    color: "bg-indigo-500"
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

                {/* Who Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Who Benefits from Our Services</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Organizations across industries leverage our staff augmentation services to achieve their goals
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-laptop-code", title: "Tech Companies", description: "Launching new software modules or platforms", color: "bg-blue-500" },
                                { icon: "fa-building", title: "Businesses", description: "Filling temporary roles or special projects", color: "bg-green-500" },
                                { icon: "fa-digital-tachograph", title: "Organizations", description: "Implementing digital transformations using emerging tech", color: "bg-purple-500" },
                                { icon: "fa-rocket", title: "Clients", description: "Needing immediate scale-up for urgent deliverables", color: "bg-orange-500" }
                            ].map((benefit, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gray-100 rounded-2xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className={`${benefit.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 transform transition duration-300 group-hover:scale-110`}>
                                            <i className={`fas ${benefit.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 mb-3">{benefit.title}</h3>
                                        <p className="text-sm text-gray-600">{benefit.description}</p>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">The Ahakyr Advantage</h2>
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
                                                <td className="px-6 py-4 font-semibold text-gray-800">Recruitment & Vetting</td>
                                                <td className="px-6 py-4 text-gray-600">You get access to rigorously screened professionals.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Compliance & HR Admin</td>
                                                <td className="px-6 py-4 text-gray-600">We take care of legal, HR, payroll, and benefits administration.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Seamless Workflow</td>
                                                <td className="px-6 py-4 text-gray-600">Augmented staff collaborate like internal team members.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Transparent Billing</td>
                                                <td className="px-6 py-4 text-gray-600">Predictable, committed costs with no hidden charges.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Scalable Engagements</td>
                                                <td className="px-6 py-4 text-gray-600">Move fast—ramp up or wind down as business demands dictate.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">FAQs</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">How is staff augmentation different from outsourcing?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Unlike outsourcing entire project ownership, staff augmentation embeds specialists within your current team under your direction and process flow.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Can augmented staff work remotely and/or onsite?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Absolutely—whether remote or on-site, we match logistics to your preference and project structure. Integration is smooth and supported at every step.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">How is talent vetted?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Candidates undergo technical assessments, background checks, and skills evaluation to ensure alignment with your technical and cultural needs.
                                    </p>
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
                                    Ready to Build the Right Team?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr to access flexible, scalable, and expert staffing tailored to your project goals.
                                    Whether you're aiming for short‑term delivery or long‑term collaboration, our staff augmentation model provides the agility and capabilities you need—without the overhead.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a free consultation and see how we can help scale your workforce effectively.
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
