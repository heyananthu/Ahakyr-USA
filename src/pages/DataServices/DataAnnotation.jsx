import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/aiml.webp';
import banner2 from '../../assets/banners/data-service-banner.avif';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function DataAnnotation() {
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
                                        Fuel Your AI & ML Models with High-Quality, Human-Curated Training Data
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        A machine learning model is only as good as the data it learns from. At Ahakyr, our Data Annotation Services provide the high-fidelity, contextualized labels that your AI systems need to perform robustly, reliably, and ethically. From images and video to text, audio, and sensor data—we help structure raw inputs into meaningful, task-ready datasets.
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

                {/* Why Data Annotation Matters Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-brain text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Why Data Annotation Matters
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Annotated data turns unstructured inputs—like pictures, customer comments, or video frames—into the structured signals that ML and AI pipelines consume.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    With high-quality annotation pipelines, you can iterate faster, fine-tune performance, and support ongoing model retraining.
                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your AI Data Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Data Annotation Excellence"
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
                                            Quality Training Data
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Models trained on clean, consistently annotated data learn real-world concepts more reliably—reducing bias, misclassification, and unexpected behavior.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Core Benefits</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-database text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Transforms Raw Data into Contextual Intelligence</h3>
                                        <p className="text-emerald-100">
                                            Annotated data turns unstructured inputs—like pictures, customer comments, or video frames—into the structured signals that ML and AI pipelines consume.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Improves Model Accuracy & Safety</h3>
                                        <p className="text-blue-100">
                                            Models trained on clean, consistently annotated data learn real-world concepts more reliably—reducing bias, misclassification, and unexpected behavior.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Enables Scalable AI Deployment</h3>
                                        <p className="text-purple-100">
                                            With high-quality annotation pipelines, you can iterate faster, fine-tune performance, and support ongoing model retraining.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Annotation Services Table */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Annotation Services</h2>
                                <p className="text-lg text-blueGray-600 max-w-4xl mx-auto">
                                    Ahakyr delivers comprehensive, secure, and scalable annotation workflows tailored for AI/ML teams:
                                </p>
                            </div>

                            {/* Services Table */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                        <tr>
                                            <th className="py-6 px-6 text-left text-lg font-bold">Data Modality</th>
                                            <th className="py-6 px-6 text-left text-lg font-bold">Annotation Types & Use Cases</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="hover:bg-blue-50 transition-colors duration-200">
                                            <td className="py-6 px-6">
                                                <div className="flex items-center">
                                                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                                                        <i className="fas fa-image text-blue-600 text-lg"></i>
                                                    </div>
                                                    <span className="font-semibold text-gray-800 text-lg">Image & Video</span>
                                                </div>
                                            </td>
                                            <td className="py-6 px-6 text-gray-600">
                                                Bounding boxes, polygons, semantic & instance segmentation, keypoint detection, activity labeling, frame-by-frame object tracking
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-green-50 transition-colors duration-200">
                                            <td className="py-6 px-6">
                                                <div className="flex items-center">
                                                    <div className="bg-green-100 rounded-full p-3 mr-4">
                                                        <i className="fas fa-file-alt text-green-600 text-lg"></i>
                                                    </div>
                                                    <span className="font-semibold text-gray-800 text-lg">Text & NLP</span>
                                                </div>
                                            </td>
                                            <td className="py-6 px-6 text-gray-600">
                                                Named entity recognition, intent classification, sentiment labeling, text summarization, intent prompting
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-purple-50 transition-colors duration-200">
                                            <td className="py-6 px-6">
                                                <div className="flex items-center">
                                                    <div className="bg-purple-100 rounded-full p-3 mr-4">
                                                        <i className="fas fa-microphone text-purple-600 text-lg"></i>
                                                    </div>
                                                    <span className="font-semibold text-gray-800 text-lg">Audio & Speech</span>
                                                </div>
                                            </td>
                                            <td className="py-6 px-6 text-gray-600">
                                                Transcription, speaker separation, emotion detection, speech-to-text training, voice intent tagging
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors duration-200">
                                            <td className="py-6 px-6">
                                                <div className="flex items-center">
                                                    <div className="bg-orange-100 rounded-full p-3 mr-4">
                                                        <i className="fas fa-cube text-orange-600 text-lg"></i>
                                                    </div>
                                                    <span className="font-semibold text-gray-800 text-lg">Sensor & 3D Data</span>
                                                </div>
                                            </td>
                                            <td className="py-6 px-6 text-gray-600">
                                                LiDAR/point-cloud labeling, geospatial tagging, trajectory annotation, sensor-fusion inference pipelines
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Workflow Section */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Workflow</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Consultation & Task Design",
                                    description: "We partner with your team to define annotation schemas, edge cases, guidelines, and quality metrics. Clear, rule-based instructions are crucial to achieving consistent outputs.",
                                    icon: "fa-comments",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Tool Selection & Integration",
                                    description: "Whether you prefer off-the-shelf annotation tools or a custom stack (CVAT, V7, proprietary platforms), we adapt to your workflow and integrate annotations into your downstream pipelines.",
                                    icon: "fa-tools",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Human-in-the-Loop Annotation",
                                    description: "Skilled annotators apply labels with precision and attention to edge cases. In critical applications—such as medical diagnostics or autonomous driving—we layer review workflows.",
                                    icon: "fa-users",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Automated & Semi-Automated Assist",
                                    description: "Where feasible, we reduce manual effort with pre-labeling, heuristics, or AI-assisted workflows. Human annotators then correct or validate these suggestions.",
                                    icon: "fa-robot",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Multi-Tier Quality Assurance",
                                    description: "We monitor annotation accuracy, inter-annotator agreement, and use periodic audits to refine guidelines. Metrics and dashboards ensure consistency and traceability.",
                                    icon: "fa-check-double",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Delivery & Format Flexibility",
                                    description: "Final annotated output can be supplied in whatever format your AI or ML pipeline needs: JSON, COCO, Pascal VOC, CSV, custom schema, or direct data-pipeline integration.",
                                    icon: "fa-file-export",
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

                {/* Why Choose Ahakyr Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Ahakyr for Your Annotation Needs?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="text-center">
                                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <i className="fas fa-brain text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Domain-Aware Teams</h3>
                                    <p className="text-blue-100">
                                        We assign annotators familiar with the context—be it healthcare, autonomous vehicles, retail, surveillance, or NLU pipelines—reducing ambiguity and improving consistency.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="text-center">
                                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <i className="fas fa-expand-arrows-alt text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Scalable Infrastructure</h3>
                                    <p className="text-emerald-100">
                                        Bulk annotation projects can be ramped up quickly without compromising turnaround or quality—thanks to a cloud-ready, hybrid human/automation model.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="text-center">
                                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <i className="fas fa-lock text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Secure & Compliant Handling</h3>
                                    <p className="text-purple-100">
                                        We can handle sensitive data pipelines (medical imaging, customer voice data, proprietary video content) with encrypted transfers, access controls, and employee-level confidentiality agreements.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="text-center">
                                    <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <i className="fas fa-cog text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">Flexible Delivery Models</h3>
                                    <p className="text-orange-100">
                                        One-time projects, subscription-flows for continuous data streams, or hybrid "annotation-as-a-service" models—whatever fits your operational tempo and budget.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases & Industries Section */}
                <section className="py-20 bg-blueGray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Use Cases & Industries</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Our annotations empower AI in a broad range of contexts:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                { 
                                    icon: "fa-car", 
                                    title: "Autonomous Vehicle & Drone Vision", 
                                    description: "Lane detection, pedestrian recognition, vehicle tracking, behavior analysis.", 
                                    color: "bg-blue-500" 
                                },
                                { 
                                    icon: "fa-heartbeat", 
                                    title: "Healthcare & Medical Imaging", 
                                    description: "Tumor boundary segmentation, diagnostic labeling, organ classification, anomaly detection.", 
                                    color: "bg-red-500" 
                                },
                                { 
                                    icon: "fa-shopping-cart", 
                                    title: "Retail & E-Commerce", 
                                    description: "Product image tagging, style recommendation training data, visual search datasets.", 
                                    color: "bg-green-500" 
                                },
                                { 
                                    icon: "fa-comments", 
                                    title: "Natural Language Processing", 
                                    description: "Intent recognition, entity extraction, sentiment scoring, conversational model fine-tuning.", 
                                    color: "bg-purple-500" 
                                },
                                { 
                                    icon: "fa-city", 
                                    title: "Smart Cities & Geospatial AI", 
                                    description: "Traffic flow analytics, building detection, people tracking, LiDAR point‐cloud understanding.", 
                                    color: "bg-teal-500" 
                                },
                                { 
                                    icon: "fa-shield-alt", 
                                    title: "Security & Surveillance", 
                                    description: "Activity recognition, threat detection, face identification and tracking, anomaly flagging.", 
                                    color: "bg-orange-500" 
                                }
                            ].map((useCase, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
                                    <div className="text-center">
                                        <div className={`${useCase.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                                            <i className={`fas ${useCase.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{useCase.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
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
                                    Let's Power Your AI with Quality Data
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    Your models deserve better than flat, noisy data. With Ahakyr's Data Annotation Services, your AI pipelines gain the structure, precision, and context they need to deliver real value—and stay adaptable as your applications evolve.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    Contact us today for a pilot run or annotation roadmap consultation.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Start Your Annotation Project
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