import React from 'react';
import Introduce from "../../blocks/introduce";
import Banner from "../../blocks/banner";
import FeaturedCardSlider from "../../blocks/featured-card-slider";
import {data} from "./mockApi"
import OurBlog from "../../blocks/our-blog";
import Countdown from "../../blocks/countdown-date";
import ProductHot from "../../blocks/product-hot";
import Client from "../../blocks/client";

export default function Home() {
  return (
    <>
      <Banner />
      <Introduce content={data.introduce} />
      <FeaturedCardSlider content={data.featured_card} />
      <Countdown
        timeTillDate="05 26 2019, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
      <Client />
      <ProductHot content={data.product_hot} />
      <OurBlog content={data.our_blog} />
    </>
  );
}