import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from "../../assets/banners/mobile-development.jpg";

function MobileAppDevelopment() {
    return (
        <div className="mobile-app-dev-page">
            <Navbar transparent />
            <main>
                {/* Hero */}
                <div className="relative pt-16 pb-36 flex content-center items-center justify-center min-h-screen-75">
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
                                            <i className="fas fa-mobile-alt text-white text-4xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        Bring Your Vision to Life — On iOS, Android, and Beyond
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        In today’s mobile-first world, delivering a seamless, intuitive app is key to business success. At Ahakyr, we specialize in crafting high-performance, user-centric mobile applications that drive engagement, loyalty, and growth.
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
                            <polygon className="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                {/* Why Mobile Apps Matter */}
                <section className="py-20 bg-white ">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Why Mobile Apps Matter</h2>
                            <p className="text-blueGray-600 max-w-4xl mx-auto mt-4">
                                With billions using smartphones to connect, shop, learn, and play, well-designed apps offer unmatched access, personalization, and brand immersion. Whether you’re launching a service, enhancing customer experience, or unlocking new revenue streams, mobile app development is pivotal.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Expertise */}
                <section className="pb-20 bg-blueGray-200 py-6">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">
                                Our Expertise in Mobile App Technologies
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                            {/* Native */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-emerald-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-apple text-emerald-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Native App Development</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Harness the power of Swift or Objective-C for iOS, and Kotlin or Java for Android to deliver smooth, optimized experiences.
                                </p>
                            </div>

                            {/* Cross-Platform */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fab fa-react text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Cross-Platform & Hybrid Solutions</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Maximize reach with frameworks like React Native, Flutter, Ionic, Xamarin, or hybrid options—building one codebase that works across platforms.
                                </p>
                            </div>

                            {/* PWAs */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-yellow-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-bolt text-yellow-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Progressive Web Apps (PWAs)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    For rapid deployment and broad accessibility, PWAs provide app-like functionality right in the browser—offline support, fast load times, and device adaptability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Our Mobile App Development Approach</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Discovery & Strategy",
                                    desc:
                                        "We work with you to clarify objectives, user needs, and technical scope—forming the foundation for your app’s success.",
                                    icon: "fas fa-search",
                                    color: "bg-rose-100 text-rose-600",
                                },
                                {
                                    title: "UI/UX Design",
                                    desc:
                                        "Clean, intuitive, and delightful interfaces rooted in best practices—designed for engagement and usability.",
                                    icon: "fas fa-pencil-ruler",
                                    color: "bg-amber-100 text-amber-600",
                                },
                                {
                                    title: "Development & Engineering",
                                    desc:
                                        "Choice of platform—native, cross-platform, or PWA—built with robust architecture, clean code, and modern trends in mind.",
                                    icon: "fas fa-code",
                                    color: "bg-indigo-100 text-indigo-600",
                                },
                                {
                                    title: "Quality Assurance",
                                    desc:
                                        "Rigid testing across devices, environments, and user journeys to ensure performance, security, and reliability.",
                                    icon: "fas fa-shield-alt",
                                    color: "bg-emerald-100 text-emerald-600",
                                },
                                {
                                    title: "Launch & Distribution",
                                    desc:
                                        "App publication in the App Store and Google Play, or web deployment—with post-launch optimizations to improve user uptake.",
                                    icon: "fas fa-rocket",
                                    color: "bg-blue-100 text-blue-600",
                                },
                                {
                                    title: "Maintenance & Enhancement",
                                    desc:
                                        "Ongoing updates, feature expansions, analytics, and support to keep your app ahead of expectations.",
                                    icon: "fas fa-tools",
                                    color: "bg-purple-100 text-purple-600",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-blueGray-50 rounded-xl p-6 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${item.color}`}>
                                            <i className={item.icon}></i>
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

                {/* Key Benefits */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Key Benefits for Your Business</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Deep User Engagement", desc: "Elevate brand touchpoints with tailored, high-performance mobile interactions", icon: "fas fa-heart", color: "border-rose-500" },
                                { title: "Market Agility", desc: "Rapid deployment across platforms to capture opportunity fast", icon: "fas fa-tachometer-alt", color: "border-amber-500" },
                                { title: "Resource Efficiency", desc: "Code reuse with cross-platform frameworks reduces development timelines", icon: "fas fa-recycle", color: "border-emerald-500" },
                                { title: "Premium UX & Stability", desc: "Native-level performance and user experience maximizes satisfaction", icon: "fas fa-star", color: "border-indigo-500" },
                                { title: "Future-Ready Apps", desc: "Scalable, maintainable solutions—ready for growth and evolving trends", icon: "fas fa-chart-line", color: "border-blue-500" },
                            ].map((b, i) => (
                                <div key={i} className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 ${b.color}`}>
                                    <div className="flex items-center mb-4">
                                        <div className="mr-3">
                                            <i className={`${b.icon} text-blueGray-600`}></i>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800">{b.title}</h4>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Emerging Trends */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800 text-center">Emerging Trends We Leverage</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                {[
                                    { title: "IoT & Connected Interfaces", desc: "Mobile as the command center for smart homes, wearables, and automation.", icon: "fas fa-network-wired" },
                                    { title: "5G Acceleration", desc: "Ultra-low latency and high throughput allow richer experiences, like real-time AR and streaming functionality.", icon: "fas fa-signal" },
                                    { title: "AI & Predictive Features", desc: "Integration of machine learning for personalization, analytics, voice/UI enhancements within your app.", icon: "fas fa-robot" },
                                    { title: "Instant Apps", desc: "Deliver app experiences without full installation—boosting user acquisition and conversion.", icon: "fas fa-bolt" },
                                ].map((t, idx) => (
                                    <div key={idx} className="flex items-start bg-blueGray-50 rounded-xl p-6 shadow-sm">
                                        <div className="mr-4 mt-1">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                                <i className={t.icon}></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-blueGray-800">{t.title}</h4>
                                            <p className="text-blueGray-700 mt-1">{t.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-36 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-bold">Ready to Launch Your Mobile Strategy?</h3>
                            <p className="mt-4 text-blueGray-200">
                                At Ahakyr, we don’t just build apps—we help you build value. Whether you're aiming for native perfection, cross-platform speed, or web-based agility, our team is ready to bring your digital vision to mobile life.
                            </p>
                            <p className="mt-2 text-blueGray-200">Contact us today for a free mobile strategy session.</p>
                            <div className="mt-12">
                                <a
                                    href="/contact"
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default MobileAppDevelopment;