import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";

const boardCards = [
    {
        title: "Regional Boards",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
        title: "Board of Directors Election",
        description: "The CometBid Technology Foundation holds annual elections for board members representing the Committer Members and the Contributing Members.",
    },
    {
        title: "Executive Council",
        description: "Discover how top-level decisions shape the direction of the organization.",
    },
    {
        title: "Board Committees",
        description: "The CometBid Technology Foundation holds annual elections for board members representing the Committer Members and the Contributing Members.",
    },
    {
        title: "Annual Report",
        description: "The CometBid Technology Foundation holds annual elections for board members representing the Committer Members and the Contributing Members.",
    },
    {
        title: "Architecture Council",
        description: "The CometBid Technology Foundation holds annual elections for board members representing the Committer Members and the Contributing Members.",
    },
];

const BoardGovernance = () => {
    return (
        <>
            {/* Hero Section Start Here */}
            <section className="hero-section-common project-hero-section position-relative mt-80" >
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content text-center">
                                <h1 className="hero-title">Board & <span>Governance</span></h1>
                                <p className="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Hero Section End Here */}

            {/* Page-nevigation Section Start Here */}
            <section className="page-navigation-section mt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="page-navigation">
                            <Link href="/">Home</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Board & Governance</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}

            {/* Board Governance Section Start Here */}
            <section className="board-governance-section mt-5">
                <div className="container">
                    <div className="row">
                        {boardCards.map((card, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="board-governance-card">
                                    <div className="inline-icon-title">
                                        <h3>{card.title}</h3>
                                        <FiArrowUpRight />
                                    </div>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BoardGovernance;
