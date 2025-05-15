"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import './Footer.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
const Footer = () => {

    const router = useRouter();

    const handleNavigation = (title: string) => {
        router.push(`/footer-menu?title=${encodeURIComponent(title)}`);
    };
    return (
        <>
            <div className="footer mt-80">
                <div className="container-fluid">
                    <div className="footer-content">
                        <div className="company-info w-20">
                            <div className="company-logo">
                                <h3>The Cometbid <br /> Technology Foundation</h3>
                            </div>
                            <div className="about-us">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqu. </p>
                            </div>
                            <hr className="footer-hr" />
                            <div className="social-media">
                                <h4>Follow Us</h4>
                                <ul>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaGithub /></a></li>
                                    <li><a href="#"><FaGoogle /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Our Community</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/announcements">Upcoming Events</Link></li>
                                <li><Link href="/project">Projects</Link></li>
                                <li><Link href="/collaborations">Collaborations</Link></li>
                                <li><Link href="/csf-membership/benefits">Membership</Link></li>
                                <li><Link href="/csf-leadership">CSF Leaderships</Link></li>
                                <li><Link href="/our-partner">Corporate Sponsorship</Link></li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Learn</h4>
                            <ul>
                                <li><Link href="/faq">FAQ</Link></li>
                                {/* <li><Link href="/announcements">Our Blogs</Link></li> */}
                                <li><Link href="/csf-Incubator-programs/overview">CSF Incubator programs</Link></li>
                                <li><Link href="/brand-guidelines">Brand Guidelines</Link></li>
                                <li><Link href="/logo-specifications">Logo Specifications</Link></li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Legal</h4>
                            <ul>
                                <li onClick={() => handleNavigation("Privacy Policy")} style={{ cursor: "pointer" }}>Privacy Policy</li>
                                <li onClick={() => handleNavigation("Terms of Use")} style={{ cursor: "pointer" }}>Terms of Use</li>
                                <li onClick={() => handleNavigation("Compliance")} style={{ cursor: "pointer" }}>Compliance</li>
                                <li onClick={() => handleNavigation("Code of Conduct")} style={{ cursor: "pointer" }}>Code of Conduct</li>
                                <li onClick={() => handleNavigation("Legal & Trademark")} style={{ cursor: "pointer" }}>Legal & Trademark</li>
                                <li onClick={() => handleNavigation("Manage Cookies")} style={{ cursor: "pointer" }}>Manage Cookies</li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>More</h4>
                            <ul>
                                <li><Link href="/security">Report a Vulnerability</Link></li>
                                <li onClick={() => handleNavigation("Report Bugs")} style={{ cursor: "pointer" }}>Report Bugs</li>
                                <li onClick={() => handleNavigation("Mailing Lists")} style={{ cursor: "pointer" }}>Mailing Lists</li>
                                <li onClick={() => handleNavigation("Contact Us")} style={{ cursor: "pointer" }}>Contact Us</li>
                                <li onClick={() => handleNavigation("Support")} style={{ cursor: "pointer" }}>Support</li>
                            </ul>
                        </div>
                        <div className="quick-links w-20">
                            <h4>Subscribe to our Newsletter</h4>

                            <div className="subscribe-form">
                                <input type="email" placeholder="Enter your email address" />
                                <Link href="/subscribe"><button type="submit">Subscribe</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;