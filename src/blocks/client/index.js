import React, {Component} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Pagination} from "swiper";

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.swiperRef = React.createRef();
  }

  render() {
    return (
      <section className="mb-[130px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Client love us & we love them</h2>
          <div className="relative swiper-custom">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true
              }}
              loop={true}
              ref={this.swiperRef}
            >
              {Array.from(Array(5), (e, i) => {
                return (
                  <SwiperSlide key={i}
                               className="pt-[45px] pb-[30px] px-[30px] rounded-[10px] border border-solid border-gray-light7">
                    <div className="flex justify-between mb-5">
                      <div className="flex">
                        <img src={require('../../assets/images/slide2-human-1.png')} alt="avatar"
                             className="flex-shrink-0 w-[62px] h-[62px] rounded-[31px] mr-4"/>
                        <div>
                          <h4 className="text-lg font-semibold text-black2 mb-1">William Hallen</h4>
                          <div className="flex">
                            {Array.from(Array(5), (e, i) => {
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
                          </div>
                        </div>
                      </div>
                      <div className="w-[60px] flex-shrink-0">
                        <img src={require('../../assets/images/thumb-products.png')} alt="thumb-img"/>
                      </div>
                    </div>
                    <p className="text-lg text-black2">The standard chunk of Lorem Ipsum used since the 1500s es is
                      reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus amet Bonorum
                      et
                      Malorum</p>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div
              className={`absolute left-[-26px] top-1/2 -translate-y-2/4 mt-[-30px] cursor-pointer flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2`}
              onClick={() => this.swiperRef.current.swiper.slidePrev()}
            >
              <ChevronLeftIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
            </div>
            <div
              className={`absolute right-[-26px] top-1/2 -translate-y-2/4 mt-[-30px] cursor-pointer flex items-center justify-center z-10 h-[50px] w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] bg-white hover:bg-gray-light2`}
              onClick={() => this.swiperRef.current.swiper.slideNext()}
            >
              <ChevronRightIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}