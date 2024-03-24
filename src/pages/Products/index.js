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
import Loader from "../../components/Loader";
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
import DrawerWishList from "../../components/Drawer/Wishlist";
import useWishList from "../../components/Drawer/Wishlist/useWishList";

export const useMedia = (query) => {
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
  const [loadingWished, setLoadingWished] = useState(false);
  const { isShowingWishList, toggleWishList } = useWishList();

  const addWishList = () => {
    setLoadingWished(true);
    setTimeout(function () {
      setLoadingWished(false);
      setWished(true);
    }, 2000);
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
              <p className="inline-flex items-center gap-2">
                <span
                  className={`flex gap-2 items-center relative text-base duration-75 hover:text-black2 ${
                    wished ? "text-black2" : "text-gray"
                  }`}
                >
                  {wished ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 512 512"
                      fill="#122940"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                      />
                    </svg>
                  )}
                  {wished ? (
                    <span>
                      Product added!{" "}
                      <button
                        onClick={toggleWishList}
                        className="relative text-black2 leading-5 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black2 before:origin-center before:h-[1px] hover:before:w-0 before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black2 after:origin-center after:h-[1px] hover:after:w-0 after:w-[50%] after:bottom-0 after:right-[50%]"
                      >
                        Browse wishlist
                      </button>
                    </span>
                  ) : (
                    <button onClick={() => addWishList()}>
                      Add to wishlist
                    </button>
                  )}
                </span>
                {loadingWished && <Loader />}
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
      <DrawerWishList isShowing={isShowingWishList} hide={toggleWishList} />
    </>
  );
}
