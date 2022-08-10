import React, {Component} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

export default class FeaturedCardSlider extends Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }

  render() {
    const itemSlider = this.props.content.lists.map((item) =>
        <SwiperSlide key={item.id} className="group relative pb-8">
          <a href="#/"
             className="relative flex justify-center items-center mb-3 h-80 bg-gray-light5 ease-in-out duration-300 rounded-xl overflow-hidden group-hover:bg-[rgba(90,109,128,0.1)] sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
            <span
              className={`bg-${item.sale.color} absolute top-3.5 left-3.5 rounded-lg text-sm text-white px-2 py-[1px]`}>{item.sale.number}</span>
            <img src={require('../../assets/images/' + item.image)}
                 alt={item.title}
                 className="object-center"/>
          </a>
          <p className="text-gray text-sm mb-[5px]">{item.tag}</p>
          <p className="flex items-center text-sm text-gray mb-2">
          <span className="-ml-[1px] mr-1 flex">
            {Array.from(Array(item.rate), (e, i) => {
              return (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                  viewBox="0 0 14 12"
                  className="mr-[2px]"
                >
                  <path
                    fill="#FFAC70"
                    d="M6.596.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.376.489.69.489h3.301c.703 0 .995.877.427 1.28l-2.671 1.893c-.254.18-.36.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792l-2.67-1.894a.74.74 0 00-.854 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.263-.792L1.158 5.322c-.569-.403-.277-1.28.426-1.28h3.302a.724.724 0 00.69-.49L6.596.49z"
                  ></path>
                </svg>
              )
            })}
            {Array.from(Array(5), (e, i) => {
              return (
                <>
                {i >= item.rate && !item.rate_haft && <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                  viewBox="0 0 14 12"
                  className="mr-[2px]"
                >
                  <path
                    fill="#D3DCE5"
                    d="M6.596.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.376.489.69.489h3.301c.703 0 .995.877.427 1.28l-2.671 1.893c-.254.18-.36.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792l-2.67-1.894a.74.74 0 00-.854 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.263-.792L1.158 5.322c-.569-.403-.277-1.28.426-1.28h3.302a.724.724 0 00.69-.49L6.596.49z"
                  ></path>
                </svg>}
                </>
              )
            })}
            {item.rate_haft && item.rate <= 5 &&
              <svg xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              fill="none"
              viewBox="0 0 13 12"
              className="mr-[2px]"
              >
              <path
              fill="#FFAC70"
              d="M5.69.49c.216-.653 1.154-.653 1.37 0l1.01 3.063c.097.291.373.489.685.489h3.274c.697 0 .987.877.423 1.28L9.803 7.215a.701.701 0 00-.261.792l1.012 3.063c.215.652-.544 1.195-1.107.792l-2.65-1.894a.729.729 0 00-.845 0l-2.649 1.894c-.563.403-1.322-.14-1.107-.792l1.012-3.063a.701.701 0 00-.261-.792L.297 5.322c-.563-.403-.273-1.28.424-1.28h3.274a.718.718 0 00.684-.49L5.691.49z"
              ></path>
              <mask
              id="mask0_2993_656"
              style={{ maskType: "alpha" }}
              width="13"
              height="12"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              >
              <path
              fill="#FFAC70"
              d="M5.739.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.375.489.69.489h3.301c.703 0 .995.877.427 1.28L9.886 7.215c-.255.18-.361.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792L6.855 9.968a.74.74 0 00-.853 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.264-.792L.301 5.322c-.57-.403-.277-1.28.426-1.28h3.301a.724.724 0 00.69-.49L5.738.49z"
              ></path>
              </mask>
              <g mask="url(#mask0_2993_656)">
              <path fill="#D3DCE5" d="M8.471 -2H17.747999999999998V14H8.471z"></path>
              </g>
              </svg>
            }
          </span>{`(${item.comment})`}
          </p>
          <h3 className="text-md leading-4 text-black2 font-medium mb-2">
            <a href="#/" className="link link-underline link-underline-black">{item.title}</a>
          </h3>
          <p className="text-md leading-5 text-black2 font-semibold"><span
            className="text-gray line-through">{item.price_old}</span> {item.price}</p>
          <div className="mt-4">
            <a href="#/"
               className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
          </div>
        </SwiperSlide>
    )
    return (
      <section className="mb-[120px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">{this.props.content.title}</h2>
          <div className="relative">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
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
              className={`absolute right-[-26px] top-1/4 cursor-pointer flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2`}
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