import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import banner from "../../assets/banners/devops.jpg";
import devopsimg from "../../assets/banners/devops-img2.jpg"
function Deveops() {
    return (
        <div className="devops-page">
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
                                            <i className="fas fa-cogs text-white text-4xl"></i>
                                        </div>
                                    </div>
                                    <h1 className="text-white font-semibold text-3xl md:text-5xl leading-tight">
                                        DevOps Technologies
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200 max-w-4xl mx-auto">
                                        Accelerate, Secure & Scale Your Software Delivery with Ahakyr
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
                                In today's rapid-paced software landscape, bridging development and operations isn’t a luxury—it’s a necessity. At Ahakyr, our comprehensive DevOps services streamline your entire delivery pipeline—combining culture, automation, and continuous improvement to help you innovate faster, more reliably, and at a lower cost.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What DevOps Means */}
                <section className="py-16 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-blueGray-800">What DevOps Means for Future-Ready Businesses</h2>
                                <p className="text-blueGray-700 mt-4">
                                    DevOps unifies development (Dev) and operations (Ops) into a cohesive, collaborative cycle—spanning planning, coding, testing, deployment, and monitoring. It's not just a method, but a cultural shift focused on collaboration, automation, and continuous feedback.
                                </p>
                                <p className="text-blueGray-700 mt-3">
                                    At its core lies CI/CD (Continuous Integration, Delivery, Deployment), a series of automated workflows that ensure rapid, reliable, and consistent software releases.
                                </p>
                            </div>
                            <div>
                                <img src={devopsimg} className="rounded-xl shadow-md object-cover" alt=""/>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Key Pillars */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800">Key Pillars of Our DevOps Practice</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "1. Culture & Collaboration",
                                    desc: "We foster cross-functional teams where developers, operations, QA, and security professionals work in unison—sharing ownership and accelerating delivery.",
                                    icon: "fas fa-users",
                                    color: "border-rose-500",
                                },
                                {
                                    title: "2. Automation & CI/CD Pipelines",
                                    desc: "Automating build, test, and deployment workflows reduces risks, accelerates delivery cycles, and makes scaling easier.",
                                    icon: "fas fa-stream",
                                    color: "border-amber-500",
                                },
                                {
                                    title: "3. Infrastructure as Code (IaC) & Configuration Management",
                                    desc: "Enable consistent, reproducible infrastructure using tools like Terraform, Ansible, Chef, or Puppet. This brings reliability, auditability, and efficiency to infrastructure provisioning.",
                                    icon: "fas fa-code",
                                    color: "border-emerald-500",
                                },
                                {
                                    title: "4. Containerization & Orchestration",
                                    desc: "Utilize Docker and Kubernetes to encapsulate applications and simplify deployment across environments. These technologies underpin scalable, resilient, and maintainable systems.",
                                    icon: "fab fa-docker",
                                    color: "border-indigo-500",
                                },
                                {
                                    title: "5. Monitoring, Feedback & SecOps",
                                    desc: "From deployment to production, we integrate monitoring, logging, and DevSecOps practices to ensure security and stability across the delivery lifecycle.",
                                    icon: "fas fa-shield-alt",
                                    color: "border-blue-500",
                                },
                            ].map((p, i) => (
                                <div key={i} className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 ${p.color}`}>
                                    <div className="flex items-center mb-4">
                                        <div className="mr-3">
                                            <i className={`${p.icon} text-blueGray-600`}></i>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800">{p.title}</h4>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tooling */}
                <section className="py-16 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Modern Tooling Expertise</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Version Control & Collaboration", items: "Git, GitHub, GitLab", icon: "fab fa-git-alt" },
                                { title: "CI/CD Platforms", items: "Jenkins, GitHub Actions, CircleCI, Azure DevOps", icon: "fas fa-project-diagram" },
                                { title: "IaC & Configuration Tools", items: "Terraform, Ansible, Chef, Puppet", icon: "fas fa-tools" },
                                { title: "Containers & Orchestration", items: "Docker, Kubernetes", icon: "fab fa-docker" },
                                { title: "Monitoring & Feedback", items: "Prometheus, Grafana, ELK, cloud-native monitoring", icon: "fas fa-chart-line" },
                            ].map((t, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow p-6">
                                    <div className="flex items-center mb-3">
                                        <i className={`${t.icon} text-indigo-500 mr-3`}></i>
                                        <h4 className="text-lg font-semibold text-blueGray-800">{t.title}</h4>
                                    </div>
                                    <p className="text-blueGray-700">{t.items}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Partner */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Why Partner with Ahakyr for DevOps?</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Faster Time-to-Market", desc: "Frequent, reliable releases through automation and streamlined workflows.", icon: "fas fa-tachometer-alt", color: "border-emerald-500" },
                                { title: "Scalability & Resilience", desc: "From servers to microservices—scale with confidence.", icon: "fas fa-layer-group", color: "border-indigo-500" },
                                { title: "Security Embedded", desc: "DevSecOps ensures vulnerabilities are caught early and handled proactively.", icon: "fas fa-shield-alt", color: "border-rose-500" },
                                { title: "Operational Efficiency", desc: "Reduced manual overhead and improved infrastructure visibility.", icon: "fas fa-cogs", color: "border-amber-500" },
                                { title: "Cultural Excellence", desc: "Teams aligned on goals, tools, and processes—built for collaboration.", icon: "fas fa-users", color: "border-blue-500" },
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

                {/* Engagement Model */}
                <section className="py-20 bg-blueGray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Our DevOps Engagement Model</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Discovery & Assessment", desc: "We review your current culture, technical stack, release practices, and identify opportunities to optimize.", icon: "fas fa-search" },
                                { title: "Strategy & Pipeline Design", desc: "Define clear CI/CD workflows, automation standards, and infrastructure models tailored to your goals.", icon: "fas fa-project-diagram" },
                                { title: "Tooling Setup & Process Implementation", desc: "Deploy pipelines, enforce configurations via IaC, containerize services, and integrate monitoring and security.", icon: "fas fa-tools" },
                                { title: "Training & Adoption", desc: "Empower your teams with best practices, documentation, and enablement for long-term self-sufficiency.", icon: "fas fa-chalkboard-teacher" },
                                { title: "Continuous Improvement & Support", desc: "We monitor performance, optimize workflows, and evolve practices alongside your business requirements.", icon: "fas fa-sync" },
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

                {/* MLOps Connection */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-blueGray-800">Connecting DevOps with MLOps</h3>
                            <p className="text-blueGray-700 mt-4">
                                Forward-looking organizations blend DevOps with MLOps to unify software and AI model delivery workflows. By treating ML models as code—leveraging CI/CD and version control—teams reduce friction, improve reproducibility, and secure consistency across deployments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 bg-blueGray-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h3 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Delivery Pipeline?</h3>
                            <p className="mt-4 text-blueGray-200">
                                Ahakyr is your seasoned DevOps partner—from cultural shift to pipeline setup, automation, and beyond. Let’s evolve your delivery processes, fortify your infrastructure, and power your innovation journey.
                            </p>
                            <p className="mt-2 text-blueGray-200">Reach out today for a free DevOps strategy session.</p>
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

export default Deveops;