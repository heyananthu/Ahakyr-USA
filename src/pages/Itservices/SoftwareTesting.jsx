import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/softwaretesting.jpg'; 
import banner2 from '../../assets/banners/softwaretesting2.jpg'
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function SoftwareTesting() {
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
                  <h1 className="text-white font-semibold text-3xl md:text-5xl">Ensure Quality, Reliability & Performance with Ahakyr</h1>
                  <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                    Delivering flawless software is crucial for customer trust, brand reputation, and operational success. At Ahakyr, our comprehensive Software Testing Services ensure your applications are secure, stable, and ready to exceed expectations.
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
            <div className="flex flex-wrap items-center mt-32 md:grid md:grid-cols-2">
              <div className="w-full  px-4 mr-auto ">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Why Partner with Ahakyr for Testing?
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  <span className="font-semibold">Skilled QA Engineers</span> — Experienced testers who specialize across domains, platforms, and ensure precise evaluation.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">End-to-End Testing Expertise</span> — Functional, performance, security, compatibility, and automation coverage.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">Advanced Tools & Practices</span> — Cutting-edge frameworks and methods for accurate, rapid, and reliable results.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">Tailored QA Strategies</span> — Testing plans fit to your unique business needs, users, and deployment goals.
                </p>
                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                  Start Testing with Ahakyr
                </Link>
              </div>
              <div className="mt-5">
                <img src={banner2} />
              </div>
              {/* You can add an illustrative image or quote here similar to your original layout */}
            </div>

            {/* Expertise Grid */}
            <section className="mt-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Core Testing Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-cogs text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Functional Testing</h3>
                    <p className="text-blue-100">
                      Validate user interactions, logic flows, and business processes.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-tachometer-alt text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Performance Testing</h3>
                    <p className="text-green-100">
                      Analyze responsiveness, stability under load and bottleneck identification.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-lock text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Security Testing</h3>
                    <p className="text-purple-100">
                      Detect and remediate vulnerabilities in your applications and user data.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-tablet-alt text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Compatibility Testing</h3>
                    <p className="text-orange-100">
                      Ensure seamless performance across devices, OS versions, and browsers.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-robot text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Automation Testing</h3>
                    <p className="text-red-100">
                      Accelerate test cycles and boost accuracy using smart scripts.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-mobile-alt text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mobile App Testing</h3>
                    <p className="text-indigo-100">
                      Guarantee flawless user experiences across mobile devices and screens.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Testing Process Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Ahakyr’s Testing Process</h2>
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
                    <td className="px-6 py-4 font-semibold text-gray-800">Requirements Analysis</td>
                    <td className="px-6 py-4 text-gray-600">Define your testing vision, goals, coverage, and success criteria.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Test Planning</td>
                    <td className="px-6 py-4 text-gray-600">Scope, timeline, resources, and strategic test blueprint.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Execution</td>
                    <td className="px-6 py-4 text-gray-600">Thorough manual and automation QA.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Defect Tracking & Reporting</td>
                    <td className="px-6 py-4 text-gray-600">Transparent communication; issues tracked and resolved efficiently.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Test Closure</td>
                    <td className="px-6 py-4 text-gray-600">Final reports and insights to foster improvements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Value Delivered Through QA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Value Delivered Through QA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-blue-50 rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Enhanced Product Quality & Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Early detection and remediation improves user experience and reduces risk.
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cost & Time Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fixing bugs early is far less expensive than after launch.
                </p>
              </div>
              <div className="bg-purple-50 rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Strong Security Posture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proactive testing prevents vulnerabilities and reputation loss.
                </p>
              </div>
              <div className="bg-orange-50 rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Scalable & Repeatable Testing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automation and frameworks ensure quality in every update.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Increased Customer Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Users enjoy secure, dependable digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gradient-to-br from-blueGray-50 to-blueGray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Our testing proficiency spans verticals including:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                { icon: "fa-heartbeat", title: "Healthcare", color: "bg-red-500" },
                { icon: "fa-university", title: "Finance", color: "bg-green-500" },
                { icon: "fa-store", title: "E-commerce", color: "bg-blue-500" },
                { icon: "fa-graduation-cap", title: "Education", color: "bg-yellow-500" },
                { icon: "fa-industry", title: "Manufacturing", color: "bg-teal-500" },
                { icon: "fa-satellite-dish", title: "Telecommunications", color: "bg-purple-500" }
              ].map((industry, index) => (
                <div key={index} className="text-center group h-full">
                  <div className="bg-gray-100 rounded-2xl p-6 h-40 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300`}>
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

        {/* Top Testing Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Top Software Testing Types We Provide</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We cover a broad spectrum of testing needs:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <ul className="list-disc text-gray-700 text-lg pl-6 space-y-3">
                  <li><span className="font-semibold">Unit & Integration Testing</span> — Verify individual components and system integrations.</li>
                  <li><span className="font-semibold">Regression, Sanity & Smoke Testing</span> — Ensure core functionality remains strong through changes.</li>
                  <li><span className="font-semibold">Penetration & Security Testing</span> — Guard your system against threats.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc text-gray-700 text-lg pl-6 space-y-3">
                  <li><span className="font-semibold">Load, Stress & Scalability Testing</span> — Prove your software’s resilience under pressure.</li>
                  <li><span className="font-semibold">Exploratory Testing</span> — Uncover hidden issues through expert QA exploration.</li>
                  <li><span className="font-semibold">Operational Acceptance Testing (OAT)</span> — Assess system readiness for real-world deployment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trends Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Modern QA Trends We Leverage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-4">CI/CD & Shift Left Testing</h3>
                <p className="text-gray-600">
                  Embed automated QA early for rapid delivery and quality assurance.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <h3 className="text-xl font-bold text-purple-600 mb-4">AI-Enhanced Testing</h3>
                <p className="text-gray-600">
                  Automate test generation, execution, and analysis using AI/ML tools like Applitools and Test.ai.
                </p>
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
                  Let’s Ensure Your Software Performs Without Flaws
                </h2>
                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                  Quality is not optional—it’s foundational. Partner with Ahakyr to guarantee your applications deliver superior performance, security, and user satisfaction.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                  Contact us today for a free consultation and custom software testing roadmap.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link
                    to="/contact-us"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                  >
                    <i className="fas fa-shield-alt mr-3"></i>
                    Start Your Testing Project
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
