import React, {Component} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import Card from "../../components/Card";

export default class FeaturedCardSlider extends Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }

  render() {
    const itemSlider = this.props.content.lists.map((item) =>
        <SwiperSlide key={`slider-item`+item.id}>
          <Card content={item} />
        </SwiperSlide>
    )
    return (
      <section className="mb-[100px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">{this.props.content.title}</h2>
          <div className="relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={4}
              loop={true}
              ref={this.swiperRef}
            >
              {itemSlider}
            </Swiper>
            <div
              className={`absolute left-[-26px] top-1/4 cursor-pointer flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2`}
              onClick={() => this.swiperRef.current.swiper.slidePrev()}
            >
              <ChevronLeftIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
            </div>
            <div
              className={`absolute right-[-26px] top-1/4 cursor-pointer flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2 hover:shadow-[0_10px_25px_rgba(18,41,64,0.15)]`}
              onClick={() => this.swiperRef.current.swiper.slideNext()}
            >
              <ChevronRightIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}