import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BreadCrumb from "../../components/Breadcrumb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Tabs from "../../components/Tabs";
import FeaturedCardSlider from "../../blocks/featured-card-slider";
import Select from "react-select";
import Count from "../../components/Count";
import PreFooter from "../../blocks/pre-footer";
import {
  breadcrumbs,
  data,
  featuredCard,
  optionsColor,
  optionsSize,
  sliderProducts,
} from "./mockApi";
import Accordion from "../../components/Accordion";

export const useMedia = (query: any) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default function Products() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [wished, setWished] = useState(false);

  const addWishList = () => {
    setWished(!wished);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: "54px",
      "min-height": "54px",
      borderRadius: "12px",
      boxShadow: state.isFocused ? "0px 5px 15px rgba(0, 0, 0, 0.07)" : 0,
      borderColor: state.isFocused ? "#122940" : "#D3DCE5",
      "&:hover": {
        borderColor: state.isFocused ? "#122940" : "#D3DCE5",
      },
      padding: "0 5px",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#5A6D80",
        opacity: 0.5,
      };
    },
    option: (base, { isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isFocused
          ? "#F2F2F2"
          : isSelected
          ? "#F2F2F2"
          : "#FFFFFF",
        color: "#122940",
        margin: "2px 5px",
        width: "auto",
        borderRadius: "7px",
      };
    },
  };

  const isLargeScreen = useMedia("(min-width: 768px)");

  return (
    <>
      <BreadCrumb content={breadcrumbs} />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-4 gap-x-10 md:mb-[90px] mb-[50px]">
          <div className="max-w-[612px] md:mb-0 mb-5">
            <Swiper
              spaceBetween={0}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mb-[10px]"
            >
              {sliderProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex items-center justify-center w-full md:h-[612px] h-[410px] bg-gray-light5 rounded-[7px]">
                    <img
                      src={require("../../assets/images/" + item.img)}
                      alt={item.img}
                      className="object-cover object-center"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              slidesPerGroup={4}
              freeMode={true}
              watchSlidesProgress={true}
              breakpoints={{
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                // when window width is >= 1440px
                1440: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                  spaceBetween: 30,
                },
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper-thumbnail"
            >
              {sliderProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex items-center justify-center cursor-pointer md:w-24 md:h-24 bg-gray-light5 rounded-[7px]">
                    <img
                      src={require("../../assets/images/" + item.img)}
                      alt={item.img}
                      className="max-w-[54px] mx-auto md:block hidden"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <h2 className="md:text-[30px] text-[21px] font-bold md:mb-4 mb-1">
              ZARA romper dress pink size XS - $12
            </h2>
            <div className="flex items-center md:mb-5 mb-3">
              <p className="md:text-2xl text-[21px] font-medium md:mr-[14px] mr-1">
                <span className="md:text-xl text-base text-gray line-through md:mr-1">
                  $129.50
                </span>
                $90.65
              </p>
              <p className="bg-orange rounded-lg text-sm text-white px-2 py-[2px] md:block hidden">
                -30%
              </p>
              <p className="h-[18px] w-[1px] bg-gray-light9 md:mx-5 mx-4"></p>
              <p className="md:mr-[7px] mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  fill="none"
                  viewBox="0 0 17 16"
                >
                  <path
                    fill="#FFAC70"
                    d="M7.588.652c.287-.87 1.537-.87 1.824 0l1.35 4.085a.958.958 0 00.912.652h4.365c.93 0 1.316 1.17.564 1.707L13.07 9.621a.935.935 0 00-.348 1.055l1.349 4.084c.287.87-.725 1.593-1.476 1.056L9.063 13.29a.972.972 0 00-1.128 0l-3.532 2.524c-.751.538-1.763-.185-1.476-1.055l1.35-4.084a.935.935 0 00-.35-1.055L.399 7.096C-.356 6.56.031 5.39.96 5.39h4.365a.958.958 0 00.913-.652L7.588.652z"
                  ></path>
                </svg>
              </p>
              <p className="text-base text-gray leading-[25px]">
                4.7 of 579 reviews
              </p>
            </div>
            <div className="md:mb-10 mb-6">
              <p className="text-base text-black2">
                The short skirt with the round neck has a cotton double-layered,
                sexy figure, off-shoulder design, and flared long sleeves with
                pink and white stripes pattern. Committed 100% soft cotton yarn,
                bring you a comfortable wearing feeling.
              </p>
            </div>
            <div className="max-w-[490px]">
              <div className="md:mb-6 mb-5">
                <label className="inline-block text-base font-medium mb-2">
                  Size
                </label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={optionsSize}
                  styles={customStyles}
                  components={{ IndicatorSeparator: () => null }}
                  placeholder={"Select your size"}
                />
              </div>
              <div>
                <label className="inline-block text-base font-medium mb-2">
                  Color
                </label>
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  options={optionsColor}
                  styles={customStyles}
                  components={{ IndicatorSeparator: () => null }}
                  placeholder={"Select favorite color"}
                />
              </div>
              <div className="md:flex md:mt-[30px] md:mb-0 my-[25px]">
                <div className="md:w-[153px] flex-shrink-0 md:mb-0 mb-[25px]">
                  <Count number={1} style={{ padding: "6px 12px" }} />
                </div>
                <a
                  href="#/"
                  className="md:ml-7 flex-1 md:inline-flex block justify-center md:text-left text-center rounded-xl text-lg font-semibold py-[13px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]"
                >
                  Add to Cart
                </a>
              </div>
              <div className="text-base md:my-9 my-7">
                <p className="mb-2">
                  <span className="font-medium">SKU:</span> KUMO42568
                </p>
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  <a
                    className="group transition-all duration-300 ease-in-out"
                    href="#/"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                      Hot Dresses
                    </span>
                  </a>
                  ,{" "}
                  <a
                    className="group transition-all duration-300 ease-in-out"
                    href="#/"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                      Women
                    </span>
                  </a>
                  ,{" "}
                  <a
                    className="group transition-all duration-300 ease-in-out"
                    href="#/"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                      Clothing
                    </span>
                  </a>
                </p>
              </div>
              <div className="md:mb-7 mb-5 flex flex-wrap text-sm">
                <a
                  href="#/"
                  className="font-medium text-gray px-3 py-2 mr-[10px] md:mb-0 mb-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2"
                >
                  Hat
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray px-3 py-2 mr-[10px] md:mb-0 mb-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2"
                >
                  Women
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray px-3 py-2 mr-[10px] md:mb-0 mb-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2"
                >
                  Orange
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray px-3 py-2 mr-[10px] md:mb-0 mb-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2"
                >
                  Cotton
                </a>
                <a
                  href="#/"
                  className="font-medium text-gray px-3 py-2 mr-[10px] md:mb-0 mb-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2"
                >
                  Sticker
                </a>
              </div>
              <p>
                <button
                  onClick={() => addWishList()}
                  className={`flex items-center text-gray relative text-base hover:scale-105 duration-75`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    fill="none"
                    viewBox="0 0 22 18"
                    className="mr-2"
                  >
                    <path
                      fill={`${wished ? "#122940" : "currentColor"}`}
                      d="M19.403 3.277l-.862.508.862-.508zm-16.806 0l.862.508-.862-.508zM3.882 9.43l-.728.685.728-.685zm14.236 0l.728.685-.728-.685zM9.023 1.964l-.582.813.582-.813zm3.954 0l.582.813-.582-.813zM9.543 15.45l-.729.685.729-.685zm.728-.685l-5.66-6.021-1.457 1.37 5.66 6.02 1.457-1.369zm7.118-6.021l-5.66 6.021 1.457 1.37 5.66-6.021-1.457-1.37zm-12.778 0c-1.543-1.641-2.076-3.39-1.152-4.96L1.736 2.77c-1.59 2.699-.385 5.426 1.418 7.344l1.457-1.37zm13.93-4.96c.924 1.57.391 3.319-1.152 4.96l1.457 1.37c1.803-1.918 3.008-4.645 1.418-7.344l-1.723 1.015zm-15.082 0C4.06 2.764 4.864 2.22 5.684 2.056c.824-.164 1.79.03 2.757.722L9.605 1.15C8.26.187 6.74-.195 5.291.094 3.84.384 2.586 1.326 1.736 2.77l1.723 1.015zm10.1-1.007c.967-.693 1.933-.886 2.757-.722.82.165 1.623.708 2.225 1.73l1.723-1.015C19.414 1.326 18.16.385 16.71.094c-1.448-.29-2.969.093-4.314 1.056l1.164 1.627zm-1.621 1.43c.297-.315.9-.914 1.621-1.43L12.395 1.15a13.797 13.797 0 00-1.911 1.683l1.454 1.374zM8.44 2.777a11.795 11.795 0 011.621 1.43l1.454-1.374a13.798 13.798 0 00-1.91-1.683L8.44 2.777zm2.043.056a.708.708 0 011.032 0l-1.454 1.374a1.292 1.292 0 001.876 0l-1.454-1.374zm-1.67 13.302a3 3 0 004.372 0l-1.457-1.37a1 1 0 01-1.458 0l-1.457 1.37z"
                    ></path>
                  </svg>
                  {wished ? "Added to wishlist" : "Add to wishlist"}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="md:mb-[90px] mb-[50px]">
          {isLargeScreen ? <Tabs data={data} /> : <Accordion />}
        </div>
      </div>
      <FeaturedCardSlider content={featuredCard} />
      <PreFooter />
    </>
  );
}
