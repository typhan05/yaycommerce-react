import React, {Component} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Pagination} from "swiper";
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
      <section className="md:mb-[100px] mb-20">
        <div className="container mx-auto">
          <h2 className="md:text-4xl text-[28px] font-bold md:mb-10 mb-5 text-center">{this.props.content.title}</h2>
          <div className="relative swiper-custom md-hide-dots">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              slidesPerGroup={2}
              modules={[Pagination]}
              pagination={{
                clickable: true
              }}
              loop={true}
              ref={this.swiperRef}
              breakpoints={{
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                // when window width is >= 1440px
                1440: {
                  width: 1440,
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {itemSlider}
            </Swiper>
            <div
              className={`absolute left-[-26px] top-1/4 cursor-pointer hidden md:flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2`}
              onClick={() => this.swiperRef.current.swiper.slidePrev()}
            >
              <ChevronLeftIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
            </div>
            <div
              className={`absolute right-[-26px] top-1/4 cursor-pointer hidden md:flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2 hover:shadow-[0_10px_25px_rgba(18,41,64,0.15)]`}
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