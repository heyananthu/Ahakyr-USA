import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/banners/it-service-banner.jpg';
import banner2 from '../../assets/banners/web-development.jpg';
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Blockchain() {
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
                                        Drive Trust, Transparency & Innovation with Ahakyr
                                    </h1>
                                    <p className="mt-4 text-sm md:text-lg text-blueGray-200">
                                        Blockchain isn't just another technology—it's a paradigm shift. At Ahakyr, we harness blockchain to help businesses redefine ownership, automate trust, and unlock new business models. Whether you're aiming to increase supply chain transparency, develop decentralized applications, or tokenize digital assets, our end-to-end blockchain services can help you go from idea to market-ready blockchain solution.
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

                {/* What We Mean by Blockchain Section */}
                <section className="pb-20 bg-blueGray-200 -mt-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-link text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    What We Mean by Blockchain
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
Blockchain is a distributed, immutable ledger that captures and validates digital transactions in a transparent, secure, and decentralized manner. It enables systems where participants can securely transact, share data, and enforce business logic—without relying on a central intermediary.                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
This technology underpins smart contracts, tokenization, decentralized finance (DeFi), supply chain provenance tracking, and more.                                </p>
                                <Link to="/contact" className="font-bold text-blueGray-700 mt-8">
                                    Start Your Blockchain Journey!
                                </Link>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                                    <img
                                        alt="Blockchain Excellence"
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
                                            Paradigm Shift Technology
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            This technology underpins smart contracts, tokenization, decentralized finance (DeFi), supply chain provenance tracking, and more.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Ahakyr Benefits Grid */}
                        <section className="mt-12">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Why Choose Ahakyr for Blockchain Development?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">

                                <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-layer-group text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Full-Stack Blockchain Expertise</h3>
                                        <p className="text-emerald-100">
                                            From design to deployment and beyond—with all necessary technical skills in-house
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-shield-alt text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Security & Compliance Focus</h3>
                                        <p className="text-blue-100">
                                            We emphasize smart contract auditing, permission control, and regulatory compliance
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-rocket text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Rapid Time-to-Market</h3>
                                        <p className="text-purple-100">
                                            Modularity, reuse, and BaaS reduce deployment time and technical overhead
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-8 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                    <div className="text-center">
                                        <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                            <i className="fas fa-puzzle-piece text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">Interoperable & Flexible Architecture</h3>
                                        <p className="text-orange-100">
                                            Hybrid/public/private chains, cross-chain bridges, and modular dApp layers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Our Blockchain Services */}
                        <div className="container mx-auto mt-20">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-blueGray-800 mb-4">Our Blockchain Services</h2>
                            </div>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Service 1 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-blue-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Blockchain Strategy & Consulting</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We partner with you to assess market fit, use-case value, regulatory constraints, and technology readiness. Our consulting helps you define the right blockchain model (public, private, consortium, or hybrid), gauge ROI, and plan a roadmap for adoption.                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-green-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-green-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-file-contract text-green-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Smart Contract Development & Audit</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
From Ethereum and Solana to Hyperledger Fabric and private permissioned ledgers, our team writes secure, efficient smart contracts and audits them rigorously to ensure correctness, resilience, and safety against vulnerabilities.                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-purple-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cube text-purple-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Decentralized Application (dApp) Development</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We build front- and back-end systems that interact with blockchain smart contracts—delivering user-facing interfaces, wallets, and business logic in a seamless, user-centric experience. Think token exchanges, NFT marketplaces, governance platforms, or decentralized identity systems.                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-orange-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-coins text-orange-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Tokenization & Digital Assets</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Convert physical or digital assets into tradable tokens—whether for loyalty points, real estate, digital collectibles, or digital identity. We help design the tokenomics, smart contracts, wallets, and marketplaces needed to launch fluid digital asset ecosystems.                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-red-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-cloud text-red-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Blockchain-as-a-Service (BaaS) Platforms</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Deploy and manage blockchain infrastructure without building everything from scratch. We work with cloud-based BaaS offerings and private ledger setups to speed up deployment, reduce operational burden, and enable rapid scaling.                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-industry text-teal-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Enterprise Blockchain & Supply Chain</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Leverage distributed ledger technology for secure, auditable workflows: For example, tracking provenance in manufacturing, automating inter-company contracting, or powering decentralized workflows across partner networks.                                    </p>
                                </div>

                                {/* Service 7 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-indigo-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-wallet text-indigo-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Wallets, Identity & Payment Solutions</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
We build secure digital wallets for cryptocurrency or token-based systems, decentralized identity verification systems, and payment gateways that leverage blockchain for faster settlement and reduced fraud.                                    </p>
                                </div>

                                {/* Service 8 */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-l-4 border-pink-500">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-pink-100 rounded-full p-4 mr-4">
                                            <i className="fas fa-tools text-pink-600 text-2xl"></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">Integration, Maintenance & Upgrades</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
Once your blockchain solution is live, Ahakyr supports continuous monitoring, smart contract upgrades, cross-chain interoperability, performance tuning, and governance enhancements—ensuring your system remains secure, scalable, and future-ready.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Blockchain Development Process */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Our Blockchain Development Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Use-Case Prioritization",
                                    description: "We begin by identifying the highest-value blockchain use cases aligned to data flows, partner networks, and governance needs.",
                                    icon: "fa-search",
                                    color: "bg-blue-500"
                                },
                                {
                                    step: "02",
                                    title: "Prototype & Proof of Concept",
                                    description: "A fast, no-commitment prototype helps validate assumptions—user flows, token logic, contract interactions, UX, legal compliance.",
                                    icon: "fa-flask",
                                    color: "bg-emerald-500"
                                },
                                {
                                    step: "03",
                                    title: "Smart Contract & Infrastructure Design",
                                    description: "We design smart contracts, blockchain topology, node/client architecture, and necessary integrations.",
                                    icon: "fa-drafting-compass",
                                    color: "bg-purple-500"
                                },
                                {
                                    step: "04",
                                    title: "Full-Stack Development",
                                    description: "Back-end systems, front-end dApps, wallets, APIs, and user interfaces are developed and tested holistically.",
                                    icon: "fa-code",
                                    color: "bg-orange-500"
                                },
                                {
                                    step: "05",
                                    title: "Security & Auditing Phase",
                                    description: "We conduct code reviews, automated audit tools, manual stress testing, and penetration testing on smart contract logic.",
                                    icon: "fa-shield-alt",
                                    color: "bg-red-500"
                                },
                                {
                                    step: "06",
                                    title: "Deployment & Integration",
                                    description: "Deploy to production environments, integrate with legacy systems, and configure monitoring and disaster recovery pipelines.",
                                    icon: "fa-rocket",
                                    color: "bg-teal-500"
                                },
                                {
                                    step: "07",
                                    title: "Ongoing Operations & Evolution",
                                    description: "Ahakyr supports updates, performance monitoring, cross-chain bridging, governance changes, and iterative feature releases.",
                                    icon: "fa-sync",
                                    color: "bg-indigo-500"
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

                {/* Use Cases & Industries Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">Use Cases & Industries</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-truck text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Supply Chain & Logistics</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Provenance tracking, automated invoicing, decentralized reconciliation for transparent and efficient supply chains.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-university text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Finance & DeFi</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Token swaps, automated market makers, compliant stablecoins, decentralized lending platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-heartbeat text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Healthcare</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Verifiable patient identity, tamper-resistant medical records, secure data-sharing across healthcare providers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                                <div className="flex items-start mb-6">
                                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-store text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Retail & Loyalty Systems</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Token-based loyalty programs, decentralized marketplaces, verifiable digital vouchers and rewards systems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 md:col-span-2">
                                <div className="flex items-start mb-6">
                                    <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                                        <i className="fas fa-handshake text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Collaboration</h3>
                                        <p className="text-gray-600 leading-relaxed">
 cross-company workflow automation, decentralized identity, secure document notarization                                        </p>
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
                                    Ready to Build the Future with Blockchain?
                                </h2>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-1 text-blueGray-300">
                                    If you're exploring blockchain for asset tokenization, trustless workflows, or decentralized apps, let Ahakyr be your guide and implementation partner.
                                </p>
                                <p className="text-sm md:text-lg leading-relaxed mt-4 mb-12 text-blueGray-300">
                                    We'll help you move from idea to production—securely, reliably, and strategically.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    <Link
                                        to="/contact-us"
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                                    >
                                        <i className="fas fa-envelope mr-3"></i>
                                        Get Your Free Blockchain Consultation
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
