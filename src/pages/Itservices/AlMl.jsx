import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/it-service-banner.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function AlMl() {
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
                                        Innovate with Intelligence — Turn Data into Dynamic Value
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        In a data-driven world, Ahakyr helps businesses harness artificial intelligence and machine learning to automate processes, discover hidden insights, personalize user experiences, and build smarter products. From strategy and experimentation to deployment and continuous improvement, our AI/ML development service is a full-stack partner in your intelligent transformation.
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

                {/* What We Offer Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-brain text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What We Offer
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    We help businesses harness artificial intelligence and machine learning to automate processes, discover hidden insights, personalize user experiences, and build smarter products.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    From strategy and experimentation to deployment and continuous improvement, our AI/ML development service is a full-stack partner in your intelligent transformation.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your AI Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="AI/ML Excellence"
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
                                            Intelligent Transformation
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Transform your business with AI-powered automation, predictive analytics, NLP solutions, and machine learning models that drive measurable results.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Partner with Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Partner with Ahakyr?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-layer-group text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">End-to-End AI Expertise</h3>
                                        <p className="text-purple-100">
                                            From strategy and data preparation to model training, MLOps, and user-facing apps
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Scalable, Reliable Platforms</h3>
                                        <p className="text-blue-100">
                                            Architected for production-readiness, with attention to drift, feedback, and continuous operations
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-industry text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Domain-Aware Solutions</h3>
                                        <p className="text-green-100">
                                            We combine ML engineering with industry knowledge—healthcare, ecommerce, finance, logistics, enterprise SaaS
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Responsible & Ethical AI</h3>
                                        <p className="text-orange-100">
                                            Model explainability, bias monitoring, privacy safeguards, and transparent metrics built in from day one
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-sync text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Rapid Prototyping & Iteration</h3>
                                        <p className="text-teal-100">
                                            Agile experimentation allows fast feedback loops and evolving models that keep pace with changing needs
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-database text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Data-centric Culture</h3>
                                        <p className="text-indigo-100">
                                            We stress data quality, reproducibility, and monitored delivery so your AI stays accurate and trustworthy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* AI/ML Services */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our AI/ML Services</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">AI & ML Strategy and Consulting</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We begin every engagement with a clear roadmap: identifying high-impact AI use cases (e.g., predictive analytics, NLP, automation, recommender systems, anomaly detection), evaluating data readiness, and defining performance metrics, governance, and ethical guardrails.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        We help you select the right technology stack, tools, and infrastructure so your AI initiative is not just a proof-of-concept, but a scalable solution.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-database text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Data Engineering & Feature Engineering</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We build robust pipelines—from raw data collection and cleaning to feature stores and real-time streaming—that ensure models are fed high-quality, well-engineered inputs. Our approach includes:
                                    </p>
                                    <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                                        <li>ETL/ELT and data warehousing</li>
                                        <li>Real-time data ingestion and preprocessing</li>
                                        <li>Feature engineering, feature versioning, and reuse</li>
                                        <li>Structured and unstructured data handling (text, image, logs, numerical)</li>
                                    </ul>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-brain text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Machine Learning & Deep Learning Models</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Depending on your use case, we deliver:
                                    </p>
                                    <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                                        <li>Supervised, unsupervised, and reinforcement-learning models</li>
                                        <li>Deep learning architectures: CNNs, RNNs, Transformers for image, NLP, and time-series tasks</li>
                                        <li>Recommendation engines, personalization pipelines, and forecasting systems</li>
                                    </ul>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-comments text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Natural Language Processing & Conversational AI</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        From sentiment analysis or intent detection to chatbots and virtual assistants, we help integrate NLP pipelines—or full conversational agents—into your products or experiences.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-eye text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Computer Vision & Image Analytics</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We develop vision-based solutions such as object detection, image classification, facial recognition, OCR, and video analytics—ideal for retail, healthcare, industrial IoT, and security applications.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-rocket text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Model Deployment, MLOps & Monitoring</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        Models are only useful when reliably deployed and maintained. Ahakyr supports:
                                    </p>
                                    <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
                                        <li>Containerized model packaging and serving</li>
                                        <li>Continuous integration and delivery pipelines for models (CI/CD for ML)</li>
                                        <li>Monitoring for model drift, performance degradation, and data anomalies</li>
                                        <li>Incremental retraining, versioning, rollback safety, and automatic scaling</li>
                                    </ul>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cogs text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">AI-Driven Automation & Intelligent Tools</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        We develop intelligent automation tools that augment human workflows—such as predictive customer scoring, anomaly detection, process automation with AI, and recommendation systems that help your teams work faster and smarter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Engagement Model */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Engagement Model</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Use-Case Prioritization",
                                    description: "We partner early to explore high-value AI/ML opportunities—balancing impact, data readiness, and technical risk.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Proof-of-Concept & Prototype",
                                    description: "We build a minimal working model to test feasibility, measure early performance, and refine scope.",
                                    icon: "fa-flask",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Data Pipeline & Feature Engineering",
                                    description: "Establish reliable data flows and feature stores, and evaluate model performance in a real-world setting.",
                                    icon: "fa-stream",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Model Development & Validation",
                                    description: "Train, test, and refine models using cross-validation, backtesting, and thorough error-analysis.",
                                    icon: "fa-brain",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Deployment & Monitoring Setup",
                                    description: "Deploy models into production with monitoring, alerting, automated rollback, and retraining capabilities.",
                                    icon: "fa-rocket",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Continuous Improvement & Model Lifecycle Management",
                                    description: "As feedback accumulates, we version new models, detect drift, and evolve pipelines and models over time.",
                                    icon: "fa-sync",
                                    color: "bg-teal-500"
                                }
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                                        <div className={`${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}>
                                            <span className="text-2xl font-bold">{item.step}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ideal Use Cases & Industries Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Ideal Use Cases & Industries</h2>
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
                                            Personalization engines, customer segmentation, demand forecasting for enhanced customer experiences and optimized operations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-heartbeat text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare & Life Sciences</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Diagnostic support, medical image analysis, patient risk scoring for improved healthcare outcomes and efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-university text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Finance & Insurance</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Fraud detection, credit scoring, claim prediction, algorithmic underwriting for risk management and automation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-industry text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Manufacturing & Logistics</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Predictive maintenance, quality vision systems, route optimization for operational excellence and cost reduction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 md:col-span-2">
                                <div className="flex items-start mb-6">
                                    <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-laptop-code text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise SaaS & Workflow Automation</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Intelligent recommendations, anomaly detection, chatbots, and smart dashboards for enhanced productivity and user experience.
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
                                    Ready to Bring Smart Intelligence into Your Business?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Ahakyr is your trusted partner for AI & ML product engineering—from ideation and experimentation to live, evolving model-driven systems.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Get in touch today for a free consultation and an AI-ML roadmap tailored to your business needs.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free AI Consultation
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