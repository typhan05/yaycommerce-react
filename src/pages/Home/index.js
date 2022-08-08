import React from 'react';
import Introduce from "../../blocks/introduce";
import Banner from "../../blocks/banner";
import FeaturedCardSlider from "../../blocks/featured-card-slider";
import {data} from "./mockApi"

export default function Home() {
  return (
    <>
      <Banner />
      <Introduce content={data.introduce} />
      <FeaturedCardSlider content={data.featured_card} />
    </>
  );
}