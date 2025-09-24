
import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/performencemarketing1.jpg';
import banner2 from '../../assets/banners/performencemarketing2.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PerformenceMarketing() {
    return (
        <>
            <Navbar transparent />
            <main>
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover"
                        style={{ backgroundImage: `url(${banner})` }}
                    >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                                <div className="md:pr-12 mt-12 md:mt-1">
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl">
                                        Pay for Outcomes. <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                            Maximize Results with Ahakyr
                                        </span>
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        At Ahakyr, we believe every marketing dollar should directly contribute to your business goals. Our Performance Marketing service is built to deliver measurable results — leads, sales, app installs, or other key actions — while optimizing cost, targeting, and ROI across digital channels.
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

                {/* What Is Performance Marketing Section */}
                <section className="pb-20 bg-white -mt-32">
                    <div className="container mx-auto px-4 ">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fab fa-pinterest text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What Is Performance Marketing
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Performance Marketing is a results-driven marketing model: you pay for specific, agreed-upon outcomes (for example, a conversion, a click, or an install), not merely for exposure. It’s about measurable performance, continuous optimization, and transparency. (Enterprise Wired, Highzeal, RepurTech)
                                </p>
                                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Compared to traditional media, social platforms offer strong ROI—low cost content, targeted ads, and flexible budgets.
                                </p> */}
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Performance Marketing Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto md:mt-12">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Social Media Marketing Excellence"
                                        src={banner2}
                                        className="w-full align-middle rounded-t-lg "
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
                                            Performance Marketing
                                        </h4>
                                        {/* <p className="text-md font-light mt-2 text-white">
                                            Through a mix of organic content, influencer collaborations, and paid social advertising, social media becomes a powerful channel to drive qualified traffic and conversions.
                                        </p> */}
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Social Media Marketing Matters Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Key Benefits</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-users text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Massive Reach & Visibility</h3>
                                        <p className="text-emerald-100">
                                            With billions of users across platforms, social media enables you to connect with large audiences, reaching both niche segments and broad markets.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-dollar-sign text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Cost-Effective Brand Growth</h3>
                                        <p className="text-blue-100">
                                            Compared to traditional media, social platforms offer strong ROI—low cost content, targeted ads, and flexible budgets.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-comments text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Real-Time Engagement & Customer Feedback</h3>
                                        <p className="text-purple-100">
                                            Brands can communicate directly with their audience, address concerns, gather feedback, and humanize their image.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-chart-line text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Lead Generation & Sales Amplification</h3>
                                        <p className="text-orange-100">
                                            Through a mix of organic content, influencer collaborations, and paid social advertising, social media becomes a powerful channel to drive qualified traffic and conversions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Social Media Marketing Services</h2>
                                <p className="text-lg text-blueGray-600 max-w-4xl mx-auto">
                                    Ahakyr delivers end-to-end social media marketing solutions, designed for both strategy and execution.
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Social Media Strategy & Planning</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We define your goals, identify target audiences, and choose platforms that best match your audience (Facebook, Instagram, LinkedIn, TikTok).
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-palette text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Content Creation & Creative Campaigns</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        From compelling visuals, infographics, videos to storytelling, we craft content that resonates, informs, and converts.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-heart text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Community Management & Engagement</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We manage conversations—responding to comments, messages, and mentions—to foster loyalty and trust.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-handshake text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Influencer & Partner Collaborations</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Amplify reach by partnering with influencers, industry experts, and advocates who align with your brand values.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-bullhorn text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Paid Advertising & Campaigns</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        For faster growth and targeted outreach, we run social ad campaigns—optimizing targeting, creatives, and budget.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-bar text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Analytics, Tracking & Optimization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We monitor engagement rates, reach, impressions, conversion metrics, and audience behavior for continuous refinement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Key Performance Marketing Services */}
                <section className="py-20 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Key Performance Marketing Services</h2>
                            <p className="text-lg text-blueGray-600 max-w-4xl mx-auto">
                                Here are the core components of what Ahakyr delivers under Performance Marketing:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                            {/* Service Cards */}
                            {[
                                {
                                    service: "Pay-Per-Click (PPC) Advertising",
                                    description: "We run optimized campaigns on Google Ads, Bing, and other search networks. Keyword targeting, bidding strategies, ad creatives, budgeting — all aimed at conversions.",
                                    icon: "fa-mouse-pointer",
                                    color: "bg-blue-100 text-blue-600"
                                },
                                {
                                    service: "Social & Display Advertising",
                                    description: "Targeted ads on Facebook, Instagram, LinkedIn, TikTok, programmatic display networks. Use retargeting, lookalike audiences, dynamic ads to reach the right users.",
                                    icon: "fa-share-alt",
                                    color: "bg-green-100 text-green-600"
                                },
                                {
                                    service: "Affiliate & Partner Marketing",
                                    description: "Work with publishers, influencers, affiliates who promote your offering. You pay only for validated leads/sales or other agreed actions.",
                                    icon: "fa-handshake",
                                    color: "bg-purple-100 text-purple-600"
                                },
                                {
                                    service: "Lead Generation & Conversion Optimization (CRO)",
                                    description: "Build high-converting landing pages, optimize site/user flows, A/B test call-to-actions, forms, copy, etc., to raise conversion rates.",
                                    icon: "fa-funnel-dollar",
                                    color: "bg-orange-100 text-orange-600"
                                },
                                {
                                    service: "Retargeting / Remarketing",
                                    description: "Re-engage visitors or users who interacted but didn't convert. Use dynamic / personalized creative to drive conversions from warm leads.",
                                    icon: "fa-redo-alt",
                                    color: "bg-red-100 text-red-600"
                                },
                                {
                                    service: "Mobile & App-Install Campaigns",
                                    description: "Promote your apps with install & in-app action campaigns. Optimize for quality users, not just volume.",
                                    icon: "fa-mobile-alt",
                                    color: "bg-teal-100 text-teal-600"
                                },
                                {
                                    service: "Email Marketing & Nurture Journeys",
                                    description: "Design email sequences (welcome, cart recovery, re-engagement). Use segmentation & personalization to maximize conversions.",
                                    icon: "fa-envelope",
                                    color: "bg-yellow-100 text-yellow-600"
                                },
                                {
                                    service: "Analytics, Attribution & Reporting",
                                    description: "Track campaign performance across channels, use multi-touch attribution, monitor key KPI's (CPA, ROAS, LTV etc.), generate actionable reports.",
                                    icon: "fa-chart-line",
                                    color: "bg-indigo-100 text-indigo-600"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4" style={{ borderColor: item.color.split(' ')[1] }}>
                                    <div className="flex items-center mb-6">
                                        <div className={`${item.color} rounded-full p-4 mr-4`}>
                                            <i className={`fas ${item.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{item.service}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Ahakyr Stands Out */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Ahakyr Stands Out</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Results-Focused, Data-Driven",
                                    description: "We align campaigns with your business goals, constantly monitor performance, and pivot strategy based on what the data tells us.",
                                    icon: "fa-bullseye",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    title: "Cost Effectiveness",
                                    description: "Since you pay for outcomes, we work to ensure cost per acquisition (CPA), cost per lead (CPL), and return on ad spend (ROAS) are optimized.",
                                    icon: "fa-dollar-sign",
                                    color: "from-green-500 to-teal-500"
                                },
                                {
                                    title: "Channel Expertise",
                                    description: "Whether it's search, social, mobile, affiliate, or display — we've done it. We pick channels based on your audience, budget, and goals.",
                                    icon: "fa-network-wired",
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    title: "Agile Optimization",
                                    description: "We test, learn, and adjust creatives, targeting, ad spend and messaging constantly to squeeze maximum performance.",
                                    icon: "fa-sync-alt",
                                    color: "from-orange-500 to-red-500"
                                },
                                {
                                    title: "Transparent Reporting",
                                    description: "You get clear access to metrics, dashboards, insights — week by week, month by month — so you always know what's working and what's not.",
                                    icon: "fa-chart-bar",
                                    color: "from-indigo-500 to-blue-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                                    <div className={`bg-gradient-to-r ${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                                        <i className={`fas ${item.icon} text-2xl`}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Performance Marketing Process */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">Performance Marketing Process with Ahakyr</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Goal Setting",
                                    description: "We start with defining clear goals: what counts as a 'conversion' for you (sale? lead? subscription?), your budget, your timeline, audience, benchmarks.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Audit & Strategy Development",
                                    description: "Evaluate current digital footprint, competitor landscape, audience behavior, past campaign performance, channel potential. Then build a multi-channel strategy.",
                                    icon: "fa-clipboard-list",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Creative & Campaign Planning",
                                    description: "Ad copy, visuals, landing pages, messaging. Setup tracking (pixels, tags), define targeting (demographics, behavior, locations).",
                                    icon: "fa-paint-brush",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Launch & Monitor",
                                    description: "Go live with campaigns. Monitor performance metrics daily/weekly. Identify underperforming elements (ads, keywords, targeting) and refine.",
                                    icon: "fa-rocket",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Optimization & Scaling",
                                    description: "Scale what's working. Pause or adjust what's not. Run A/B tests, try new creatives, test new channels.",
                                    icon: "fa-chart-line",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Reporting & Insights",
                                    description: "Regular performance reports: CPA, ROAS, conversion rates, engagement metrics. Insights that guide next steps.",
                                    icon: "fa-file-alt",
                                    color: "bg-teal-500"
                                },
                                {
                                    step: "07",
                                    title: "Continuous Improvement",
                                    description: "Markets, audience behavior, platforms evolve — so do we. We keep refining with new data, new channels, new creative ideas.",
                                    icon: "fa-arrows-alt",
                                    color: "bg-yellow-500"
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
                                            <i className={`fas ${process.icon} text-2xl`}></i>
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

                {/* Who Benefits Most */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Who Benefits Most</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    icon: "fa-shopping-cart",
                                    title: "E-commerce Brands",
                                    color: "bg-red-500",
                                    description: "Looking to increase sales or reduce cart abandonment"
                                },
                                {
                                    icon: "fa-laptop-code",
                                    title: "SaaS / Apps",
                                    color: "bg-blue-500",
                                    description: "Seeking installs, trial signups, or subscription revenue growth"
                                },
                                {
                                    icon: "fa-map-marker-alt",
                                    title: "Local Service Businesses",
                                    color: "bg-green-500",
                                    description: "Wanting leads or inbound calls"
                                },
                                {
                                    icon: "fa-building",
                                    title: "Enterprises",
                                    color: "bg-purple-500",
                                    description: "Optimizing ad spend across markets / geographies"
                                },
                                {
                                    icon: "fa-chart-line",
                                    title: "Growth-Focused Businesses",
                                    color: "bg-orange-500",
                                    description: "Any business that wants measurable ROI, not just visibility"
                                }
                            ].map((useCase, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-white rounded-2xl p-8 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className={`${useCase.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${useCase.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 mb-2">{useCase.title}</h3>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition duration-300">{useCase.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Common Metrics & KPIs */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">Common Metrics & KPIs We Track</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    metric: "Conversion Rate",
                                    abbreviation: "CR",
                                    icon: "fa-percentage"
                                },
                                {
                                    metric: "Cost Per Acquisition",
                                    abbreviation: "CPA",
                                    icon: "fa-dollar-sign"
                                },
                                {
                                    metric: "Return On Ad Spend",
                                    abbreviation: "ROAS",
                                    icon: "fa-chart-pie"
                                },
                                {
                                    metric: "Cost Per Click / Lead",
                                    abbreviation: "CPC/CPL",
                                    icon: "fa-mouse-pointer"
                                },
                                {
                                    metric: "Lifetime Value of Customer",
                                    abbreviation: "LTV",
                                    icon: "fa-user-plus"
                                },
                                {
                                    metric: "Click-through Rate",
                                    abbreviation: "CTR",
                                    icon: "fa-hand-pointer"
                                },
                                {
                                    metric: "Bounce Rate",
                                    abbreviation: "BR",
                                    icon: "fa-sign-out-alt"
                                },
                                {
                                    metric: "Post-Click Experience",
                                    abbreviation: "PCE",
                                    icon: "fa-eye"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className={`fas ${item.icon} text-white text-lg`}></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.metric}</h3>
                                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                                        {item.abbreviation}
                                    </span>
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
                            <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Start Delivering Outcomes, <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Not Just Traffic</span>
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    If you're ready to invest smartly in marketing that pays only when you see results, Ahakyr's Performance Marketing is the partner you need. Let's identify the right channels, craft high-impact campaigns, and drive growth that's measurable.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Free Performance Audit
                                    </Link>
                                    {/* <Link
                                        to="/contact"
                                        className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
                                    >
                                        Schedule Roadmap Discussion
                                    </Link> */}
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
