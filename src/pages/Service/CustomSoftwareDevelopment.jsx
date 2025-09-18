import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/web-development.jpg';
import banner2 from '../../assets/banners/mobile-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function CustomSoftwareDevelopment() {
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
                                        Build Bespoke Software Solutions That Drive Unique Business Value
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        When off-the-shelf software cannot evolve or align with your business needs, Ahakyr offers custom software development tailored to your processes, users, and strategic goals. Our solutions are designed to scale with your business, remain secure, and provide long-term operational excellence.
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

                {/* Why Opt for Custom Development Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-code text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Opt for Custom Development?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Custom software development ensures your solution is built precisely for your organization, delivering exactly the features and workflows you need—no more, no less.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Our solutions evolve alongside your growth, scaling in functionality, performance, and complexity as your business expands.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Project Today!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Custom Software Development Excellence"
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
                                            Tailored Solutions
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Get systems that are uniquely yours—strengthen your competitive edge with proprietary workflows, integrations, and branding.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Custom Development Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Benefits of Custom Development</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cog text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Tailored to Your Workflow</h3>
                                        <p className="text-emerald-100">
                                            Built precisely for your organization, our custom solutions deliver the exact features and workflows you need—no more, no less.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalable & Adaptable</h3>
                                        <p className="text-blue-100">
                                            Our solutions evolve alongside your growth—scaling in functionality, performance, and complexity as your business expands.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-dollar-sign text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Long-Term Cost Efficiency</h3>
                                        <p className="text-purple-100">
                                            While upfront investment may be higher, custom development can outperform generic software over time—without subscription constraints and unnecessary features.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-trophy text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Competitive Differentiation</h3>
                                        <p className="text-orange-100">
                                            Get systems that are uniquely yours—strengthen your competitive edge with proprietary workflows, integrations, and branding.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-plug text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Better Integration & Control</h3>
                                        <p className="text-teal-100">
                                            Seamlessly mesh with your existing systems, APIs, and tools, and own your code for full customization and future enhancements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Approach Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Approach to Custom Software</h2>
                            </div>

                            {/* Approach Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Approach 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-search text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Discovery & Strategy</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We analyze your business processes, user needs, and technology ecosystem to craft a strategic roadmap for your solution.
                                    </p>
                                </div>

                                {/* Approach 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-drafting-compass text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Architecture & Design</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Building on industry-proven methodologies, we design applications that are modular, secure, and maintainable.
                                    </p>
                                </div>

                                {/* Approach 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-sync text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Iterative Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Using Agile principles, we deliver functionality in phases—ensuring feedback-driven progress and early value.
                                    </p>
                                </div>

                                {/* Approach 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-check-double text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Quality Assurance & Testing</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rigorous testing ensures performance, security, reliability, and user satisfaction at every release.
                                    </p>
                                </div>

                                {/* Approach 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-rocket text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Deployment & Maintenance</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We support you through deployment, user onboarding, and ongoing enhancement to ensure your software stays modern and efficient.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Stack Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Technology Stack We Leverage</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We tailor our tools per project—but commonly deliver using:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { 
                                    title: "Backend", 
                                    technologies: "Python, Java, .NET, PHP, Ruby on Rails",
                                    icon: "fa-server",
                                    color: "bg-blue-500" 
                                },
                                { 
                                    title: "Frontend & APIs", 
                                    technologies: "REST/GraphQL, modern JS frameworks",
                                    icon: "fa-laptop-code",
                                    color: "bg-green-500" 
                                },
                                { 
                                    title: "Mobile", 
                                    technologies: "Native (iOS, Android) and cross-platform (React Native, Flutter)",
                                    icon: "fa-mobile-alt",
                                    color: "bg-purple-500" 
                                },
                                { 
                                    title: "Cloud & DevOps", 
                                    technologies: "Automated pipelines, containerization, scalable cloud hosting",
                                    icon: "fa-cloud",
                                    color: "bg-orange-500" 
                                }
                            ].map((tech, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-white rounded-2xl p-6 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                        <div className="flex flex-col items-center mb-4">
                                            <div className={`${tech.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${tech.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300">{tech.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed text-center flex-grow flex items-center justify-center">{tech.technologies}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Areas Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Application Areas & Industry Focus</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We've enabled businesses across sectors, with each solution tailored to industry-specific pain points like compliance, data sensitivity, workflow uniqueness, and performance requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: "fa-heartbeat", title: "Healthcare", description: "HIPAA-compliant solutions with advanced security", color: "bg-red-500" },
                                { icon: "fa-university", title: "Finance & Insurance", description: "Secure financial platforms and compliance tools", color: "bg-blue-500" },
                                { icon: "fa-graduation-cap", title: "Education", description: "Learning management and educational technology", color: "bg-green-500" },
                                { icon: "fa-shopping-cart", title: "E-Commerce & Retail", description: "Scalable commerce platforms and inventory systems", color: "bg-purple-500" },
                                { icon: "fa-truck", title: "Logistics & Manufacturing", description: "Supply chain optimization and production management", color: "bg-orange-500" },
                                { icon: "fa-building", title: "Enterprise", description: "Custom business process automation solutions", color: "bg-teal-500" }
                            ].map((industry, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                    <div className="text-center">
                                        <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                                            <i className={`fas ${industry.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{industry.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Competitive Landscape Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Competitive Landscape & Outlook</h2>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-2xl p-8">
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    The rise of AI-driven development—through tools like Bolt, Replit, and Cursor—is redefining how internal tools are built. Companies are now able to rapidly prototype internal solutions, shifting the "build vs buy" debate.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    This transformation presents opportunities and challenges—where businesses that combine human expertise with AI tools gain a strategic edge. At Ahakyr, we integrate the best of both worlds: human judgment, deep business understanding, and smart automation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Ahakyr Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Ahakyr?</h2>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Strength</th>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Our Value</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Deep Domain Expertise</td>
                                                <td className="px-6 py-4 text-gray-600">Years of leading bespoke software development across industries.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Client-Centered Delivery</td>
                                                <td className="px-6 py-4 text-gray-600">Strategies shaped by your goals—with transparency, flexibility, and accountability.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Long-Term Partnership</td>
                                                <td className="px-6 py-4 text-gray-600">We don't just build; we evolve with you through ongoing support and enhancements.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-200">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Innovative Edge</td>
                                                <td className="px-6 py-4 text-gray-600">Combining traditional engineering with emerging AI-assisted approaches for smarter delivery.</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                    Ready to Build Something Truly Yours?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr to create tailored software solutions that solve real business problems, elevate operational efficiency, and provide long-term flexibility.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today to start with a FREE discovery session and custom software roadmap.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Start Your Free Discovery Session
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