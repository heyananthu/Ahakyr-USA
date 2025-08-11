import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/it-infra-banner.avif'
import banner2 from '../../assets/banners/it-infra-banner2.avif'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function ItInfrastructureManagement() {
    return (
        <div className="infrastructure-page">
            <style dangerouslySetInnerHTML={{
                __html: `
                    .infrastructure-page footer .absolute.pointer-events-none {
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
                                        Build a Resilient Digital Backbone with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Your infrastructure powers everything—apps, data, support, growth. At Ahakyr, we transform your IT and infrastructure management into a robust, secure, and scalable foundation that supports your business goals today—and tomorrow.
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

                {/* What Is IT Infrastructure Management Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-server text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What Is IT Infrastructure Management?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    It's the comprehensive management of your entire technology ecosystem: hardware, software, networks, servers, data centers, and related operations.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    At its core, effective infrastructure management ensures consistent performance, uptime, security, and alignment with strategic business needs.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Get Started Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="IT Infrastructure Management Excellence"
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
                                            Resilient Digital Foundation
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Build a robust, secure, and scalable infrastructure that powers your business growth and innovation.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Our Infrastructure Management Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Infrastructure Management Services</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-eye text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Proactive Monitoring & Maintenance</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Continuous surveillance of system health, performance trends, and uptime ensures potential issues are detected—and solved—before they escalate.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-robot text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Automation & Configuration Management</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Leverage tools like Ansible, Puppet, Terraform, and Chef to automate deployments and enforce standardized configurations across your infrastructure.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cloud text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Cloud, Virtualization & Hybrid Strategy</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Scale efficiently using cloud platforms (AWS, Azure, GCP), virtualization, or a mix of cloud and on-premises setups—choosing the best model for cost, flexibility, and governance.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-shield-alt text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Disaster Recovery & Business Continuity</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We develop and maintain backup strategies, redundant systems, and failover plans—with routine testing to ensure you're ready when disruption hits.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lock text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Security, Compliance & Access Control</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Implement multi-layered security controls—firewalls, intrusion detection, encryption, and role-based access—while ensuring regulatory compliance (e.g., HIPAA, GDPR).
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Capacity Planning & Resource Optimization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Through performance analysis and trend monitoring, we optimize resource allocation and plan for future demand—keeping your infrastructure efficient and agile.
                                    </p>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-file-alt text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Documentation, Audits & IT Support</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Maintain rigorous documentation of your system configurations, workflows, and policies. Conduct regular audits to drive consistent performance, compliance, and continuous improvement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Choose Ahakyr?</h2>
                            </div>

                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden ">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                                <tr>
                                                    <th className="px-6 py-4 text-center text-lg font-bold">Advantage</th>
                                                    <th className="px-6 py-4 text-center text-lg font-bold">Benefit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 text-center">
                                                <tr className="hover:bg-gray-50 transition duration-200">
                                                    <td className="px-6 py-4 font-semibold text-gray-800">Holistic & Proactive Management</td>
                                                    <td className="px-6 py-4 text-gray-600">Infrastructure that anticipates problems instead of reacting to crises.</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition duration-200">
                                                    <td className="px-6 py-4 font-semibold text-gray-800">Automated & Consistent Operations</td>
                                                    <td className="px-6 py-4 text-gray-600">Infrastructure-as-Code (IaC) ensures accuracy, repeatability, and agility.</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition duration-200">
                                                    <td className="px-6 py-4 font-semibold text-gray-800">Flexible Architecture</td>
                                                    <td className="px-6 py-4 text-gray-600">Cost-effective, scalable, and performance-optimized systems.</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition duration-200">
                                                    <td className="px-6 py-4 font-semibold text-gray-800">Security-First Foundation</td>
                                                    <td className="px-6 py-4 text-gray-600">Built with compliance and data protection from the ground up.</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition duration-200">
                                                    <td className="px-6 py-4 font-semibold text-gray-800">Operational Excellence</td>
                                                    <td className="px-6 py-4 text-gray-600">Seamless integration, documentation, and audit-ready infrastructure.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                {/* Our Service Journey Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Service Journey</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Assessment & Strategy Alignment",
                                    description: "Review your existing infrastructure and business goals to shape a tailored management plan.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Design & Automate",
                                    description: "Develop standardized configurations, automation scripts, and IaC pipelines.",
                                    icon: "fa-drafting-compass",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Deploy & Integrate",
                                    description: "Roll out cloud and on-prem systems, bolster security, and embed monitoring tools.",
                                    icon: "fa-rocket",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Manage & Optimize",
                                    description: "Ensure 24/7 monitoring, routine maintenance, and continuous tuning of your environment.",
                                    icon: "fa-cogs",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Audit & Improve",
                                    description: "Perform audits, update documentation, and refine processes to sustain reliability and performance.",
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

                {/* Who Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Who Benefits from Our Expertise?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-chart-line", title: "Growing SMEs or Enterprises", description: "Seeking scalable infrastructure solutions", color: "bg-blue-500" },
                                { icon: "fa-brain", title: "SaaS & AI Companies", description: "In need of robust, observability-driven backends", color: "bg-green-500" },
                                { icon: "fa-shield-alt", title: "Regulated Industries", description: "Demanding compliance and high availability", color: "bg-purple-500" },
                                { icon: "fa-users-cog", title: "Operations Teams", description: "Aiming to reduce manual overhead and boost resilience", color: "bg-orange-500" }
                            ].map((benefit, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-gray-100 rounded-2xl p-6 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center mb-2">
                                            <div className={`${benefit.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${benefit.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 ">{benefit.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow flex items-center justify-center">{benefit.description}</p>
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
                                    Ready to Elevate Your Infrastructure?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    With Ahakyr, your infrastructure becomes a strategic asset—not just a technical necessity. Get in touch for a free strategy session and discover how we can architect a smarter, stronger, and more resilient foundation for your business.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a free consultation and see how we can transform your IT infrastructure into a competitive advantage.
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

