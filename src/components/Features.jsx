import React from "react";

// Correctly ordered and grouped imports without empty lines
import instagramIcon from "../images/instagram.png";
import linkedinIcon from "../images/linkedin.png";
import matIcon from "../images/mats sold.png";
import qualityIcon from "../images/quality.png";
import returnIcon from "../images/return.png";
import tiktokIcon from "../images/tiktok.png";
import warrantyIcon from "../images/warranty.png";

export default function Features() {
    return (
        <section className="flex flex-col justify-center items-center border-t-2 border-b-2 border-orange h-screen">
            <div className="flex justify-center items-center space-x-10">
                {/* Left Content */}
                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16">
                    <div className="feature-item text-center">
                        <img
                            src={matIcon}
                            alt="Icon 1"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>1+ Snow-Free Driveways</p>
                    </div>
                    <div className="feature-item text-center">
                        <img
                            src={qualityIcon}
                            alt="Icon 3"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>Quality Custom Mats</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="social-media-links flex justify-center items-center space-x-8">
                    <a href="your-instagram-link" className="feature-item">
                        <img
                            src={instagramIcon}
                            alt="Instagram"
                            className="w-4 h-4"
                        />
                    </a>
                    <a href="your-tiktok-link" className="feature-item">
                        <img
                            src={tiktokIcon}
                            alt="TikTok"
                            className="w-4 h-4"
                        />
                    </a>
                    <a href="your-linkedin-link" className="feature-item">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="w-4 h-4"
                        />
                    </a>
                </div>

                {/* Right Content */}
                <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16">
                    <div className="feature-item text-center">
                        <img
                            src={warrantyIcon}
                            alt="Icon 2"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>5 Year Warranty</p>
                    </div>
                    <div className="feature-item text-center">
                        <img
                            src={returnIcon}
                            alt="Icon 3"
                            className="w-12 h-12 mx-auto"
                        />
                        <p>Repeat Customers Discount</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
