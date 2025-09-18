import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/mobile-development.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function MobileAppDevelopment() {
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
                                        Transform Ideas into Impactful Mobile Experiences
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In an increasingly mobile-first world, having a dynamic and intuitive app is essential. At Ahakyr, we specialize in crafting high-performance, user-centric mobile applications that drive customer engagement, streamline operations, and propel your business forward.
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
                                    <i className="fas fa-mobile-alt text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Choose Ahakyr for Mobile App Development?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Expert Development Team — Our seasoned developers bring deep expertise in building scalable mobile applications tailored to your vision.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Custom & Future-Proof Solutions — We design apps aligned with your business needs and evolving alongside technological trends.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Mobile Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Mobile App Development Excellence"
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
                                            Mobile-First Excellence
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Agile Process for Flexibility & Transparency — We deliver fast, iterative progress while staying aligned with your feedback loop.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Mobile Expertise</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-mobile-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Expert Development Team</h3>
                                        <p className="text-emerald-100">
                                            Our seasoned developers bring deep expertise in building scalable mobile applications tailored to your vision.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cogs text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Custom & Future-Proof Solutions</h3>
                                        <p className="text-blue-100">
                                            We design apps aligned with your business needs and evolving alongside technological trends.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-sync text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Agile Process for Flexibility</h3>
                                        <p className="text-purple-100">
                                            We deliver fast, iterative progress while staying aligned with your feedback loop.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Cutting-Edge Technologies</h3>
                                        <p className="text-orange-100">
                                            From native platforms to cross-platform tools, we use the latest stack to ensure performance and longevity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Mobile App Expertise Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Mobile App Expertise</h2>
                            </div>

                            {/* Mobile App Types Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {/* Native App Development */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fab fa-apple text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Native App Development</h3>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-700 mb-2">iOS</h4>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            Crafted in Swift or Objective-C for seamless performance across iPhones and iPads.
                                        </p>
                                        <h4 className="font-semibold text-gray-700 mb-2">Android</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Expertly built in Kotlin or Java, delivering engaging, native experiences.
                                        </p>
                                    </div>
                                </div>

                                {/* Cross-Platform App Development */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-code-branch text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Cross-Platform App Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Reach both iOS and Android users with one codebase using frameworks like React Native and Flutter. We create apps with excellent UX and reduced development time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile App Value Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">The Value of Mobile Apps in Today's Digital Landscape</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-globe text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Widespread Reach & Engagement</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    With billions of users worldwide, mobile apps are vital touchpoints for growth.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-heart text-green-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Enhanced Brand Loyalty</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Foster deeper connections with users through smooth, personalized mobile experiences.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Insights</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Apps offer actionable analytics to drive decisions and refine engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Key Components of Our Approach</h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-lg font-bold">Phase</th>
                                        <th className="px-6 py-4 text-left text-lg font-bold">What We Do</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Discovery</td>
                                        <td className="px-6 py-4 text-gray-600">Define objectives, audience, and platform strategy.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">UX/UI Design</td>
                                        <td className="px-6 py-4 text-gray-600">Build intuitive, branded interfaces that delight users.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Development</td>
                                        <td className="px-6 py-4 text-gray-600">Use native or cross-platform frameworks optimized for performance.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Integration</td>
                                        <td className="px-6 py-4 text-gray-600">Seamlessly connect your app to APIs, backend systems, and third-party tools.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Testing</td>
                                        <td className="px-6 py-4 text-gray-600">Ensure rigorous QA, including UI, security, and performance testing.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Launch & Support</td>
                                        <td className="px-6 py-4 text-gray-600">Deploy to App Stores and provide ongoing improvements post-launch.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Growth-Driven Features Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Growth-Driven Features We Implement</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-bell text-red-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Push Notifications</h3>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-shopping-cart text-green-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">In-App Purchases & Subscriptions</h3>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-wifi text-blue-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Offline Functionality</h3>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-analytics text-purple-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics & User Tracking</h3>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <i className="fas fa-robot text-orange-600 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">AI & Chatbot Integrations</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries We Serve Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We’ve delivered apps across:                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                            {[
                                { icon: "fa-store", title: "Retail & eCommerce", color: "bg-blue-500" },
                                { icon: "fa-users", title: "Social Media & Collaboration", color: "bg-green-500" },
                                { icon: "fa-heartbeat", title: "Healthcare", color: "bg-red-500" },
                                { icon: "fa-bed", title: "Hospitality", color: "bg-purple-500" },
                                { icon: "fa-user-tie", title: "HR & Recruitment", color: "bg-orange-500" },
                                { icon: "fa-industry", title: "Manufacturing", color: "bg-teal-500" },
                                { icon: "fa-truck", title: "Transportation & Logistics", color: "bg-indigo-500" }
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
                                    Ready to Build the Next Great App?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Let Ahakyr bring your mobile vision to life with expertise, innovation, and a user-first design ethos. Whether you need a native app, a cross-platform solution, or ongoing support—we're here to empower your mobile journey.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Connect with us today for a free strategy session and custom project roadmap.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-mobile-alt mr-3"></i>
                                        Start Your Mobile App Project
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
