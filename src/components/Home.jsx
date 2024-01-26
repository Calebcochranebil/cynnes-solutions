import React from "react";

import homeImage from "../images/ai-heatingmat.png";

export default function Home() {
    return (
        <main className="h-[500px] bg-cover" style={{ backgroundImage: `url(${homeImage})`}}>
                
                <p className="text-2xl">
                    Snow Dissolves, Comfort Resolves <br />
                    With Every Mat We Lay
                </p>
            
        </main>
    );
}
