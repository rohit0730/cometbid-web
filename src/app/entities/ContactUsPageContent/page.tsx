import React from "react";
import Image from "next/image";
import Link from "next/link";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "@/component/Sidebar/Sidebar";
import "./style.css";
import Mailicon from "../../../assets/Images/Vector.svg"
import Emaill from "../../../assets/Images/e-maill-contactus.svg"
import Phoneicon from "../../../assets/Images/Telephone-icon.png"
import Locationicon from "../../../assets/Images/location-img-contactus.png"

const cards = [
    {
        title: "File an issue on HelpDesk",
        linkText: "Register and report a bug/issue",
        showIcon: false,
    },
    {
        title: "Status of our infrastructure",
        linkText: "CT Foundation Service Status",
        showIcon: false,
    },
    {
        title: "Technical questions / Support (via HTTP)",
        linkText: "CT Foundation Service Status",
        showIcon: false,
    },
    {
        title: "Legal questions",
        linkText: "license (at) cometbid.org",
        showIcon: true,
    },
    {
        title: "Trademark questions",
        linkText: "Register and report a bug/issue",
        showIcon: true,
    },
    {
        title: "Trademark questions",
        linkText: "Register and report a bug/issue",
        showIcon: true,
    },
];
const ContactUsContantpage = () => {
    return (
        <>
            <section className="hero-section-common position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center box-main-text">
                        <h1 className="hero-title">
                            CTF - <span> Contact Us</span>
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem
                            <br />
                            Ipsum has been the industry&apos;s standard dummy text ever since the
                            1500s,
                        </p>
                    </div>
                </div>
            </section>

            {/* Page-nevigation Section Start Here */}
            <section className="page-navigation-section mt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="page-navigation">
                            <Link href="/">Home</Link>
                            <span>
                                <Image src={AltArrow} alt="Icon" />
                            </span>
                            <Link href="/project">About</Link>
                            <span>
                                <Image src={AltArrow} alt="Icon" />
                            </span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="participate-section mt-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="sec-header mb-5">
                                <div className="page-title">
                                    <h2 className="ContactUs-card-heding">
                                        Need to contact someone at the CometBid Foundation?
                                    </h2>
                                </div>
                                <div className="row g-4 mt-4">
                                    {cards.map((card, idx) => (
                                        <div className="col-md-6" key={idx}>
                                            <div className="card-contact h-100 shadow">
                                                <div className="card-body-contact-us">
                                                    <div className="d-flex justify-content-between align-items-start">
                                                        <h5 className="card-box-title">{card.title}</h5>
                                                        {card.showIcon && (
                                                            <span className="card-icon">
                                                                <Image src={Mailicon} alt="e-mail icon" width={20} height={20} />
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="Contactus-card-box-link">{card.linkText}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contactus-section mt-5">
                <div className="container">
                    <div className="page-title mt-5 text-center">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                </div>
            </section>

            <section className="contactus-form-section-contactus mt-5">
                <div className="container">
                    <div className="contactus-inner-box-img-background">
                        <div className="contact-wrapper">

                            {/* Contact Info */}
                            <div className="contact-info">
                                <h1>
                                    Let&apos;s discuss <br /> something <span className="highlight-color">cool</span> together
                                </h1>
                                <div className="contactus-info-group mt-5">
                                    <p className="contactus-info-item">
                                        <Image src={Emaill} alt="Email Icon" width={20} height={20} />
                                        <span className="contactus-info-text">SaulDesign@gmail.com</span>
                                    </p>

                                    <p className="contactus-info-button">
                                        <Image src={Phoneicon} alt="Phone Icon" width={20} height={20} />
                                        <span className="contactus-info-text">+123 456 789</span>
                                    </p>

                                    <p className="contactus-info-item">
                                        <Image src={Locationicon} alt="Location Icon" width={20} height={20} />
                                        <span className="contactus-info-text">123 Street 456 House</span>
                                    </p>
                                </div>
                            </div>


                            <div className="contact-form-contactus text-center">
                                <h2 className="contactus-form-heding">Contact Us</h2>
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Your Subject" />
                                <textarea placeholder="Your Message"></textarea>
                                <button className="submit-btn">Create Account</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactUsContantpage;
