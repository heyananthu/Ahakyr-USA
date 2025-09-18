import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/it-service-banner.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function DataAnalytics() {
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
                                        Turn Your Data into Decisions with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's information-rich world, merely collecting data isn't enough. At Ahakyr, we go beyond reporting to deliver actionable insights—helping businesses make smarter decisions, uncover hidden opportunities, and optimize performance across every function.
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

                {/* Why Data Analytics Matters Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-chart-bar text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Data Analytics Matters
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
Raw data is like untapped oil. With the right pipelines, tools, and interpretive frameworks, you can refine it into clarity, foresight, and competitive advantage. Data analytics lets organizations understand past behavior, detect trends, forecast the future, and recommend optimal next steps.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
Whether you're looking to improve customer retention, streamline operations, optimize pricing, or personalize product offerings, data analytics turns questions into evidence-based strategy.                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Analytics Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Data Analytics Excellence"
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
                                            Data to Decisions
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Whether you're looking to improve customer retention, streamline operations, or optimize pricing, data analytics turns questions into evidence-based strategy.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Ahakyr?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-bullseye text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Business-aligned analytics</h3>
                                        <p className="text-emerald-100">
                                            We design for business questions first, not technology for its own sake
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-cloud text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Modern, scalable architecture</h3>
                                        <p className="text-blue-100">
                                            Cloud-native pipelines, streaming analytics, and serverless compute where needed
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-tachometer-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Analytics you can act on</h3>
                                        <p className="text-purple-100">
                                            Real dashboards, alerting systems, and decision-support outputs—not just static reports
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-handshake text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Ongoing partnership</h3>
                                        <p className="text-orange-100">
                                            We don't walk away at "launch" but help you iterate your insights, models, and dashboards as your data evolves
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Data Analytics Capabilities */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Data Analytics Capabilities</h2>
                                <p className="text-lg text-blueGray-600">Ahakyr offers a full spectrum of analytics services designed to meet businesses wherever they are on their journey</p>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-route text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Analytics Strategy & Roadmapping</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We begin with a clear, business-aligned analytics blueprint—defining key questions, data sources, tooling, governance, and success metrics so that your analytics capability grows in a controlled, impactful way.                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-database text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Preparation & Engineering</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
High-quality analytics begins with clean, structured, well-documented data pipelines. We design and build data ingestion, ETL/ELT workflows, data warehouses or lakes, streaming pipelines, and feature stores to ensure your analytics infrastructure is robust and reliable.                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Exploratory, Diagnostic & Predictive Analytics</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
From uncovering “what happened” and “why it happened” to projecting “what is likely to happen,” we use statistical models, time-series forecasting, segmentation, clustering, and anomaly detection to help you see both the forest and the trees.                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-pie text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Business Intelligence & Visualization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We transform insights into action with interactive dashboards, KPI scorecards, and reporting tools. Whether your team prefers Power BI, Tableau, Looker, or custom front-ends, we help visualize trends, drill into anomalies, and monitor operational performance in real time.                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-stream text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Real-Time & Streaming Analytics</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
For use cases like IoT telemetry, live user-behavior tracking, or operational monitoring, we build event-streaming and real-time analytics pipelines—leveraging tools like Azure Stream Analytics, AWS Kinesis, or Apache Kafka—to ensure your business reacts as fast as data arrives.                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-users text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Customer & Behavioral Analytics</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Want to know what drives user engagement, churn, or conversion? We apply behavioral analytics methods to help you understand and predict customer actions—turning usage data into personalized retention strategies, smart recommendations, or targeted campaigns.                                    </p>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cog text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Analytics-as-a-Service (AaaS)</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Not ready to build a full internal analytics team? Ahakyr can deliver “analytics as a service”—from pipeline maintenance and dashboard updates to ad hoc modeling and insights delivery. We design for scalability, so your analytics capability can grow without constant reinvestment.                                    </p>
                                </div>

                                {/* Service 8 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-pink-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-pink-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tachometer-alt text-pink-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Analytics Performance & Optimization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Data volumes grow, and so should your analytics architecture. We routinely monitor query performance, storage usage, pipeline latency, and compute cost—then optimize for speed, cost, and usability as your data strategy matures.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How We Deliver Value Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">How We Deliver Value</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    phase: "Discovery & Goal Setting",
                                    description: "Clear alignment on business outcomes, data readiness, KPI targets, and tech stack",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    phase: "Data Pipeline Engineering",
                                    description: "Reliable, maintainable, and documented systems to bring raw data into analytics-ready form",
                                    icon: "fa-code-branch",
                                    color: "bg-emerald-500"
                                },
                                {
                                    phase: "Insight Generation",
                                    description: "Exploratory analysis, hypothesis testing, predictive modeling, and segmentation",
                                    icon: "fa-lightbulb",
                                    color: "bg-purple-500"
                                },
                                {
                                    phase: "Dashboarding & Reporting",
                                    description: "Intuitive visualizations and reporting systems to monitor and act on those insights",
                                    icon: "fa-chart-bar",
                                    color: "bg-orange-500"
                                },
                                {
                                    phase: "Operational Monitoring",
                                    description: "Alerts, latency tracking, and performance metrics to keep your analytics healthy and responsive",
                                    icon: "fa-eye",
                                    color: "bg-red-500"
                                },
                                {
                                    phase: "Iterative Optimization",
                                    description: "Continuous feedback loops to refine data capture, analytics models, and visualizations",
                                    icon: "fa-sync",
                                    color: "bg-teal-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                                        <div className={`${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                                            <i className={`fas ${item.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.phase}</h3>
                                        <p className="text-gray-600 leading-relaxed text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Benefits Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Who Benefits from Our Services</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-store text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Retail & eCommerce</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Optimize pricing, inventory management, and customer lifecycle through advanced analytics and behavioral modeling.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-bullhorn text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Marketing Teams</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Improve conversion and attribution through behavior modeling and data-driven campaign optimization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-cogs text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Operations & Logistics</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Real-time process monitoring, anomaly detection, and predictive maintenance for operational excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-crown text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Executives</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Build a data-driven culture with self-service reporting, KPI monitoring, and predictive foresight for strategic decision-making.
                                        </p>
                                    </div>
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
                                    Ready to Turn Your Data into Your Superpower?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Contact Ahakyr today for a complimentary analytics readiness assessment and a custom roadmap to insight.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Let's build your organization's data-driven future—one clear KPI at a time.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free Assessment
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
