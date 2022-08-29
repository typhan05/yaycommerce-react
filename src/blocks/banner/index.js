import React from "react";
import imgBanner from "../../assets/images/img-banner.png";

export default function Banner() {
  return (
    <section className="bg-gray-light1 mb-8 text-black2 py-10">
      <div className="container mx-auto grid gap-x-8 sm:grid-cols-2 items-center">
        <div>
          <h3 className="md:text-lg text-sm text-black tracking-[6px] uppercase md:mb-4 mb-1">New Arrivals</h3>
          <h1 className="md:text-[70px] text-4xl md:leading-[80px] font-bold md:mb-4 mb-1">Perfect Fashions<br/>
            For Summer</h1>
          <p className="md:text-lg text-sm">There's nothing like a trend, let's select items to make your life with a new fashion
            style!</p>
          <div className="md:mt-10 mt-8">
            <a href="#/"
               className="inline-flex justify-center rounded-xl text-lg font-semibold py-3 px-8 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">Explore
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