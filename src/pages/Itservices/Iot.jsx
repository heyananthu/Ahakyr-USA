import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/it-service-banner.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Iot() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage: `url(${banner})`
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
                                        Connect the Physical World to Intelligent Business Outcomes
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        At Ahakyr, our IoT (Internet of Things) solutions turn everyday devices, sensors, and machines into actionable data streams and smart systems. From industrial automation to smart building management, our end-to-end IoT services help companies harness real-time insights and automation to improve efficiency, reduce costs, and drive new value.
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

                {/* Why IoT Matters Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-wifi text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why IoT Matters
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    IoT enables physical "things" — machines, sensors, appliances, vehicles, wearables — to connect, communicate, and act intelligently based on real-time data.
                                </p>
                                <ul className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600 list-disc list-inside space-y-2">
                                    <li>Real-time monitoring and predictive insights</li>
                                    <li>Remote control and automation of workflows</li>
                                    <li>Data-driven decision making with machine-generated data</li>
                                    <li>New business models and smart services, predictive maintenance, connected asset management
</li>
                                </ul>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Smart Transformation!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="IoT Excellence"
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
                                            Connected Intelligence
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Transform physical assets into intelligent, connected systems that drive predictive maintenance, smart services, and connected asset management.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Partner with Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Partner with Ahakyr?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cogs text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">End-to-End IoT Capabilities</h3>
                                        <p className="text-teal-100">
                                            From strategy to sensors, apps to analytics — all under one roof
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cloud text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Hybrid Edge + Cloud Design</h3>
                                        <p className="text-indigo-100">
                                            We ensure fast reaction times locally and scalable analytics in the cloud
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalable & Future-Proof</h3>
                                        <p className="text-green-100">
                                            Modular architecture supports phased rollout and easy expansion
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Secure by Design</h3>
                                        <p className="text-red-100">
                                            Device lifecycle management, encryption, anomaly detection, and firmware governance built in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our IoT Service Offering */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our IoT Service Offering</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">IoT Strategy & Consulting</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We begin with a deep-dive into your environment: asset inventory, connectivity needs, data goals, and integration requirements. Together, we define high-value IoT use cases — such as remote monitoring, predictive maintenance, asset tracking, or smart environment automation — and plan a roadmap to achieve them.                                    
</p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-microchip text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Hardware & Device Selection</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
From sensors and actuators to gateways and communication modules, we help you select, test, and deploy the optimal devices for your use-cases. We evaluate power, connectivity (Wi-Fi, Bluetooth, NB-IoT, LoRaWAN, cellular, etc.), durability, and maintenance needs.                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-network-wired text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Connectivity & Edge Architecture</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Designing a robust architecture is crucial for real-time responsiveness and cost-effective operation. We architect hybrid models that balance edge computing (for fast local reaction) with cloud or hybrid back-end systems for centralized intelligence, analytics, and orchestration.                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-stream text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Ingestion & Analytics Pipeline</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We build the data pipelines that carry IoT telemetry to your platform — including ingestion, normalization, storage, real-time processing, and analytics. From dashboards and alerts to machine learning triggered automation, your IoT solution becomes a source of insight and action.                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tachometer-alt text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Application & Dashboard Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Data is only as useful as what you do with it. We deliver interactive dashboards, mobile/web apps, and automation workflows that allow your teams to monitor, control, and respond intelligently to IoT-derived signals — whether it’s a smart factory, energy management system, or connected logistics fleet.                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-plug text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">IoT Platform & Microservices Integration</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We integrate IoT deployments with enterprise systems (ERP, CRM, analytics, workflow automation) and cloud-native services (such as AWS IoT, Azure IoT, Google Cloud IoT) to create a seamless, scalable, and secure ecosystem.                                    </p>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lock text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Security, Governance & Device Management</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
IoT introduces unique security risks. We embed security best practices from the device to the cloud — including device authentication, secure firmware updates, encryption, anomaly monitoring, and lifecycle management.                                    </p>
                                </div>

                                {/* Service 8 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-pink-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-pink-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tools text-pink-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Support, Monitoring & Maintenance</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Once deployed, we don’t walk away. We provide ongoing device health monitoring, firmware updates, edge-to-cloud lifecycle management, anomaly detection, and incremental enhancements to keep your IoT ecosystem resilient and evolving.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our IoT Implementation Process */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our IoT Implementation Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Use Case Prioritization",
                                    description: "Together, we identify the most cost-effective, high-impact IoT opportunities for your business environment.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Proof of Concept / Pilot Deployment",
                                    description: "Small-scale live deployment of sensors, gateways, dashboards, and workflows — enabling fast validation.",
                                    icon: "fa-flask",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Full-Scale Rollout",
                                    description: "After pilot validation, we scale — deploying devices, connectivity, edge/cloud pipelines, and user apps.",
                                    icon: "fa-expand-arrows-alt",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Integration & Automation",
                                    description: "Connect the IoT system with your back-end systems, dashboards, and automation workflows so data drives action.",
                                    icon: "fa-link",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Monitoring, Optimization & Lifecycle Management",
                                    description: "Device health, firmware management, data anomalies, and evolving analytics keep your IoT solution robust.",
                                    icon: "fa-chart-line",
                                    color: "bg-teal-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                                        <div className={`${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                                            <span className="text-2xl font-bold">{item.step}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Typical Use Cases Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Typical Use Cases</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-industry text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Industrial & Manufacturing IoT</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Predictive maintenance, production line monitoring, quality assurance for optimized manufacturing operations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-building text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Building / Facility Management</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Energy use optimization, occupancy sensing, HVAC control, access monitoring for intelligent facilities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-truck text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Logistics & Fleet Tracking</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Asset location, environmental monitoring, route efficiency analytics for optimized logistics operations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-seedling text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Agriculture & Environmental Monitoring</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Soil moisture sensing, crop monitoring, weather-driven automation for smart farming solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 md:col-span-2">
                                <div className="flex items-start mb-6">
                                    <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-heartbeat text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare & Remote Monitoring</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Patient monitoring devices, smart room controls, connected diagnostics for enhanced healthcare delivery and patient outcomes.
                                        </p>
                                    </div>
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
                                    Let's Make Things Smarter Together
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    With Ahakyr as your IoT service partner, your physical world becomes a connected, intelligent environment—where devices sense, data drives decision-making, and automation delivers measurable business value.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a free IoT readiness assessment and proof-of-concept roadmap.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free IoT Assessment
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
