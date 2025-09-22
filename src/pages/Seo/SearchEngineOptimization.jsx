import React from "react";
import { Link } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from '../../assets/banners/seo-image.jpg';

export default function SearchEngineOptimization() {
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
                                        Be Found First. Grow Organically with Ahakyr.
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In a digital world where most customers begin their journey with search engines, ranking high organically means everything. At Ahakyr, our Search Engine Optimization (SEO) services focus on boosting your visibility, driving qualified traffic, and converting visitors into loyal customers—all through sustainable, white-hat methods.
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
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                {/* What Is SEO & Why It Matters */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">What Is SEO & Why It Matters</h2>
                            <p className="text-blueGray-600 max-w-4xl mx-auto mt-4">
                                Search Engine Optimization refers to the practice of improving a website’s visibility in the "organic" (non-paid) search results of search engines like Google, Bing, etc. It involves optimizing many factors—from site speed, content relevance, keyword targeting, to backlinks—so that your site appears higher in search engine results pages (SERPs).
                            </p>
                            <ul className="list-disc list-inside text-blueGray-600 mt-6 max-w-2xl mx-auto text-left">
                                <li>Attract targeted, relevant traffic without paying for each click</li>
                                <li>Build brand credibility and trust with users who see you in top results</li>
                                <li>Improve user experience through faster pages, mobile optimization, clean navigation—factors that Google uses when ranking pages</li>
                                <li>Maximize long-term return on investment: unlike paid ads, the effects of SEO compound over time</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What Ahakyr’s SEO Service Includes */}
                <section className="pb-20 bg-blueGray-200 py-6">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">
                                What Ahakyr’s SEO Service Includes
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-14">
                            {/* SEO Audit & Strategy */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-emerald-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-search text-emerald-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">SEO Audit & Strategy</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Comprehensive site audit (technical issues, on-page optimizations, indexability, load speed, mobile friendliness)</li>
                                    <li>Competitor research – what keywords they rank for, their backlink sources, strengths/weaknesses</li>
                                    <li>Keyword research & mapping – finding high value, relevant keywords (short-tail, long-tail) aligned with intent and business priorities</li>
                                </ul>
                            </div>
                            {/* On-Page SEO */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-file-alt text-blue-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">On-Page SEO</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Optimization of page titles, meta descriptions, headers, image alt text, URLs</li>
                                    <li>Content optimization: ensuring copy answers user intent, uses keywords naturally, is well structured, engaging</li>
                                    <li>Internal linking strategy to help with navigation, distributing page authority, and improving engagement</li>
                                </ul>
                            </div>
                            {/* Technical SEO */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-purple-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-cogs text-purple-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Technical SEO</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Site architecture review: ensuring clean code, good site hierarchy, XML sitemaps, robots.txt, canonical tags</li>
                                    <li>Speed and performance optimization: browser caching, minifying resources, compressing images, etc.</li>
                                    <li>Mobile responsiveness: making sure the site works well on all devices (phones, tablets)</li>
                                    <li>Security & SSL, site reliability, monitoring crawlability</li>
                                </ul>
                            </div>
                            {/* Off-Page SEO & Authority Building */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-orange-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-link text-orange-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Off-Page SEO & Authority Building</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>High-quality backlink building from relevant, authoritative sites</li>
                                    <li>Guest posting, content marketing, digital PR to get mentions and links</li>
                                    <li>Local SEO where relevant: Google My Business / Maps optimization, local directory listings, reviews</li>
                                </ul>
                            </div>
                            {/* Content Strategy & Creation */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-green-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-pen-nib text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Content Strategy & Creation</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Blog posts, articles, guides aligned with keywords and user questions</li>
                                    <li>Evergreen content that continues to drive traffic and reinforce authority over time</li>
                                    <li>Refreshing old content: updating, expanding, or restructuring it to maintain rankings</li>
                                </ul>
                            </div>
                            {/* Monitoring, Reporting & Continuous Optimization */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-4">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-chart-line text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Monitoring, Reporting & Continuous Optimization</h3>
                                </div>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Analytics setup and tracking: traffic, ranking changes, bounce rates, conversions, etc.</li>
                                    <li>Regular reporting: monthly or quarterly performance reports with insights and action items</li>
                                    <li>Iterative adjustments: based on what’s working or not (keyword shifts, algorithm updates, competitive moves)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Process: How We Work</h2>
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
                                        <td className="px-6 py-4 font-semibold text-gray-800">Discovery & Goal Alignment</td>
                                        <td className="px-6 py-4 text-gray-600">We listen first: your business goals, target audience, past marketing activity, current SEO status.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Audit & Strategy Development</td>
                                        <td className="px-6 py-4 text-gray-600">Comprehensive insights to define where you are, where you could be, and what needs to be fixed/improved.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Implementation Phase</td>
                                        <td className="px-6 py-4 text-gray-600">On-page fixes, content creation, technical improvements, link strategies—all rolled out in phases for better control and measurement.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Monitor & Report</td>
                                        <td className="px-6 py-4 text-gray-600">Regular tracking of KPIs, rankings, traffic, user behavior; deliver reports with clear results and next steps.</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Ongoing Growth & Maintenance</td>
                                        <td className="px-6 py-4 text-gray-600">SEO is never “done”—we iterate based on data, algorithm updates, and business evolution.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Benefits & Value Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Benefits & Value You’ll See</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-lg font-bold">What You Gain</th>
                                        <th className="px-6 py-4 text-left text-lg font-bold">Why It Matters</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Increased Qualified Traffic</td>
                                        <td className="px-6 py-4 text-gray-600">More potential customers arriving at your site naturally</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Improved Brand Visibility & Trust</td>
                                        <td className="px-6 py-4 text-gray-600">Top SERP placements build credibility</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Better Conversion Rates</td>
                                        <td className="px-6 py-4 text-gray-600">Visitors from organic search tend to convert better over time</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Lower Long-Term Cost per Lead</td>
                                        <td className="px-6 py-4 text-gray-600">Once visibility is established, organic traffic costs less</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Enhanced User Experience</td>
                                        <td className="px-6 py-4 text-gray-600">Faster, mobile-friendly, well-organized sites retain visitors</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition duration-300">
                                        <td className="px-6 py-4 font-semibold text-gray-800">Sustainable Competitive Advantage</td>
                                        <td className="px-6 py-4 text-gray-600">Staying ahead of algorithm changes and competitor moves</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* SEO Packages / Models Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">SEO Packages / Models (Tailored to Your Needs)</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                We offer flexible models depending on stage, scope, and budget. Some common packages:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                            {[{
                                label: "Starter SEO (for small/local businesses)",
                                icon: "fa-rocket",
                                color: "bg-emerald-100 text-emerald-600"
                            }, {
                                label: "E-commerce SEO (product pages, category optimization)",
                                icon: "fa-shopping-cart",
                                color: "bg-blue-100 text-blue-600"
                            }, {
                                label: "Enterprise / Large-Scale & Technical SEO",
                                icon: "fa-building",
                                color: "bg-purple-100 text-purple-600"
                            }, {
                                label: "Local SEO for businesses targeting specific geographies",
                                icon: "fa-map-marker-alt",
                                color: "bg-orange-100 text-orange-600"
                            }].map((pkg, idx) => (
                                <div key={idx} className="bg-blueGray-50 rounded-2xl p-6 text-center shadow-sm">
                                    <div className="flex justify-center mb-4">
                                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${pkg.color}`}>
                                            <i className={`fas ${pkg.icon} text-2xl`}></i>
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-blueGray-800 mb-2">{pkg.label}</h3>
                                    <p className="text-blueGray-600">Every package includes a baseline of audits, optimizations, content work, and ongoing reporting—but gets customized for your site’s complexity and business objectives.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Ahakyr Builds Better SEO Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Ahakyr Builds Better SEO</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
                            {[{
                                title: "Deep expertise in both technical and content SEO, backed by data-first thinking",
                                icon: "fa-brain",
                                color: "bg-emerald-100 text-emerald-600"
                            }, {
                                title: "Transparent / white-hat practices—no spammy or short-cut tactics that risk penalties",
                                icon: "fa-shield-alt",
                                color: "bg-blue-100 text-blue-600"
                            }, {
                                title: "Focus on business outcomes: traffic that converts, not just empty clicks",
                                icon: "fa-bullseye",
                                color: "bg-purple-100 text-purple-600"
                            }, {
                                title: "Long-term partnership: we keep optimizing for changing algorithms, competitor dynamics & user behavior",
                                icon: "fa-handshake",
                                color: "bg-orange-100 text-orange-600"
                            }].map((item, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 w-full max-w-lg mx-auto">
                                    <div className="flex justify-center mb-4">
                                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${item.color}`}>
                                            <i className={`fas ${item.icon} text-2xl`}></i>
                                        </span>
                                    </div>
                                    <p className="text-blueGray-700 font-semibold">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <div className="mb-8 flex items-start">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mr-4 mt-1">
                                    <i className="fas fa-clock text-xl"></i>
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-blueGray-800 mb-2">How long until I see results?</h3>
                                    <p className="text-blueGray-600">SEO is a medium-to-long-term strategy. Generally, some improvements can be seen in 2-3 months; robust results often take 4-6 months or more, depending on competition and starting point.</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-start">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-4 mt-1">
                                    <i className="fas fa-trophy text-xl"></i>
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-blueGray-800 mb-2">Can you guarantee top rankings?</h3>
                                    <p className="text-blueGray-600">No credible SEO firm can promise a #1 ranking—search engines don’t publish ranking algorithms. But we can promise transparent effort, best practices, and steady improvement.</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-start">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 mr-4 mt-1">
                                    <i className="fas fa-balance-scale text-xl"></i>
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-blueGray-800 mb-2">Is SEO better than paid ads?</h3>
                                    <p className="text-blueGray-600">Both have their place. SEO builds sustainable traffic and trust without per-click cost; ads give quicker visibility. Often, a combination works best.</p>
                                </div>
                            </div>
                            <div className="mb-8 flex items-start">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 mr-4 mt-1">
                                    <i className="fas fa-chart-bar text-xl"></i>
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-blueGray-800 mb-2">How do you measure success?</h3>
                                    <p className="text-blueGray-600">Key metrics include organic traffic volume, keyword ranking changes, bounce rate, session duration, conversion rate, and site authority/backlink profile.</p>
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
                            <polygon className="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-12">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-8/12 px-4">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                                    Ready to Climb Google’s Ranks?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    At Ahakyr, we’re passionate about helping businesses be found—by the right people, at the right time. If you want to grow organically, build trust, and get lasting search visibility, we’d love to partner with you.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us for a free SEO audit & strategy session today.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-search mr-3"></i>
                                        Start Your SEO Project
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
