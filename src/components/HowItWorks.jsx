import React from "react";

import data from "../data/data"

export default function How() {

    const renderData = (item, index) => index % 2 === 0 ? (
      <div key={item.id} className="flex flex-row">
        <p>{item.text}</p>
        <img src={item.image} alt={`Step ${index + 1}`} />
      </div>
    ) : (
      <div key={item.id} className="flex flex-row">
        <img src={item.image} alt={`Step ${index + 1}`} />
        <p>{item.text}</p>
      </div>
    )
    

    return (
        <main className="flex flex-col justify-center mx-24 h-fit">
            <div >
                <h1>How it all works</h1>
            </div>
            <div className="">
                {data.map(renderData)}
            </div>
        </main>
    );
}

