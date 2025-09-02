import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from "../../assets/banners/Testautomation.jpg"; 
import automationImg from '../../assets/banners/testautomation-img2.jpg'
import reactImg from "../../assets/img/react.jpg";
import angularImg from "../../assets/img/angular.jpg";
import vueImg from "../../assets/img/vue.jpg";

function TestAutomation() {
    return (
        <div className="test-automation-page">
            <Navbar transparent />

            <main>
                {/* Hero */}
                <div className="relative pt-16 pb-36 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover bg-bottom"
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
                                            <i className="fas fa-vial text-white text-4xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        Test Automation
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        Boost Software Quality, Speed, and Confidence with Ahakyr
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

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-blueGray-700">
                                In a competitive digital market, delivering reliable applications swiftly is a winning strategy. At Ahakyr, our Test Automation services help you achieve just that—streamlining testing, increasing coverage, and integrating seamlessly with your CI/CD workflows.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Test Automation Matters */}
                <section className="py-16 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Why Test Automation Matters</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "Accelerated Testing Cycles", desc: "Automate repetitive tasks to reduce test execution time and overall time-to-market.", icon: "fas fa-tachometer-alt" },
                                { title: "Cost Efficiency", desc: "Replace manual testing efforts with scalable, resource-optimized automation.", icon: "fas fa-coins" },
                                { title: "Early Bug Detection", desc: "Find issues sooner to release more stable and reliable applications.", icon: "fas fa-bug" },
                                { title: "High Coverage & Scalability", desc: "Run extensive tests across platforms with consistent accuracy.", icon: "fas fa-layer-group" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600">
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

                {/* Services We Offer */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Types of Test Automation Services We Offer</h2>
                            <p className="text-blueGray-600 max-w-4xl mx-auto mt-3">Our services cater to various testing needs:</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Unit & Functional Testing", desc: "Ensure core functionality and logic are validated.", icon: "fas fa-code" },
                                { title: "Regression Testing", desc: "Quickly verify system integrity after updates or enhancements.", icon: "fas fa-undo" },
                                { title: "Performance & Load Testing", desc: "Simulate real-world usage to identify bottlenecks and ensure stability.", icon: "fas fa-chart-line" },
                                { title: "Security & Compatibility Testing", desc: "Maintain compliance and user trust across environments.", icon: "fas fa-shield-alt" },
                                { title: "Cross-Platform Automation", desc: "Deliver consistent quality across web, mobile, APIs, and more.", icon: "fas fa-globe" },
                            ].map((svc, i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-3">
                                            <i className={`${svc.icon} text-blueGray-600`}></i>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800">{svc.title}</h4>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Frameworks & Tools */}
                <section className="py-16 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Frameworks & Tools We Leverage</h3>
                            <p className="text-blueGray-600 max-w-3xl mx-auto">Ahakyr brings you powerful automation tools and frameworks for robust and efficient testing:</p>
                        </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                               <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-indigo-500">
                                   <div className="flex items-start">
                                       <i className="fas fa-list text-indigo-500 mr-3 mt-1"></i>
                                       <div>
                                           <h4 className="text-lg font-semibold text-blueGray-800">Selenium, Appium, Cypress, Playwright, JUnit, TestNG, Cucumber</h4>
                                           <p className="text-blueGray-700 mt-1">covering browser, mobile, and BDD-based scenarios.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-emerald-500">
                                   <div className="flex items-start">
                                       <i className="fas fa-robot text-emerald-500 mr-3 mt-1"></i>
                                       <div>
                                           <h4 className="text-lg font-semibold text-blueGray-800">AI-Powered Tools</h4>
                                           <p className="text-blueGray-700 mt-1">Such as SmartBear and Applitools—enhancing visual testing and anomaly detection.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-amber-500">
                                   <div className="flex items-start">
                                       <i className="fas fa-tachometer-alt text-amber-500 mr-3 mt-1"></i>
                                       <div>
                                           <h4 className="text-lg font-semibold text-blueGray-800">Apache JMeter</h4>
                                           <p className="text-blueGray-700 mt-1">A proven choice for load, API, and performance testing.</p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Best Practices That Ensure Success</h3>
                            <p className="text-blueGray-700 mt-1">We go beyond scripting—we embed best practices for long-term quality:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Strategic Test Selection", desc: "Automate high-value, high-risk or repetitive test scenarios.", icon: "fas fa-check-circle", color: "border-emerald-500" },
                                { title: "Robust Test Data Management", desc: "Ensure consistent, clean data for reliable testing results.", icon: "fas fa-database", color: "border-indigo-500" },
                                { title: "CI/CD Integration & Continuous Testing", desc: "Embed automation into your delivery pipeline for frequent, reliable feedback.", icon: "fas fa-project-diagram", color: "border-amber-500" },
                                { title: "Cross-Browser / Platform Compatibility", desc: "Cover all critical user paths across devices and environments.", icon: "fas fa-globe", color: "border-rose-500" },
                                { title: "Automated Reporting", desc: "Actionable logs and dashboards for fast insight into test outcomes.", icon: "fas fa-chart-bar", color: "border-blue-500" },
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

                {/* Engagement Models */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Our Test Automation Engagement Models</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Test Automation as a Service (TAaaS)", desc: "Let our expert team take ownership of automation, allowing your teams to stay focused on core functions.", icon: "fas fa-handshake" },
                                { title: "Framework Setup & Enablement", desc: "Deploy a custom automation framework with training and hand-off for autonomous execution.", icon: "fas fa-cogs" },
                                { title: "Hybrid Support Structures", desc: "Combine internal and external capacities for flexible, scalable collaboration.", icon: "fas fa-people-carry" },
                            ].map((step, idx) => (
                                <div key={idx} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600">
                                            <i className={step.icon}></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-blueGray-800">{step.title}</h4>
                                        <p className="text-blueGray-700 mt-1">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ideal Scenarios */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Ideal Scenarios for Our Services</h3>
                                <p className="mt-3">Our Test Automation services are especially impactful when your project involves:</p>
                                <ul className="list-disc list-inside text-blueGray-700 mt-4 space-y-2">
                                    <li>High-frequency releases and tight timelines</li>
                                    <li>Resource limitations in QA or engineering</li>
                                    <li>Need for consistent cross-platform coverage</li>
                                    <li>Low-maintenance, high-quality testing workflows</li>
                                </ul>
                            </div>
                            <div>
                                <img src={automationImg} className="rounded-xl shadow object-cover" alt="Automation Image"  />
                            </div>
                            {/* <div className="rounded-2xl w-full h-56 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-inner flex items-center justify-center">
                                <span className="text-emerald-500">Faster • Smarter • Reliable Testing</span>
                            </div> */}
                        </div>
                    </div>
                </section>

                {/* Why Choose Ahakyr */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Why Choose Ahakyr for Test Automation?</h3>
                            <p className="mt-3">We focus on scalable, high-impact solutions that drive measurable outcomes:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Faster Throughput", desc: "Accelerate releases with reliable automation pipelines.", icon: "fas fa-rocket", color: "border-emerald-500" },
                                { title: "Smarter Quality", desc: "Catch defects earlier with prioritized coverage and smarter checks.", icon: "fas fa-brain", color: "border-indigo-500" },
                                { title: "Reduced Overhead", desc: "Automate repetitive tasks to free up time and resources.", icon: "fas fa-recycle", color: "border-amber-500" },
                                { title: "Framework Flexibility", desc: "Choose the right tools—open-source or enterprise-level—for your projects.", icon: "fas fa-toolbox", color: "border-rose-500" },
                                { title: "Seamless Integration", desc: "Align test automation with DevOps, Agile, and security best practices.", icon: "fas fa-project-diagram", color: "border-blue-500" },
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

                {/* CTA */}
                <section className="py-32 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-bold">Ready to Uplevel Your Testing?</h3>
                            <p className="mt-4 text-blueGray-200">
                                Partner with Ahakyr to build resilient, fast, and cost-effective test automation frameworks. Let us show you how intelligent testing can accelerate delivery and elevate product quality.
                            </p>
                            <p className="mt-2 text-blueGray-200">Contact us today for a free consultation and a tailored test automation roadmap.</p>
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

export default TestAutomation;