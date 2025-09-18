import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/javascript-banner.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function SoftwareProductDevelopment() {
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
                                        Transform Ideas into Innovatively Engineered Solutions
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        At Ahakyr, we specialize in Software Product Development, guiding your vision from concept to market-ready product. Whether you're launching a new digital offering or enhancing an existing platform, our team ensures your software is not just functional—but scalable, secure, and strategic.
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

                {/* Why Choose Ahakyr Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Choose Ahakyr?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    From healthcare to e-commerce, education to manufacturing—our experience spans verticals, delivering context-aware, tailored software products.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    We embrace agile practices for iterative development, keeping projects flexible, transparent, and aligned with your roadmap.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Product Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Software Product Development Excellence"
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
                                            Vision to Market
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Leveraging the latest technologies, we build products that are not just robust today, but adaptable for tomorrow.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Core Strengths</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-globe text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Industry-Agnostic Expertise</h3>
                                        <p className="text-emerald-100">
                                            From healthcare to e-commerce, education to manufacturing—our experience spans verticals, delivering context-aware, tailored software products.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-sync text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Agile Development Methodology</h3>
                                        <p className="text-blue-100">
                                            We embrace agile practices for iterative development, keeping projects flexible, transparent, and aligned with your roadmap.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Innovative & Future-Aligned Solutions</h3>
                                        <p className="text-purple-100">
                                            Leveraging the latest technologies, we build products that are not just robust today, but adaptable for tomorrow.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-handshake text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Client-First Collaboration</h3>
                                        <p className="text-orange-100">
                                            Your goals guide every phase of development. We work alongside you, ensuring each feature meets—or exceeds—your expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Services</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-laptop-code text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Custom Software Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tailored applications that align precisely with your unique business workflows and user needs.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-mobile-alt text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Mobile App Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        End-to-end creation of intuitive mobile experiences for iOS and Android platforms.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-globe text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Web Application Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dynamic, responsive web apps built for performance, scalability, and device compatibility.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-pencil-ruler text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Product Design & Prototyping</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Bring your idea to life with interactive mockups and prototypes that shape user experience.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-check-double text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Quality Assurance & Testing</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rigorous testing methods ensure stability, security, and seamless functionality across environments.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tools text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Maintenance & Support</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ongoing enhancements and uptime assurance to keep your software product performing at its best.
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Process: From Vision to Delivery</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Planning",
                                    description: "We begin by understanding your objectives, user needs, and business context to set a clear development roadmap.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Design & Prototyping",
                                    description: "We craft intuitive UI/UX prototypes to ensure user engagement and alignment with your brand identity.",
                                    icon: "fa-pencil-ruler",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Development & Integration",
                                    description: "Using modern tech stacks and best practices, we build and integrate solutions that scale with your business.",
                                    icon: "fa-code",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Testing & Quality Assurance",
                                    description: "From functional to performance and security checks, we rigorously validate your product before launch.",
                                    icon: "fa-check-double",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Deployment & Support",
                                    description: "After launch, we stay on board—monitoring performance, delivering updates, and ensuring stability.",
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

                {/* Industries We Serve Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We deliver specialized solutions across multiple industries, tailored to your specific needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: "fa-heartbeat", title: "Healthcare", color: "bg-red-500" },
                                { icon: "fa-university", title: "Finance", color: "bg-blue-500" },
                                { icon: "fa-shopping-cart", title: "E-commerce", color: "bg-green-500" },
                                { icon: "fa-graduation-cap", title: "Education", color: "bg-purple-500" },
                                { icon: "fa-industry", title: "Manufacturing", color: "bg-orange-500" },
                                { icon: "fa-store", title: "Retail", color: "bg-teal-500" }
                            ].map((industry, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-gray-100 rounded-2xl p-6 h-40 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${industry.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">{industry.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">What types of software products do you develop?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We build everything from web & mobile applications to enterprise-grade and industry-specific solutions.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">What is your timeline for development?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Timelines depend on project complexity and scope. We provide detailed schedules during the Discovery phase.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Do you offer ongoing support?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes—our services include continuous maintenance and enhancement post-launch.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">What technologies do you work with?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our expertise includes Java, Python, .NET, React, Angular, and more—selected based on your project requirements.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Do you assist with design and prototyping?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Absolutely—our design team excels at crafting intuitive prototypes that bring your vision into focus.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">How are projects priced?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We offer flexible pricing aligned with project complexity and scope, ensuring clear value delivery.
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
                                    Ready to Build Your Next Software Product?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    At Ahakyr, we're more than developers—we're your strategic tech allies. Let's transform your vision into a market-ready, high-impact software product.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a complimentary consultation and product roadmap discussion.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free Consultation
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
