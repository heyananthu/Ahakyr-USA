import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/ui-ux.jpg'; // Use a fitting hero image
import banner2 from '../../assets/banners/ui-ux2.webp'; // Use a secondary illustration
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function UiUx() {
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
                    Elevate Your Brand with Thoughtful, Engaging Design
                  </h1>
                  <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                    A truly great product isn’t just built—it’s felt. At Ahakyr, our UI/UX Design service is dedicated to crafting intuitive, visually captivating interfaces that delight your users while reinforcing your brand’s credibility and purpose. We blend empathy, creativity, and strategic design to bring your digital visions to life.
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
              <div className="w-full px-4 mr-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-palette text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Why Choose Ahakyr for UI/UX Design?
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  <span className="font-semibold">User-Centered Excellence</span> — Every decision we make starts with empathy. We dive deep into user research, creating experiences that feel effortless and intuitive.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">Innovative yet Scalable Designs</span> — We create visually stunning designs that grow gracefully across mobile, web, and beyond.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">Collaborative Process</span> — You’re a partner from concept to delivery. Your vision shines, your users feel heard.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  <span className="font-semibold">Versatile & Future-Ready</span> — From MVPs to new markets, our adaptive, consistent designs fit your evolving needs.
                </p>
                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                  Start Your Design Journey
                </Link>
              </div>
              <div className="mt-5">
                <img src={banner2} alt="UI/UX Experience Illustration" />
              </div>
            </div>

            {/* Expertise Grid */}
            <section className="mt-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our UI/UX Design Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-border-all text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">UI Design</h3>
                    <p className="text-emerald-100">
                      Visually stunning and accessible interfaces that balance beauty with usability.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-search text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">UX Research & Strategy</h3>
                    <p className="text-blue-100">
                      Deep analysis of user needs, personas, and pain points for informed design.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-project-diagram text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Wireframing & Prototyping</h3>
                    <p className="text-purple-100">
                      From low-fidelity sketches to interactive prototypes, test and iterate before launch.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-random text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Interaction Design</h3>
                    <p className="text-orange-100">
                      Defining how every interface component moves, responds, and delights.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-vial text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Usability Testing</h3>
                    <p className="text-red-100">
                      Iterate designs with feedback from real users, ensuring clarity and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Design Process Table */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Design Process</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold">Phase</th>
                    <th className="px-6 py-4 text-left text-lg font-bold">What We Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Discovery & Research</td>
                    <td className="px-6 py-4 text-gray-600">Define business goals, perform competitor analysis, and user interviews to inform strategy.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Concept Development</td>
                    <td className="px-6 py-4 text-gray-600">Collaborative brainstorming and sketches aligned with vision and need.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Design & Prototyping</td>
                    <td className="px-6 py-4 text-gray-600">High-fidelity mockups and interactive prototypes for feedback and refinement.</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 font-semibold text-gray-800">Testing & Iteration</td>
                    <td className="px-6 py-4 text-gray-600">Validate usability with real users, refine and polish every interaction.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                We've partnered with businesses across diverse sectors, tailoring solutions for each industry's unique requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {[
                { icon: "fa-heartbeat", title: "Healthcare", color: "bg-red-500" },
                { icon: "fa-university", title: "Finance", color: "bg-green-500" },
                { icon: "fa-store", title: "E-commerce & Retail", color: "bg-blue-500" },
                { icon: "fa-graduation-cap", title: "Education", color: "bg-yellow-500" },
                { icon: "fa-microchip", title: "Technology", color: "bg-indigo-500" }
              ].map((industry, index) => (
                <div key={index} className="text-center group h-full">
                  <div className="bg-white rounded-2xl p-6 h-40 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-blue-50">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300`}>
                        <i className={`fas ${industry.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition duration-300">{industry.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">FAQs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-6 text-gray-800 text-lg">
                  <li>
                    <span className="font-semibold">What’s the difference between UI and UX?</span>
                    <div>UI focuses on visual design—buttons, layout, colors—whereas UX is about the overall experience and user satisfaction.</div>
                  </li>
                  <li>
                    <span className="font-semibold">How long does the design process take?</span>
                    <div>Timelines vary. Simple wireframes may take a few weeks, while full prototyping and testing cycles can span 4–8 weeks depending on complexity.</div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-6 text-gray-800 text-lg">
                  <li>
                    <span className="font-semibold">Do you offer design redesign services?</span>
                    <div>Absolutely! From a simple refresh to a complete overhaul—every engagement is custom.</div>
                  </li>
                  <li>
                    <span className="font-semibold">What tools do you use for UI/UX design?</span>
                    <div>Our toolkit includes Figma, Sketch, Adobe XD, and InVision for delivering high-fidelity, interactive designs.</div>
                  </li>
                </ul>
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
                  Ready to Design Magic?
                </h2>
                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                  At Ahakyr, we don’t just build interfaces—we create experiences users love, remember, and return to.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                  Contact us today for a complimentary consultation and experience strategy session.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link
                    to="/contact-us"
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                  >
                    <i className="fas fa-palette mr-3"></i>
                    Start Your Design Project
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
