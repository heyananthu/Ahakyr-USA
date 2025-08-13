import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from '../../assets/banners/javascript-banner.jpg'

function Javascript() {
    return (
        <div className="javascript-page">
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
                                            <i className="fab fa-js text-white text-4xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        Intelligent Web Experiences with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        JavaScript is no longer just a scripting language—it’s the backbone of modern full-stack development. At Ahakyr, our JavaScript expertise spans dynamic interfaces and powerful back-end systems, enabling web experiences that are adaptive, high-performing, and secure.
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

                {/* Core JS Libraries & Frameworks */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">Core JavaScript Frameworks & Libraries We Use</h2>
                                {/* <p className="text-blueGray-600 max-w-3xl mx-auto">From rapid UI prototyping to scalable back-end services.</p> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                            {/* React.js */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-yellow-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-react text-yellow-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">React.js</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Build reusable UI components with a virtual DOM for faster rendering and updates.
                                </p>
                            </div>

                            {/* Angular */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-red-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-angular text-red-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Angular</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    A comprehensive framework perfect for building scalable Single-Page Applications (SPAs) with two-way data binding.
                                </p>
                            </div>

                            {/* Vue.js */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-emerald-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-vuejs text-emerald-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Vue.js</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Lightweight and flexible—ideal for rapid prototyping and evolving into large-scale applications.
                                </p>
                            </div>

                            {/* Node.js */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-green-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-node-js text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Node.js</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    A high-performance JavaScript runtime enabling scalable server-side applications.
                                </p>
                            </div>

                            {/* Express.js */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-route text-blue-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Express.js</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Minimalist yet powerful framework for building RESTful APIs and server functionality.
                                </p>
                            </div>

                            {/* Next.js */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-bolt text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Next.js</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Perfect for server-side rendering (SSR) and static site generation (SSG)—boosting performance and SEO.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why JavaScript Matters */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Why JavaScript Matters</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Front-End Dynamism",
                                    desc: "JavaScript brings pages to life—updating interfaces in real-time without reloading, delivering seamless user interactions.",
                                },
                                {
                                    title: "Back-End Efficiency",
                                    desc: "Runtime environments like Node.js enable server-side JavaScript—bridging front and back ends with consistent logic and smooth data flow.",
                                },
                                {
                                    title: "Unified Full-Stack Development",
                                    desc: "Utilizing JavaScript across both client and server simplifies your tech stack, speeds development, and strengthens team collaboration.",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-blueGray-50 rounded-xl p-6 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                                            <i className="fas fa-check text-amber-600"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blueGray-800">{item.title}</h3>
                                        <p className="text-blueGray-700 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Full-Stack Workflows */}
                <section className="py-16 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">JavaScript in Full-Stack Workflows</h3>
                            <p className="text-blueGray-700 mt-4">
                                Embracing JavaScript end-to-end simplifies development, reduces language context switching, and enables better cost-efficiency. The streamlined toolkit spans performance optimization, security, and maintainability across your app’s lifecycle.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Seamless API & Real-Time */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Seamless API Integration & Real-Time Interaction</h3>
                                <p className="text-blueGray-700 mt-4">
                                    JavaScript excels at creating efficient endpoints and real-time user experiences. Frameworks like Express.js simplify API setup, while tools like WebSockets enable live updates—perfect for notifications, chats, and collaborative interfaces.
                                </p>
                            </div>
                            <div className="rounded-2xl w-full h-56 bg-gradient-to-br from-yellow-50 to-orange-50 border border-amber-100 shadow-inner flex items-center justify-center">
                                <span className="text-amber-500">API-First • Real-Time • WebSockets</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performance & Security */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Performance & Security: Best Practices We Stand By</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow p-8 border-l-4 border-amber-500">
                                <div className="flex items-center mb-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 mr-3">
                                        <i className="fas fa-tachometer-alt text-amber-600"></i>
                                    </span>
                                    <h4 className="text-xl font-semibold text-blueGray-800">Optimize Performance</h4>
                                </div>
                                <ul className="list-disc list-inside text-blueGray-700 space-y-2">
                                    <li>Use lazy loading to defer heavy components and routes.</li>
                                    <li>Leverage caching at app and network layers.</li>
                                    <li>Employ Web Workers for CPU-intensive tasks.</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl shadow p-8 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 mr-3">
                                        <i className="fas fa-shield-alt text-emerald-600"></i>
                                    </span>
                                    <h4 className="text-xl font-semibold text-blueGray-800">Prioritize Security</h4>
                                </div>
                                <ul className="list-disc list-inside text-blueGray-700 space-y-2">
                                    <li>Avoid risky functions like <code>eval</code>.</li>
                                    <li>Sanitize inputs and prevent XSS with strict Content Security Policies.</li>
                                    <li>Implement secure authentication such as OAuth 2.0.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scale with JavaScript */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Scale with JavaScript — Cloud Ready & Microservices Capable</h3>
                            <p className="text-blueGray-700 mt-4">
                                JavaScript architectures are ideal for enterprise-grade, microservices-based, and cloud-native ecosystems. With Node.js at the core, achieving modularity, autoscaling, and cross-service integration is seamless and robust.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-gradient-to-br from-blueGray-800 to-blueGray-900 relative">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Ready to Elevate Your Web Platform?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-2 mb-4 text-blueGray-200">
                                    Whether you're planning a dynamic frontend, an API-driven backend, or a full-stack JavaScript ecosystem, Ahakyr is your strategic partner.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-2 mb-10 text-blueGray-200">
                                    Connect with us today to build responsive, scalable, and secure web applications using modern JavaScript technologies.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link to="/contact-us" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl">
                                        <i className="fas fa-envelope mr-3"></i>
                                        Connect with Us
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

export default Javascript;
