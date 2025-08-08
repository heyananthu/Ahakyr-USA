import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Seo() {
    return (
        <div className="seo-page">
            <style dangerouslySetInnerHTML={{
                __html: `
                    .seo-page footer .absolute.pointer-events-none {
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
                                "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')",
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
                                        Elevate Your Online Presence with Ahakyr's Digital Expertise
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's competitive digital landscape, mere visibility isn't enough—it's about being discovered by the right audience at the right time. 
                                        We offer comprehensive SEO and digital marketing services designed to amplify your brand visibility, drive targeted traffic, and convert clicks into loyal customers.
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

                {/* Why Choose Us Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        {/* <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-bullseye"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Tailored Strategies</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            We align our SEO and marketing approach with your unique business objectives to ensure meaningful engagement and conversions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-chart-line"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Data-Driven Execution</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            From keyword performance and competitor benchmarks to campaign analytics, every campaign is backed by strategic insights.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-globe"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">End-to-End Coverage</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Whether it's SEO, social media, or performance marketing, our holistic approach ensures all marketing channels work in synergy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-trophy text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Proven Results
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    With experience across multiple industries, we deliver measurable outcomes: better rankings, improved visibility, and higher conversions.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Our strategies consistently produce meaningful outcomes for clients across various industries and business sizes.
                                </p>
                                <Link
                                    to="/contact"
                                    className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                                >
                                    Get Started Today{" "}
                                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="SEO Analytics"
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                                            Real Estate Success Story
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            A real estate firm achieved 8,848 impressions, 62 leads, and 2.4% CTR through integrated SEO, content creation, social media, and paid campaigns.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Services</h2>
                            {/* <p className="text-lg text-blueGray-600 max-w-3xl mx-auto">
                                Comprehensive digital marketing solutions designed to maximize your online presence and drive measurable results.
                            </p> */}
                        </div>

                        {/* Search Engine Optimization */}
                        <div className="flex flex-wrap items-center mb-20">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="md:pr-12">
                                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                                        <i className="fas fa-search text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-4">Search Engine Optimization (SEO)</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500 mb-6">
                                        Comprehensive SEO strategies to improve your search rankings and organic visibility.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-key"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Keyword Strategy</strong> – Identify and target the right terms for your audience
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-file-alt"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>On-Page SEO</strong> – Optimize content, meta tags, structure, and readability
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-link"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Off-Page SEO</strong> – Build authority with quality backlinks and trusted outreach
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-cogs"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Technical SEO</strong> – Improve site architecture, speed, and mobile responsiveness
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <i className="fas fa-robot"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>AI-Enhanced Optimization</strong> – Leverage AI tools for smarter keyword selection
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <img
                                    alt="SEO Optimization"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                                />
                            </div>
                        </div>

                        {/* Social Media Marketing */}
                        <div className="flex flex-wrap items-center mb-20">
                            <div className="w-full md:w-6/12 px-4">
                                <img
                                    alt="Social Media Marketing"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                />
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="md:pl-12">
                                    <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-4">Social Media Marketing</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500 mb-6">
                                        Strategic social media campaigns that build brand awareness and drive engagement across all platforms.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-strategy"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Strategic Planning</strong> – Tailor content strategies to Facebook, Instagram, LinkedIn, and TikTok
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-palette"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Content Creation</strong> – Develop engaging and brand-aligned visuals, videos, and copy
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-rocket"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Campaign Execution</strong> – Implement both organic and paid strategies to grow reach
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-analytics"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Performance Analysis</strong> – Use metrics and AI-driven insights to refine campaigns
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Performance Marketing */}
                        <div className="flex flex-wrap items-center mb-20">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="md:pr-12">
                                    <div className="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300">
                                        <i className="fas fa-bullhorn text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-4">Performance Marketing (PPC & Beyond)</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500 mb-6">
                                        Data-driven advertising campaigns that maximize ROI and drive qualified leads to your business.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                                                        <i className="fas fa-mouse-pointer"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Pay‑Per‑Click (PPC)</strong> – Run highly targeted ad campaigns across search and social channels
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                                                        <i className="fas fa-flask"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>A/B Testing & CRO</strong> – Test ad variants and landing pages to maximize conversion rates
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                                                        <i className="fas fa-redo"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Retargeting & Affiliates</strong> – Re-engage past visitors and expand through partnerships
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                                                        <i className="fas fa-robot"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Programmatic Campaigns</strong> – Automate ad buying and audience targeting in real time
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <img
                                    alt="Performance Marketing"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                />
                            </div>
                        </div>

                        {/* Analytics & Reporting */}
                        <div className="flex flex-wrap items-center">
                            <div className="w-full md:w-6/12 px-4">
                                <img
                                    alt="Analytics and Reporting"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                />
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="md:pl-12">
                                    <div className="text-orange-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-orange-300">
                                        <i className="fas fa-chart-bar text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold mb-4">Analytics & Reporting</h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500 mb-6">
                                        Comprehensive tracking and reporting to measure success and optimize performance across all channels.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3">
                                                        <i className="fas fa-tachometer-alt"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>KPIs & Insights</strong> – Monitor SEO metrics, social engagement, traffic sources, and PPC ROI
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200 mr-3">
                                                        <i className="fas fa-sync-alt"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        <strong>Performance Optimization</strong> – Iterate campaigns based on data to improve efficiency and effectiveness
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-20 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Results That Speak</h2>
                            <p className="text-lg text-blueGray-600 max-w-3xl mx-auto">
                                Our strategies consistently produce meaningful outcomes for clients across various industries.
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4 mb-8">
                                <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                                            <i className="fas fa-home text-blue-600 text-xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Real Estate Success</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        A real estate firm achieved remarkable results through our integrated digital marketing approach:
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="bg-blue-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-blue-600">8,848</div>
                                            <div className="text-sm text-gray-600">Impressions</div>
                                        </div>
                                        <div className="bg-green-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-green-600">62</div>
                                            <div className="text-sm text-gray-600">Leads</div>
                                        </div>
                                        <div className="bg-purple-50 rounded-lg p-4">
                                            <div className="text-2xl font-bold text-purple-600">2.4%</div>
                                            <div className="text-sm text-gray-600">CTR</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        Through integrated SEO, content creation, social media, and paid campaigns.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 px-4 mb-8">
                                <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-3 mr-4">
                                            <i className="fas fa-laptop text-green-600 text-xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Tech Retail Growth</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        A tech retail brand experienced significant improvements across key metrics:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center">
                                            <i className="fas fa-arrow-up text-green-500 mr-3"></i>
                                            <span className="text-gray-700">Improved domain authority</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-arrow-up text-green-500 mr-3"></i>
                                            <span className="text-gray-700">Higher search rankings</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-arrow-up text-green-500 mr-3"></i>
                                            <span className="text-gray-700">Increased organic traffic</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500 mt-4">
                                        Via structured SEO and content marketing efforts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-blueGray-800 to-blueGray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Ready to Stand Out Online?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    At Ahakyr, we don't just boost visibility—we elevate your digital footprint with intelligent, data-backed marketing solutions. 
                                    From optimizing your website to engaging your audience and converting leads, we're committed to sustainable growth.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today to get started with a custom digital strategy and audit.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
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
