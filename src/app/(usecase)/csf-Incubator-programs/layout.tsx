"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "react-bootstrap";
import { usePathname } from 'next/navigation'
import { BsFillInfoCircleFill } from "react-icons/bs";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import "../csf-membership/style.css";
import Sidebar from "@/component/Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    return <>
        <section className="banner-section">
            <div className="container">
                <div className="hero-content text-center">
                    <h1 className="hero-title">CSF Incubator  <span> programs</span></h1>
                </div>
            </div>
        </section>

        {/* Page-nevigation Section Start Here */}
        <section className="page-navigation-section mt-5">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="page-navigation">
                        <Link href="/">Home</Link>
                        <span><Image src={AltArrow} alt="Icon" /></span>
                        <Link href="/project">Projects</Link>
                        <span><Image src={AltArrow} alt="Icon" /></span>
                        <span>CSF Incubator programs</span>
                    </div>
                </div>
            </div>
        </section>
        {/* Page-nevigation Section End Here */}

        <section className="membership-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="info-box mt-5">
                            <BsFillInfoCircleFill />
                            <p>Some of the services that support the smooth operation of our websites are still in the process of being restored. As a result, certain features—such as images and committer paperwork—may be temporarily unavailable. Our team is actively working to resolve these issues and restore full functionality as soon as possible.
                                Thank you for your patience and understanding.</p>
                        </div>
                        <div className="tab-view mt-5">
                            <Tab.Container id="left-tabs-example">
                                <div className="membership-tabs">
                                    <div className="d-flex flex-row justify-content-between tab-line-container">
                                        <Link href="/csf-Incubator-programs/overview" className={`nav-link ${pathname === '/csf-Incubator-programs/overview' ? 'active' : ''}`}>
                                            <span className="tab-user-name">OverView</span>
                                        </Link>
                                        <Link href="/csf-Incubator-programs/downloads" className={`nav-link ${pathname === '/csf-Incubator-programs/downloads' ? 'active' : ''}`}>
                                            <span className="tab-user-name">Downloads</span>
                                        </Link>
                                        <Link href="/csf-Incubator-programs/developer-resources" className={`nav-link ${pathname === '/csf-Incubator-programs/developer-resources' ? 'active' : ''}`}>
                                            <span className="tab-user-name">Developer Resources</span>
                                        </Link>
                                        <Link href="/csf-Incubator-programs/governance" className={`nav-link ${pathname === '/csf-Incubator-programs/governance' ? 'active' : ''}`}>
                                            <span className="tab-user-name">Governance</span>
                                        </Link>
                                        <Link href="/csf-Incubator-programs/contact" className={`nav-link ${pathname === '/csf-Incubator-programs/contact' ? 'active' : ''}`}>
                                            <span className="tab-user-name">Contact Us</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="tab-content body-tabs">
                                    {children}
                                </div>
                            </Tab.Container>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default Layout;