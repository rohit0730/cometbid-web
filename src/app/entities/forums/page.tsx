import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import projectmanagement from "../../../assets/Images/material-symbols_info-rounded.jpg"

const forumData = [
    {
        title: 'AspectJ',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Java Development Tools (JDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Objectteams',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'PHP Development Tools (PDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Eclipse Web Tools Platform Project (WTP)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'ServerTools (WTP)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Eclipse Advanced Scripting Environment (EASE)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Eclipse Common Security Infrastructure',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'C / C++ IDE (CDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },
    {
        title: 'Project Proposals',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the Eclipse JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'Eclipse User',
        icon: projectmanagement
    },


];

const ForumsPage = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="hero-content text-center box-main-text">
                        <h1 className="hero-title">CometBid Community <span>Forums</span></h1>
                        <p className="hero-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
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
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <Link href="/project">Projects</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Forums</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}
            <section className="forums-section">
                <div className="container">
                    <div className="page-title mt-5 ">
                        <h2>
                            CometBid Community Forums
                        </h2>
                        <p>
                            These forums have been closed. They were a way of communicating with the community of people developing and using Eclipse-based tools hosted at Eclipse.org.
                            All contributions you make to our web site are governed by our Terms Of Use. Your interactions with the Eclipse Foundation web properties and any information you may provide us about yourself are governed by our Privacy Policy.
                        </p>
                    </div>
                </div>
            </section>
            <section className="forum-table-section py-5">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table align-middle forum-table border main-table">
                            <thead className="table-light">
                                <tr>
                                    <th className="table-heding">Forum</th>
                                    <th className="table-heding">Messages</th>
                                    <th className="table-heding">Topics</th>
                                    <th className="table-heding-last-massage">Last Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {forumData.map((forum, index) => (
                                    <tr key={index}>
                                        {/* Forum Column with Icon + Name + Description */}
                                        <td>
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="forum-icon mt-1">
                                                    <Image
                                                        src={forum.icon}
                                                        alt={`${forum.title} Icon`}
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                                <div className="forum-info">
                                                    <h6 className="mb-1 fw-semibold info-text">{forum.title}</h6>
                                                    <p className="mb-0 small text-muted info-text-dicription">
                                                        {forum.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Messages */}
                                        <td>
                                            <span className="number">{forum.messages}</span>
                                        </td>

                                        {/* Topics */}
                                        <td>
                                            <span className="number">{forum.topics}</span>
                                        </td>

                                        {/* Last Message */}
                                        <td className="last-message">
                                            <div className="small">
                                                <span className="day-name">{forum.date}</span> <br />
                                                <span className="text-muted text-cp-name">By: {forum.user}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </>
    );
};

export default ForumsPage;