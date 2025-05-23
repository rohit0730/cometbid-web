import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cardimg1 from "../../../assets/Images/Cardimg1.png";
import Cardimg2 from "../../../assets/Images/Cardimg2.png";
import Cardimg3 from "../../../assets/Images/Cardimg3.png"
import Cardimg4 from "../../../assets/Images/Cardimg4.png";
import Cardimg5 from "../../../assets/Images/Cardimg5.png";
import Cardimg6 from "../../../assets/Images/Cardimg6.png";

import AltArrow from "../../../assets/Images/alt-arrow.svg";
import iconimg from "../../../assets/Images/time-icon.png";
import iconimg1 from "../../../assets/Images/iconimg1.png";
import iconimg2 from "../../../assets/Images/iconimg2.png";
import iconimg3 from "../../../assets/Images/iconimg3.png";
import "./style.css";
const cardData = [
    {
        id: 1,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg1,
        icon: iconimg,
    },
    {
        id: 2,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg2,
        icon: iconimg,

    },
    {
        id: 3,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg3,
        icon: iconimg,

    },
    {
        id: 1,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg4,
        icon: iconimg,

    },
    {
        id: 2,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg5,
        icon: iconimg,

    },
    {
        id: 3,
        title: "Sport Interactive",
        text: "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
        img: Cardimg6,
        icon: iconimg,

    },
];

const BlockchainPage = () => {
    return (
        <>
            <section className="banner-section  banner-blockchain mt-80">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title"> <span>Blockchain</span></h1>
                        <p className="hero-description">
                            Our community is innovating on the next generation of cloud native
                            developer tools,
                            <br /> including the CometBid IDE which is the leading open
                            platform for professional <br /> developers.
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
                            <span>Blockchain</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}
            <div className="container">
                <div className="image-box mt-5">
                    <h2 className="heading">Projects</h2>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {cardData.map((card) => (
                        <div className="col-md-6 col-lg-4 mb-3" key={card.id}>
                            <div className="border-box-common card-box">
                                <div className="box-icon-csf">
                                    <Image src={card.img} alt="Icon" className="imglogo" />
                                </div>
                                <div className="box-content-text">
                                    <h3 className="card-heading">{card.title}</h3>
                                    <p className="card-text">{card.text}</p>
                                </div>
                                <hr />
                                <div className="box-icon-Main">
                                    <div className="flex items-center space-x-2  timeicon-box">
                                        <Image src={card.icon} alt="Icon" width={16} height={16} className="card-icon" />
                                        <span className="timeicon-text">1 day ago</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Image src={iconimg1} alt="Image 1" className="bottom-icon-img" />
                                        <Image src={iconimg2} alt="Image 2" className="bottom-icon-img" />
                                        <Image src={iconimg3} alt="Image 3" className="bottom-icon-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="page-title mt-4">
                    <h2>Communities</h2>
                </div>
                <div className="row mt-5">
                    {cardData.map((card) => (
                        <div className="col-md-6 col-lg-4 mb-3" key={card.id}>
                            <div className="border-box-common card-box">
                                <div className="box-icon-csf">
                                    <Image src={card.img} alt="Icon" className="imglogo" />
                                </div>
                                <div className="box-content-text">
                                    <h3 className="card-heading">{card.title}</h3>
                                    <p className="card-text">{card.text}</p>
                                </div>
                                <hr />
                                <div className="box-icon-Main">
                                    <div className="flex items-center space-x-2  timeicon-box">
                                        <Image src={card.icon} alt="Icon" width={16} height={16} className="card-icon" />
                                        <span className="timeicon-text">1 day ago</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Image src={iconimg1} alt="Image 1" className="bottom-icon-img" />
                                        <Image src={iconimg2} alt="Image 2" className="bottom-icon-img" />
                                        <Image src={iconimg3} alt="Image 3" className="bottom-icon-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlockchainPage;