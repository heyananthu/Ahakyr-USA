import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/data-service-banner.avif';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function DataEntryServices() {
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
                                        Fast, Accurate & Scalable Data Entry Solutions from Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In today's data-driven world, accurate and timely data input is essential—and the right data entry partner can give your business a competitive edge. At Ahakyr, our Data Entry Services help you convert raw information into clean, usable digital formats so your teams can focus on higher-value tasks.
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
                                    <i className="fas fa-database text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Choose Ahakyr?
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    From healthcare to e-commerce, finance to legal—our experienced data entry specialists deliver context-aware, accurate solutions tailored to your industry.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    We combine manual precision with automated efficiency, ensuring high-quality data conversion with reliable turnaround times.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Data Transformation!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Data Entry Excellence"
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
                                            Data to Insights
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Transform your raw information into clean, structured data that powers your business decisions and operations.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Our Services Section */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">What We Offer</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-keyboard text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Manual Data Entry</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Human operators enter data from paper documents, scanned images, handwritten forms, or PDFs into digital systems—ensuring high accuracy and flexibility.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-robot text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Automated & Hybrid Entry</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        OCR and intelligent capture tools assist in digitization, followed by human review and cleanup—boosting speed without sacrificing quality.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-broom text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Cleansing & Standardization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Removing duplicates, correcting errors, normalizing formats, validating against reference data, and ensuring consistent structure.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-file-import text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Document Conversion & Digitization</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Turning physical forms, printed reports, handwritten notes, or legacy documents into searchable digital files.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-globe text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Online & Offline Entry</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Real-time access via web portals or batch uploads of offline documents, handled efficiently across multiple channels.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-chart-line text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Processing & Enrichment</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Transforming raw entries into structured, actionable datasets—adding metadata, validating, formatting, and preparing for analytics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">


                            {/* Why Outsource Data Entry Table */}
                            <div className="mt-20">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-blueGray-800 mb-4">Why Outsource Data Entry to Ahakyr?</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                                        <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Advantage</th>
                                                <th className="px-6 py-4 text-left text-lg font-bold">Benefit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Cost Efficiency</td>
                                                <td className="px-6 py-4 text-gray-600">Save on hiring, training, software licensing, and infrastructure by leveraging our specialist team.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Scalability & Flexibility</td>
                                                <td className="px-6 py-4 text-gray-600">Scale up or down quickly depending on workload or project size—No need to maintain a large in-house team.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">High Accuracy</td>
                                                <td className="px-6 py-4 text-gray-600">We apply multi-stage quality checks, review workflows, and experienced human oversight to ensure data integrity.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Faster Turnaround</td>
                                                <td className="px-6 py-4 text-gray-600">Our teams are trained to deliver bulk data entry projects quickly, with reliable timelines.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Data Security & Confidentiality</td>
                                                <td className="px-6 py-4 text-gray-600">We implement best practices for data protection, secure file transfer, access controls, and anonymization where needed.</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50 transition duration-300">
                                                <td className="px-6 py-4 font-semibold text-gray-800">Focus on Core Business</td>
                                                <td className="px-6 py-4 text-gray-600">By outsourcing repetitive or large-volume data entry tasks, your teams can focus on strategy, analysis, and growth.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                        </section>


                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Requirements & Source Assessment",
                                    description: "Review raw input, format, source, volume, and desired output format to create a tailored data entry strategy.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Workflow Design & Task Structuring",
                                    description: "Plan work in batches, assign roles, define checkpoints, templates, and establish realistic turnaround times.",
                                    icon: "fa-sitemap",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Data Capture & Entry",
                                    description: "Manual key-in or verification, review OCR-generated content, ensure consistency and correctness across all entries.",
                                    icon: "fa-keyboard",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Quality Assurance & Validation",
                                    description: "Review for errors, missing values, formatting issues, duplications, and logical checks before delivery.",
                                    icon: "fa-check-double",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Delivery & Integration",
                                    description: "Hand off completed data in preferred format and integrate into downstream systems as needed for seamless operation.",
                                    icon: "fa-handshake",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Ongoing Support & Updates",
                                    description: "Manage recurring tasks, support data pipelines long-term, and provide continuous optimization and maintenance.",
                                    icon: "fa-tools",
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

                {/* Industries We Serve Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries & Use-Cases</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We deliver specialized data entry solutions across multiple industries, tailored to your specific requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: "fa-shopping-cart", title: "E-commerce & Retail", description: "Product catalog uploads, inventory listings, pricing updates, customer database entries.", color: "bg-green-500" },
                                { icon: "fa-heartbeat", title: "Healthcare & Insurance", description: "Patient intake forms, claim forms, prescription logs, clinical notes digitization.", color: "bg-red-500" },
                                { icon: "fa-university", title: "Finance & Banking", description: "Transaction records, customer forms, loan documents, KYC verification data.", color: "bg-blue-500" },
                                { icon: "fa-truck", title: "Logistics & Supply Chain", description: "Shipment logs, tracking data, delivery records, inventory movements.", color: "bg-orange-500" },
                                { icon: "fa-gavel", title: "Legal & Compliance", description: "Contract indexing, legal forms digitization, document scans, archive cleanup.", color: "bg-purple-500" },
                                { icon: "fa-chart-bar", title: "Market Research & CRM", description: "Survey responses, lead lists, contact information, customer feedback, polling sheets.", color: "bg-teal-500" }
                            ].map((industry, index) => (
                                <div key={index} className="text-center group">
                                    <div className="bg-gray-100 rounded-2xl p-8 h-full flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                                        <div className="flex flex-col items-center justify-center mb-4">
                                            <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform transition duration-300 group-hover:scale-110`}>
                                                <i className={`fas ${industry.icon} text-xl`}></i>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition duration-300 mb-3">{industry.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Clients Trust Ahakyr Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="mt-20 container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6 mt-12">Why Clients Trust Ahakyr</h2>
                        </div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="bg-blue-100 rounded-full p-3">
                                            <i className="fas fa-bullseye text-blue-600 text-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Accuracy is our priority:</h3>
                                        <p className="text-gray-600">We apply multiple checkpoints and manually audit large data batches to ensure quality.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="bg-green-100 rounded-full p-3">
                                            <i className="fas fa-users text-green-600 text-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Flexible staffing models:</h3>
                                        <p className="text-gray-600">We can quickly respond to peaks in demand (e.g., seasonal data rollouts or big migrations).</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="bg-purple-100 rounded-full p-3">
                                            <i className="fas fa-cogs text-purple-600 text-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Hybrid manual/automated workflows:</h3>
                                        <p className="text-gray-600">We strike the right balance between speed and precision.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="bg-red-100 rounded-full p-3">
                                            <i className="fas fa-shield-alt text-red-600 text-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Security is built in:</h3>
                                        <p className="text-gray-600">We support NDA agreements, secure file transfer protocols, access management, and anonymized processing where required.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="bg-orange-100 rounded-full p-3">
                                            <i className="fas fa-dollar-sign text-orange-600 text-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2">Transparent pricing with clear SLAs:</h3>
                                        <p className="text-gray-600">You pay only for the work delivered, with clear expectations on timelines and quality.</p>
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
                                    Ready to Reduce Manual Burden & Improve Data Reliability?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Partner with Ahakyr to streamline your business's data entry pipelines. Whether you need a one-time digitization project, recurring data uploads, or ongoing maintenance of high-volume datasets, our team is ready to deliver clean, structured data with speed and security.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a complimentary assessment and data strategy consultation.
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