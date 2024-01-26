import React from "react";

import matIcon from "../images/mats sold.png";
import qualityIcon from "../images/quality.png";
import warrantyIcon from "../images/warranty.png";

export default function Features() {
    return (
        <section className="features">
            <div className="feature-item">
                <img src={matIcon} alt="Icon 1" />
                <p>2+ Snow-Free Driveways</p>
            </div>
            <div className="feature-item">
                <img src={warrantyIcon} alt="Icon 2" />
                <p>5 Year Warranty</p>
            </div>
            <div className="feature-item">
                <img src={qualityIcon} alt="Icon 3" />
                <p>Quality Custom Driveway Mats</p>
            </div>
        </section>
    );
}
