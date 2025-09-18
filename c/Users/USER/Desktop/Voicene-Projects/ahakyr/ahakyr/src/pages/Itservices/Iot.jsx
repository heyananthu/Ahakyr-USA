
import React from "react";
import Footer from "components/Footers/Footer.js";
import Navbar from "components/Navbars/AuthNavbar.js";
import banner from '../../assets/banners/iot.jpg'; // Assumed path for hero image
import banner2 from '../../assets/banners/iot2.webp'; // Assumed path for secondary image

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

                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-cogs text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why IoT Matters
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    IoT enables physical “things” — machines, sensors, appliances, vehicles, wearables — to connect, communicate, and act intelligently based on real-time data. That means:
                                </p>
                                <ul className="list-disc list-inside text-lg font-light leading-relaxed text-blueGray-600">
                                    <li className="mt-2">Real-time monitoring and predictive insights</li>
                                    <li className="mt-2">Remote control and automation of workflows</li>
                                    <li className="mt-2">Data-driven decision making, where machine-generated data informs actions</li>
                                    <li className="mt-2">New business models — smart services, predictive maintenance, connected asset management</li>
                                </ul>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="IoT Matters"
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
                                            IOT Matters
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Harnessing real-time data to drive efficiency and create new value.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Our IoT Service Offering Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our IoT Service Offering</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="text-center mb-4"><i className="fas fa-lightbulb text-3xl text-blue-500"></i></div>
                                    <h3 className="text-xl font-bold text-center mb-2">IoT Strategy & Consulting</h3>
                                    <p className="text-blueGray-600 text-center">We define high-value use cases and plan a roadmap to achieve your goals.</p>
                                </div>
                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                    <div className="text-center mb-4"><i className="fas fa-microchip text-3xl text-emerald-500"></i></div>
                                    <h3 className="text-xl font-bold text-center mb-2">Hardware & Device Selection</h3>
                                    <p className="text-blueGray-600 text-center">We help you select, test, and deploy the optimal devices for your use-cases.</p>
                                </div>
                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-amber-500">
                                    <div className="text-center mb-4"><i className="fas fa-network-wired text-3xl text-amber-500"></i></div>
                                    <h3 className="text-xl font-bold text-center mb-2">Connectivity & Edge Architecture</h3>
                                    <p className="text-blueGray-600 text-center">We design robust hybrid models balancing edge computing with cloud back-ends.</p>
                                </div>
                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="text-center mb-4"><i className="fas fa-database text-3xl text-purple-500"></i></div>
                                    <h3 className="text-xl font-bold text-center mb-2">Data Ingestion & Analytics Pipeline</h3>
                                    <p className="text-blueGray-600 text-center">We build data pipelines that carry IoT telemetry to your platform for analysis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security, Governance & Device Management */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-shield-alt text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Security, Governance & Device Management
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    IoT introduces unique security risks. We embed security best practices from the device to the cloud — including device authentication, secure firmware updates, encryption, anomaly monitoring, and lifecycle management.
                                </p>
                            </div>
                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Security & Governance"
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
                                            Secure by Design
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Device lifecycle management, encryption, anomaly detection, and firmware governance built in.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support, Monitoring & Maintenance */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-headset text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Support, Monitoring & Maintenance
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Once deployed, we don’t walk away. We provide ongoing device health monitoring, firmware updates, edge-to-cloud lifecycle management, anomaly detection, and incremental enhancements to keep your IoT ecosystem resilient and evolving.
                                </p>
                            </div>
                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Support & Maintenance"
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
                                            Ongoing Support
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Device health, firmware management, data anomalies, and evolving analytics keep your IoT solution robust and meaningful.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Partner with Ahakyr? */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold">Why Partner with Ahakyr?</h2>
                        </div>
                        <div className="flex flex-wrap">
                            {[
                                { feature: "End-to-End IoT Capabilities", benefit: "From strategy to sensors, apps to analytics — all under one roof" },
                                { feature: "Hybrid Edge + Cloud Design", benefit: "We ensure fast reaction times locally and scalable analytics in the cloud" },
                                { feature: "Scalable & Future-Proof", benefit: "Modular architecture supports phased rollout and easy expansion" },
                                { feature: "Secure by Design", benefit: "Device lifecycle management, encryption, anomaly detection, and firmware governance built in" },
                                { feature: "Rapid Prototyping & Iteration", benefit: "Prototype faster, validate use-cases quickly, and scale the ones that deliver real value" }
                            ].map((item, index) => (
                                <div key={index} className="w-full md:w-3/12 px-4 mb-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-2">{item.feature}</h4>
                                        <p className="text-blueGray-600">{item.benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Typical Use Cases */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold">Typical Use Cases</h2>
                        </div>
                        <div className="flex flex-wrap">
                            {[
                                { category: "Industrial & Manufacturing IoT", description: "Predictive maintenance, production line monitoring, quality assurance" },
                                { category: "Smart Building / Facility Management", description: "Energy use optimization, occupancy sensing, HVAC control, access monitoring" },
                                { category: "Logistics & Fleet Tracking", description: "Asset location, environmental monitoring, route efficiency analytics" },
                                { category: "Agriculture & Environmental Monitoring", description: "Soil moisture sensing, crop monitoring, weather-driven automation" },
                                { category: "Healthcare & Remote Monitoring", description: "Patient monitoring devices, smart room controls, connected diagnostics" }
                            ].map((useCase, index) => (
                                <div key={index} className="w-full md:w-4/12 px-4 mb-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h4 className="text-xl font-bold mb-2">{useCase.category}</h4>
                                        <p className="text-blueGray-600">{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our IoT Implementation Process */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold">Our IoT Implementation Process</h2>
                        </div>
                        <div className="flex flex-wrap">
                            {[
                                { step: "Discovery & Use Case Prioritization", description: "Together, we identify the most cost-effective, high-impact IoT opportunities." },
                                { step: "Proof of Concept / Pilot Deployment", description: "Small-scale live deployment of sensors, gateways, dashboards, and workflows — enabling fast validation." },
                                { step: "Full-Scale Rollout", description: "After pilot validation, we scale — deploying devices, connectivity, edge/cloud pipelines, and user apps." },
                                { step: "Integration & Automation", description: "Connect the IoT system with your back-end systems, dashboards, and automation workflows so the data drives action." },
                                { step: "Monitoring, Optimization & Lifecycle Management", description: "Device health, firmware management, data anomalies, and evolving analytics keep your IoT solution robust and meaningful." }
                            ].map((process, index) => (
                                <div key={index} className="w-full md:w-3/12 px-4 mb-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-white">
                                            <span className="text-xl font-bold">{index + 1}</span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">{process.step}</h4>
                                        <p className="text-blueGray-600">{process.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Let's Make Things Smarter Together */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold mb-4">Let's Make Things Smarter Together</h2>
                            <p className="text-xl text-blueGray-600 max-w-3xl mx-auto">
                                With Ahakyr as your IoT service partner, your physical world becomes a connected, intelligent environment—where devices sense, data drives decision-making, and automation delivers measurable business value.
                            </p>
                            <div className="mt-8">
                                <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                                    Contact Us Today
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
