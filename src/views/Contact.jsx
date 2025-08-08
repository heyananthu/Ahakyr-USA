import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className="contact-page bg-blueGray-200">
            <style dangerouslySetInnerHTML={{
                __html: `
                    .contact-page footer .absolute.pointer-events-none {
                        display: none !important;
                    }
                `
            }} />
            <Navbar transparent />
            <main className="border-b border-gray-300">
                {/* Hero Section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')",
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
                                        Let's Build Something Amazing Together
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Ready to transform your business with cutting-edge technology solutions?
                                        Our team of experts is here to help you navigate your digital transformation journey.
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

                {/* Contact Information Section */}
                <section className="pb-20 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap mt-32">
                            {/* Contact Methods */}
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h3>

                                    {/* Contact Items */}
                                    <div className="space-y-6">
                                        {/* Email */}
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 rounded-full p-3 mr-4">
                                                <i className="fas fa-envelope text-blue-600 text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Email Us</h4>
                                                <p className="text-gray-600">hello@ahakyr.com</p>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-center">
                                            <div className="bg-green-100 rounded-full p-3 mr-4">
                                                <i className="fas fa-phone text-green-600 text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Call Us</h4>
                                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center">
                                            <div className="bg-purple-100 rounded-full p-3 mr-4">
                                                <i className="fas fa-map-marker-alt text-purple-600 text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Visit Us</h4>
                                                <p className="text-gray-600">123 Tech Street<br />Innovation City, IC 12345</p>
                                            </div>
                                        </div>

                                        {/* Business Hours */}
                                        <div className="flex items-center">
                                            <div className="bg-orange-100 rounded-full p-3 mr-4">
                                                <i className="fas fa-clock text-orange-600 text-lg"></i>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Business Hours</h4>
                                                <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <h4 className="font-semibold text-gray-800 mb-4 text-center">Follow Us</h4>
                                        <div className="flex justify-center space-x-4">
                                            <a href="#" className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition duration-300">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href="#" className="bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 transition duration-300">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="#" className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900 transition duration-300">
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a href="#" className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition duration-300">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="w-full lg:w-8/12 px-4">
                                <div className="bg-white rounded-2xl shadow-xl p-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                                    <p className="text-gray-600 mb-8">
                                        Ready to discuss your project? Fill out the form below and we'll get back to you within 24 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name and Email Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                    placeholder="your.email@company.com"
                                                />
                                            </div>
                                        </div>

                                        {/* Company and Phone Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        {/* Service Selection */}
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                                Service of Interest
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="staff-augmentation">Staff Augmentation</option>
                                                <option value="erp-solutions">ERP Solutions</option>
                                                <option value="it-infrastructure">IT Infrastructure Management</option>
                                                <option value="custom-development">Custom Software Development</option>
                                                <option value="consulting">Technology Consulting</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Details *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                                rows="6"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
                                                placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                                            >
                                                <i className="fas fa-paper-plane mr-2"></i>
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
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
