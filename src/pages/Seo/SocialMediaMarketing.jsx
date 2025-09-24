import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/socialmediamarketing.jpg';
import banner2 from '../../assets/banners/seo-banner4.avif';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function SocialMediaMarketing() {
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
                                        Build Community. Engage Audiences. Amplify Your Brand with Ahakyr.
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Social media isn't just a channel—it's where conversations happen, relationships are built, and trust is earned. At Ahakyr, our Social Media Marketing services help you create a powerful social presence, cultivate meaningful engagement, and drive measurable results. Whether you're growing brand awareness, generating leads, or building loyalty, we're your strategic partner every step of the way.
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

                {/* Why Social Media Marketing Matters Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fab fa-facebook text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Social Media Marketing Matters
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    With billions of users across platforms, social media enables you to connect with large audiences, reaching both niche segments and broad markets.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    Compared to traditional media, social platforms offer strong ROI—low cost content, targeted ads, and flexible budgets.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Social Media Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Social Media Marketing Excellence"
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
                                            Community to Conversion
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Through a mix of organic content, influencer collaborations, and paid social advertising, social media becomes a powerful channel to drive qualified traffic and conversions.
                                        </p>
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

                {/* Our Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Approach: How We Deliver Value</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Audit",
                                    description: "We review your current social presence, content, competitors, and audience behavior to establish benchmarks.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Strategy & Content Calendar",
                                    description: "Develop a roadmap and content calendar defining themes, campaign schedules, platforms, and formats.",
                                    icon: "fa-calendar",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Content Production",
                                    description: "Create visuals, copy, videos. Ensure brand consistency and platform appropriateness.",
                                    icon: "fa-video",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Campaign Launch & Promotion",
                                    description: "Roll out social posts, ads, influencer content. Align with seasonal events, product launches, or specific promotions.",
                                    icon: "fa-rocket",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Monitoring & Optimization",
                                    description: "Track KPIs, test different creatives, posting times, formats. Adjust based on performance.",
                                    icon: "fa-chart-line",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Reporting & Scale",
                                    description: "Provide transparent insights and recommendations. Scale up what works; prune what doesn't.",
                                    icon: "fa-chart-bar",
                                    color: "bg-teal-500"
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

                {/* Social Media Best Practices Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Social Media Best Practices We Follow</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Our proven methodologies ensure your social media strategy delivers maximum impact and engagement.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                                {[
                                    {
                                        icon: "fa-camera",
                                        title: "High-Quality Visuals & Short-Video Content",
                                        description: "Use high-quality visuals and short-video content to grab attention quickly.",
                                        color: "bg-blue-500"
                                    },
                                    {
                                        icon: "fa-clock",
                                        title: "Consistent Posting Frequency & Timing",
                                        description: "Maintain consistent posting frequency and timing informed by audience behavior.",
                                        color: "bg-green-500"
                                    },
                                    {
                                        icon: "fa-users",
                                        title: "Foster Two-Way Engagement",
                                        description: "Foster two-way engagement: replies, polls, user-generated content. Build a community.",
                                        color: "bg-purple-500"
                                    },
                                    {
                                        icon: "fa-bullseye",
                                        title: "Authentic Content Alignment",
                                        description: "Align content tone and voice authentically to your brand and audience.",
                                        color: "bg-orange-500"
                                    },
                                    {
                                        icon: "fa-chart-line",
                                        title: "Data-Driven Iteration",
                                        description: "Use data-driven iteration: test, learn, adjust. Metrics like reach, engagement, click-through rate, and conversion are monitored closely.",
                                        color: "bg-red-500"
                                    }
                                ].map((practice, index) => (
                                    <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
                                        <div className="flex items-start space-x-6">
                                            <div className={`${practice.color} text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                                <i className={`fas ${practice.icon} text-xl`}></i>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-bold text-gray-800 mb-3">{practice.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{practice.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Partner with Ahakyr Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Partner with Ahakyr?</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We bring strategic thinking, creative excellence, and measurable results to every social media campaign.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    icon: "fa-chess",
                                    title: "Strategic, Not Just Tactical",
                                    description: "We don't just post content—we align every post with business goals.",
                                    color: "from-blue-500 to-blue-700"
                                },
                                {
                                    icon: "fa-palette",
                                    title: "Creative Team & Skilled Execution",
                                    description: "From copywriters and designers to video editors and campaign managers, we bring professional quality.",
                                    color: "from-green-500 to-green-700"
                                },
                                {
                                    icon: "fa-chart-bar",
                                    title: "Full Transparency & Measurable ROI",
                                    description: "Regular reports, objective metrics, and honest evaluation of what works.",
                                    color: "from-purple-500 to-purple-700"
                                },
                                {
                                    icon: "fa-sync-alt",
                                    title: "Agile & Scalable",
                                    description: "Increase or refine spending, adjust strategy quickly based on performance, scale what works.",
                                    color: "from-orange-500 to-orange-700"
                                },
                                {
                                    icon: "fa-globe",
                                    title: "Platform Agnosticism, Deep Expertise",
                                    description: "We work across platforms, but know the ins & outs of each, so your content shines everywhere.",
                                    color: "from-red-500 to-red-700"
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
                                    <div className="text-center">
                                        <div className={`bg-gradient-to-r ${benefit.color} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transform transition duration-300 group-hover:scale-110 shadow-lg`}>
                                            <i className={`fas ${benefit.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition duration-300">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition duration-300">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ideal Use Cases Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Ideal Use Cases & Who We Serve</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We deliver specialized social media marketing solutions across multiple business types and industries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: "fa-rocket", title: "SMBs & Startups", color: "bg-red-500", description: "Launching new products or seeking brand visibility" },
                                { icon: "fa-shopping-cart", title: "E-commerce Businesses", color: "bg-blue-500", description: "Drive traffic, sales, and customer loyalty via social channels" },
                                { icon: "fa-briefcase", title: "B2B Firms", color: "bg-green-500", description: "Thought leadership and lead generation on LinkedIn, Twitter" },
                                { icon: "fa-handshake", title: "Service-Based Businesses", color: "bg-purple-500", description: "Reputation building, community trust, and customer engagement" },
                                { icon: "fa-chart-line", title: "Growth-Focused Organizations", color: "bg-orange-500", description: "Combining organic content + paid ads for faster growth" },
                                { icon: "fa-users", title: "Community Builders", color: "bg-teal-500", description: "Building loyal followings and brand advocates" }
                            ].map((useCase, index) => (
                                <div key={index} className="text-center group h-full">
                                    <div className="bg-gray-100 rounded-2xl p-8 h-64 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
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

                {/* FAQs Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Common Questions (FAQs)</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">How often should I post on social media?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        It depends on your audience and platforms. We generally recommend a consistent schedule—e.g., multiple posts per week per platform—with special campaign content and stories in between.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Do you handle content creation in-house?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Yes. We provide copywriting, visual design, video editing, and influencer content. Or we can collaborate with your internal team, depending on your preference.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Can you manage both organic and paid social efforts?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Absolutely. We integrate both to maximize reach, engagement, and conversion, using budget where it makes sense.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">What metrics will you report on?</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Typical metrics include reach/impressions, follower growth, engagement rate (likes, shares, comments), website clicks, conversion events (leads, sales), and return on ad spend (ROAS) for paid social campaigns.
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
                                    Ready to Elevate Your Social Presence?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    With Ahakyr as your partner, your social media can become a powerful growth engine—driving awareness, engagement, loyalty, and business results.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Get in touch today for a free social media audit and strategy session.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free Social Media Audit
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