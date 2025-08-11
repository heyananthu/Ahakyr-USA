import React from "react";
import { Link } from "react-router-dom";
import extractdoc from '../assets/ahakyr/extractdoc.png'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                    AI‑Powered Software & Business Solutions in the USA
                  </h1>
                  <p className="mt-4 text-sm  md:text-lg text-blueGray-200">
                    Elevate your US business with Ahakyr’s cutting-edge AI solutions, software services, and product innovations. Turn ideas into reality today.
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

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Vision</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Become the go-to AI and software solutions partner for US businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Mission</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Deliver world-class software with unmatched quality, speed, and ethics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Values</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Innovation, Integrity, Collaboration, Customer-First.

                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="container mx-auto mt-12 md:mt-0">
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-6/12 px-4 ">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-mobile-alt"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            Custom Web & Mobile App Development
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            Tailored web and mobile apps using React.js, Angular, Vue.js, React Native, Flutter, and Next.js to bring your vision to life.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-brain"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            Enterprise Software & AI/ML Integration
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            Bespoke software solutions, AI & Machine Learning, IoT, Blockchain, and data analytics to automate workflows and drive smarter decisions.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-cogs"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            ERP Implementation & Consulting
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            Expertise in Odoo, Microsoft Dynamics 365, Salesforce, Zoho, and more to transform your enterprise planning and operations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-cloud"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">IT Infrastructure & Cloud Services</h6>
                          <p className="mb-4 text-blueGray-500">
                            Secure, scalable deployments using AWS, Azure, Google Cloud, DevOps, and automated testing tools like Selenium and JMeter.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-headset"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            Staff Augmentation & Call Center Solutions
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            US‑based talent and support in virtual assistance, technical support, lead generation, inbound/outbound sales, live chat & email after-hours support.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <i className="fas fa-chart-line"></i>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold">
                            Data Services & Digital Marketing
                          </h6>
                          <p className="mb-4 text-blueGray-500">
                            End‑to‑end solutions: data entry, annotation, mining, conversion, OCR plus SEO, social media and performance marketing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-5/12 px-12 md:px-4 mr-auto ml-auto -mt-1">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
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
                      <h4 className="text-2xl font-bold text-white">
                        Our Core Services
                      </h4>
                      {/* <p className="text-md font-light mt-2 text-white">
                        Putting together a page has never been easier than matching
                        together pre-made components. From landing pages
                        presentation to login areas, you can easily customise and
                        built your pages.
                      </p> */}
                    </blockquote>
                  </div>
                </div>
              </div>
              <div>

              </div>

            </div>



            {/* <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
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
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Why Choose Ahakyr */}
        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-2">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Why Choose Ahakyr</h3>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-end">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-flag"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">US-Focused Presence & Support</h4>
                          <p>Proudly serving US clients with dedicated local support and operations.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-end">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-users"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">
                            Human‑Centered Innovation
                          </h4>
                          <p>We listen. We design. We deliver. Every solution aligns with your business goals and user needs.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-end">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-clock"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">
                            On-Time, High‑Quality Delivery
                          </h4>
                          <p>Committed to reliability and excellence in every phase—from planning to deployment.</p>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-end">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-shield-alt"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-black font-semibold">
                            Ethical, Secure & Scalable
                          </h4>
                          <p>Built responsibly with data security and future‑proof architecture at the core.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <div className="container mx-auto px-4 pb-32 pt-12">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold">
                  Featured Product
                </h3>
                <h4 className="text-3xl font-semibold  mt-6">ExtractDoc.ai</h4>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Quickly convert documents (invoices, PDFs, forms, webpages) into structured, actionable data using our AI-powered platform.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Efficient
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Accurate
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Scalable
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="w-full md:h-80 rounded-lg shadow-xl object-cover"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={extractdoc}
              />
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <section className="py-20 bg-gray-50 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  icon: "fa-shopping-cart",
                  color: "bg-emerald-500",
                  title: "Retail & eCommerce",
                },
                {
                  icon: "fa-heartbeat",
                  color: "bg-red-500",
                  title: "Healthcare",
                },
                {
                  icon: "fa-cogs",
                  color: "bg-purple-500",
                  title: "Manufacturing",
                },
                {
                  icon: "fa-shipping-fast",
                  color: "bg-blue-500",
                  title: "Logistics",
                },
                {
                  icon: "fa-share-alt",
                  color: "bg-pink-500",
                  title: "Social Media",
                },
                {
                  icon: "fa-users",
                  color: "bg-indigo-500",
                  title: "HR & Recruiting",
                },
                {
                  icon: "fa-building",
                  color: "bg-orange-500",
                  title: "Construction",
                },
                {
                  icon: "fa-chart-line",
                  color: "bg-green-600",
                  title: "Finance",
                },
                {
                  icon: "fa-coffee",
                  color: "bg-teal-500",
                  title: "Hospitality",
                },
              ].map((industry, index) => (
                <div key={index} className="flex justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center w-full max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl group">
                    <div className={`${industry.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`fas ${industry.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry.title}</h3>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* Testimonial */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Trusted Success Stories</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Hear from some of our satisfied clients who’ve partnered with us.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Testimonial 1 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Client testimonial"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alex Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      CEO, TechCorp Inc.
                    </p>
                    <p className="mt-2 text-blueGray-500">
                      “Ahakyr delivered our corporate portal ahead of schedule with excellent support throughout. Highly recommend!”
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="Client testimonial"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Maria Rodriguez</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      CTO, FinServe Solutions
                    </p>
                    <p className="mt-2 text-blueGray-500">
                      “Their engineering and main‑frame expertise significantly improved team productivity and reduced bugs.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              {/* <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="Client testimonial"
            src="https://randomuser.me/api/portraits/men/68.jpg"
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">David Lee</h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              Project Head, SmartLogix
            </p>
            <p className="mt-2 text-blueGray-500">
              “The collaboration with Ahakyr was seamless, and their timely delivery helped us meet a critical product launch.”
            </p>
          </div>
        </div>
      </div> */}
            </div>
          </div>
        </section>

        {/* Get in touch */}
        <section className="pb-20 relative block bg-blueGray-800">
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

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-14">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Get in Touch
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Ready to accelerate your tech roadmap with AI, automation, and SaaS?
                  Contact us today for a free strategy session and tailored solutions for your business needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6 ">
              <Link
                to="/contact-us"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
              >
                <i className="fas fa-envelope mr-3"></i>
                Contact Us
              </Link>
            </div>
            {/* <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Vision
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Become the go-to AI and software solutions partner for US businesses.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Mission
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Deliver world-class software with unmatched quality, speed, and ethics.

                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Values
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Innovation, Integrity, Collaboration, Customer-First.
                </p>
              </div>
            </div> */}
          </div>
        </section>
        {/* <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 hover:bg-blue-400 text-white  text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
