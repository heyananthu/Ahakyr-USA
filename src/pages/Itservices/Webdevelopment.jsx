import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from "../../assets/banners/web-development.jpg";

export default function Webdevelopment() {
    return (
        <div className="webdev-page">
            {/* Hide footer background blob like other service pages */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
            .webdev-page footer .absolute.pointer-events-none { display: none !important; }
          `,
                }}
            />

            <Navbar transparent />

            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-80 bg-black "></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl">
                                        Web Development Services
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Your Digital Presence, Masterfully Built
                                    </p>
                                    <p className="mt-4 text-sm  text-blueGray-200">
                                        A website is more than a URL—it’s your digital gateway, brand ambassador, and growth engine. At Ahakyr, we design and build custom, responsive, and SEO-optimized websites that not only look stunning—but convert, engage, and scale with your business.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Intro Section (Redesigned) */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            {/* <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full shadow-lg bg-lightBlue-500 text-white">
                                <i className="fas fa-code text-2xl"></i>
                            </div> */}
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">
                                Tailored Solutions Crafted for Your Success
                            </h2>
                            <p className="mt-4 text-blueGray-600 text-lg">
Our approach to web development is personalized, strategic, and results-driven:                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-lightBlue-500 mb-4">
                                    <i className="fas fa-pencil-ruler"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                                <p className="text-blueGray-600 text-sm">
                                    We learn your brand and audience to craft visuals and layouts that resonate and inspire.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 mb-4">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Responsive Development</h3>
                                <p className="text-blueGray-600 text-sm">
                                    Seamless user experiences across mobile, tablet, and desktop—by design.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 mb-4">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                                <p className="text-blueGray-600 text-sm">
                                    On-page best practices built in from the ground up to drive discoverability.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 mb-4">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">E‑Commerce Platforms</h3>
                                <p className="text-blueGray-600 text-sm">
                                    Secure, scalable stores with catalogs, payments, and tailored workflows.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 mb-4">
                                    <i className="fas fa-th-large"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Content Management (CMS)</h3>
                                <p className="text-blueGray-600 text-sm">
                                    WordPress, Drupal, or custom—update content with ease, no dev needed.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 mb-4">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Performance & Security</h3>
                                <p className="text-blueGray-600 text-sm">
                                    Optimized speed, hardened security, and best‑practice infrastructure.
                                </p>
                            </div>

                            {/* New Card: Ongoing Maintenance & Support */}
                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <div className="text-white inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500 mb-4">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Ongoing Maintenance & Support</h3>
                                <p className="text-blueGray-600 text-sm">
                                    Proactive updates, monitoring, and performance tuning to keep your site at its best.
                                </p>
                            </div>
                        </div>

                        {/* Support strip removed since it's now part of the features grid */}
                    </div>
                </section>

                {/* Why Partner With Us */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Partner with Ahakyr for Web Development?</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            {[
                                {
                                    icon: "fas fa-users",
                                    title: "Experienced, Client-Focused Team",
                                    desc:
                                        "Designers, developers, and SEO specialists collaborate to deliver solutions aligned with your business goals and audience expectations.",
                                },
                                {
                                    icon: "fas fa-bullseye",
                                    title: "Strategic, Results-Driven Approach",
                                    desc:
                                        "We listen first, plan thoroughly, build with purpose, and measure results to ensure your site drives real impact.",
                                },
                                {
                                    icon: "fas fa-microchip",
                                    title: "Modern Tech & Best Practices",
                                    desc:
                                        "From responsive frameworks to headless CMS options, we deliver future-proof solutions.",
                                },
                                {
                                    icon: "fas fa-award",
                                    title: "Proven Track Record",
                                    desc:
                                        "Our portfolio spans startups to enterprises across sectors—from retail and SaaS to professional services and B2B.",
                                },
                            ].map((c, idx) => (
                                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={idx}>
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg p-6 h-full">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-4 shadow-lg rounded-full bg-lightBlue-500">
                                            <i className={`${c.icon}`}></i>
                                        </div>
                                        <h6 className="text-xl font-semibold mb-2">{c.title}</h6>
                                        <p className="text-blueGray-600 text-sm">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Proven Development Process</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            {[
                                {
                                    step: "1",
                                    title: "Discovery & Planning",
                                    desc:
                                        "We begin by diving deep into your brand, business goals, and target users to shape the roadmap.",
                                },
                                {
                                    step: "2",
                                    title: "Design & Development",
                                    desc:
                                        "Collaborating with you, we design a user-friendly interface, then build the site with clean, scalable, and secure code.",
                                },
                                {
                                    step: "3",
                                    title: "Testing & Optimization",
                                    desc:
                                        "Performance, security, responsiveness—your site is tested thoroughly for a smooth, bug-free delivery.",
                                },
                                {
                                    step: "4",
                                    title: "Launch & Support",
                                    desc:
                                        "After final approvals, we launch and provide continuous support, analytics monitoring, and iterative improvements.",
                                },
                            ].map((p, idx) => (
                                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={idx}>
                                    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                                        <div className="text-lightBlue-600 font-bold text-3xl mb-2">{p.step}</div>
                                        <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                                        <p className="text-blueGray-600 text-sm">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success in Action */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blueGray-800">Success in Action</h2>
                        </div>
                        <div className="flex flex-wrap -mx-4">
                            {[
                                {
                                    title: "Retail Redesign",
                                    desc: "A retail client’s site redesign led to a 40% increase in engagement and 35% uplift in conversions.",
                                },
                                {
                                    title: "Professional Services SEO",
                                    desc: "A professional services firm achieved top-page rankings for industry-specific keywords within 12 weeks.",
                                },
                            ].map((c, idx) => (
                                <div className="w-full md:w-1/2 px-4 mb-8" key={idx}>
                                    <div className="bg-blueGray-50 rounded-lg p-6 h-full shadow">
                                        <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
                                        <p className="text-blueGray-600 text-sm">{c.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-blueGray-800">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-4xl mx-auto space-y-6">
                            {[
                                {
                                    q: "What types of websites can you develop?",
                                    a: "We create everything from e-commerce platforms and corporate sites to blogs and tailored web applications.",
                                },
                                {
                                    q: "How long does development take?",
                                    a: "Typical delivery times range from 4–8 weeks, depending on complexity; custom workflows or advanced features may extend timelines.",
                                },
                                {
                                    q: "Will my website be mobile-friendly?",
                                    a: "Absolutely. Every site is built with a mobile-first mindset for flawless performance on all devices.",
                                },
                                {
                                    q: "Can you assist with content creation?",
                                    a: "Yes—we offer copywriting, graphic design, and multimedia services to bring your message to life.",
                                },
                                {
                                    q: "How do you ensure website security?",
                                    a: "Your site will include SSL, secure coding best practices, timely updates, and regular security audits.",
                                },
                                {
                                    q: "What kind of post-launch support do you offer?",
                                    a: "Ongoing maintenance, uptime monitoring, security updates, and performance tuning for long-term stability.",
                                },
                            ].map((f, idx) => (
                                <div className="bg-white rounded-lg shadow p-6" key={idx}>
                                    <h4 className="font-semibold text-lg mb-2">{f.q}</h4>
                                    <p className="text-blueGray-600 text-sm">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA (Redesigned) */}
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
