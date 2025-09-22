import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from "../../assets/banners/image-annotation-banner.webp"

function ImageAnnotation() {
    return (
        <div className="image-annotation-page">
            <Navbar transparent />
            <main>
                {/* Hero */}
                <div className="relative pt-16 pb-36 flex content-center items-center justify-center min-h-screen-75">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
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
                                            <i className="fas fa-image text-white text-4xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        Turning Images into Intelligence with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        In computer vision and AI projects, the success of your model depends heavily on the quality of its training data. At Ahakyr, our Image Annotation Services deliver highly accurate, consistently labelled visual datasets that power object detection, segmentation, behavior tracking, and more. With a combination of human expertise, robust QA, and scalable workflows, we make your image data work smarter.
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

                {/* What is Image Annotation */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">What is Image Annotation?</h2>
                            <p className="text-blueGray-600 max-w-4xl mx-auto mt-4">
                                Image annotation is the process of labelling or tagging objects, regions, landmarks, or entire images with metadata so that machine learning models can understand what those visual elements represent. It might be identifying where pedestrians are, marking product boundaries, classifying image scene types, or drawing pixel-level masks for complex shapes. High-quality annotation ensures your computer vision models are reliable, accurate, and scalable.
                                Sources & similar service descriptions: AnnotationBox uses bounding boxes, segmentation masks, metadata tagging.                            </p>
                        </div>
                    </div>
                </section>

                {/* Types of Annotation */}
                <section className="pb-20 bg-blueGray-200 py-6">
                    <div className="container mx-auto px-4">
                        <div className="w-full text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-6">
                                Types of Annotation We Provide
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                            {/* Bounding Boxes */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-emerald-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-emerald-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-vector-square text-emerald-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Bounding Boxes (2D / 3D)</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Locating objects in images (cars, people, furniture) with rectangular or volumetric boxes.
                                </p>
                            </div>

                            {/* Polygon Annotation */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-draw-polygon text-indigo-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Polygon / Precise Shape Annotation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Annotating irregular shapes (leaves, bodies, furniture contours) with greater precision.
                                </p>
                            </div>

                            {/* Semantic & Instance Segmentation */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-yellow-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-layer-group text-yellow-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Semantic & Instance Segmentation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Pixel-level labelling: distinct classes (semantic) and distinguishing individual instances (instance).
                                </p>
                            </div>

                            {/* Landmarks / Keypoint Annotation */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Landmarks / Keypoint Annotation</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Facial features, body joints, product keypoints, pose estimation.
                                </p>
                            </div>

                            {/* Classification / Image-Level Labeling */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-purple-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-tags text-purple-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Classification / Image-Level Labeling</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Assigning an image to one or more categories (e.g. “urban vs rural”, “indoor vs outdoor”).
                                </p>
                            </div>

                            {/* Custom Labels and Hybrid Models */}
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                <div className="flex items-center mb-6">
                                    <div className="bg-orange-100 rounded-full p-4 mr-4">
                                        <i className="fas fa-cogs text-orange-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Custom Labels and Hybrid Models</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Domain-specific labels, custom classes, multi-attribute tags.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Work with Ahakyr */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Why Work with Ahakyr for Image Annotation</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[{
                                title: "Accuracy & Quality Assurance",
                                desc: "Each dataset we deliver undergoes multi-tier review (peer review, senior reviewer checks, consensus validation) to minimize errors and label drift.",
                                icon: "fas fa-check-circle",
                                color: "border-emerald-500"
                            }, {
                                title: "Scalable & Flexible Delivery",
                                desc: "Whether you need a small pilot batch or millions of annotated images, our operations scale to your volume and complexity.",
                                icon: "fas fa-expand-arrows-alt",
                                color: "border-indigo-500"
                            }, {
                                title: "Security & Privacy",
                                desc: "We handle your visual data securely—secure transfers, strict access controls, anonymization, compliance with data protection standards.",
                                icon: "fas fa-lock",
                                color: "border-yellow-500"
                            }, {
                                title: "Format and Tooling Compatibility",
                                desc: "Output formats: COCO, Pascal VOC, YOLO, JSON, CSV, custom schema. We integrate with your tools.",
                                icon: "fas fa-file-code",
                                color: "border-blue-500"
                            }, {
                                title: "Domain Expertise",
                                desc: "Annotators familiar with autonomous driving, retail, healthcare, agriculture, security, and more.",
                                icon: "fas fa-user-graduate",
                                color: "border-purple-500"
                            }].map((b, i) => (
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

                {/* Our Approach & Workflow */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-5xl font-bold text-blueGray-800">Our Approach & Workflow</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[{
                                title: "Consultation & Pilot Sample",
                                desc: "Defining classes, edge cases, annotation guidelines. Pilot sample batch for quality review.",
                                icon: "fas fa-comments",
                                color: "bg-rose-100 text-rose-600"
                            }, {
                                title: "Guideline Setup & Tool Configuration",
                                desc: "Detailed instructions, template examples, and tool configuration to suit requirements.",
                                icon: "fas fa-cogs",
                                color: "bg-amber-100 text-amber-600"
                            }, {
                                title: "Annotation & Human Review",
                                desc: "Skilled annotators label images, assisted by pre-labeling or AI suggestions, followed by human verification.",
                                icon: "fas fa-user-edit",
                                color: "bg-indigo-100 text-indigo-600"
                            }, {
                                title: "Quality Assurance & Feedback Loop",
                                desc: "Regular QA checks, accept/reject reviews, consensus checks, metrics for fidelity.",
                                icon: "fas fa-clipboard-check",
                                color: "bg-emerald-100 text-emerald-600"
                            }, {
                                title: "Secure Delivery & Format Handover",
                                desc: "Annotations delivered in required format, integrated with your pipeline, feedback for refinement.",
                                icon: "fas fa-file-export",
                                color: "bg-blue-100 text-blue-600"
                            }, {
                                title: "Ongoing Support & Updates",
                                desc: "Refresh datasets, update guidelines, incremental batches for evolving model needs.",
                                icon: "fas fa-sync-alt",
                                color: "bg-purple-100 text-purple-600"
                            }].map((item, idx) => (
                                <div key={idx} className="flex items-start bg-white rounded-xl p-6 shadow-sm">
                                    <div className="mr-4 mt-1">
                                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${item.color}`}>
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

                {/* Typical Use Cases */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <h3 className="text-3xl md:text-5xl font-bold text-blueGray-800 text-center">Typical Use Cases</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                {["Object detection in autonomous vehicle fleets (cars, traffic signs, pedestrians)",
                                    "Medical imaging: annotating scans, detecting anomalies or organs",
                                    "Product imagery: background removal, product bounding, variations labeling",
                                    "Agriculture: crop health via aerial imagery, plant disease detection",
                                    "Security / Surveillance: face recognition, behavior tracking, anomaly detection",
                                    "Retail / eCommerce: visual search, product catalog standardization"].map((t, idx) => (
                                        <div key={idx} className="flex items-start bg-blueGray-50 rounded-xl p-6 shadow-sm mb-2">
                                            <div className="mr-4 mt-1">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                                    <i className="fas fa-check"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-blueGray-700 mt-1">{t}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-36 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h3 className="text-3xl md:text-5xl font-bold">Let’s Collaborate to Create High-Impact Visual Training Data</h3>
                            <p className="mt-4 text-blueGray-200">
                                High-quality image annotation can make or break your vision-based AI project. At Ahakyr, we're committed to delivering precise, secure, scalable annotation services that align with your model goals, timelines, and domain needs.
                            </p>
                            <p className="mt-2 text-blueGray-200">Contact us today for a pilot sample, pricing estimate, or roadmap—let’s turn your images into insight.</p>
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

export default ImageAnnotation
