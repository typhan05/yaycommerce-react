import React from "react";
import imgBanner from "../../assets/images/img-banner.png";

export default function Banner() {
  return (
    <section className="bg-gray-light1 mb-8">
      <div className="container mx-auto grid gap-x-8 grid-cols-2 items-center">
        <div>
          <h3 className="text-lg tracking-[6px] uppercase mb-4">New Arrivals</h3>
          <h1 className="text-[70px] leading-[80px] font-bold mb-4">Perfect Fashions<br/>
            For Summer</h1>
          <p className="text-lg">There's nothing like a trend, let's select items to make your life with a new fashion
            style!</p>
          <div className="mt-10">
            <a href="#/"
               className="inline-flex justify-center rounded-lg text-sm py-3 px-4 bg-blue shadow-lg shadow-blue-500 text-white hover:opacity-95">Explore
              Now</a>
          </div>
        </div>
        <div>
          <img src={imgBanner} className="ml-auto" alt="banner-img"/>
        </div>
      </div>
    </section>
  )
}