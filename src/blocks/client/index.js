import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'

function ArrowPrevSlick(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 !h-[50px] !w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] !bg-white hover:!bg-gray-light2`}
      style={{...style}}
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
    </div>
  );
}

function ArrowNextSlick(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 !h-[50px] !w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] !bg-white hover:!bg-gray-light2`}
      style={{...style}}
      onClick={onClick}
    >
      <ChevronRightIcon className="h-7 w-14 text-black2" aria-hidden="true"/>
    </div>
  );
}

export default class Client extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ArrowNextSlick/>,
      prevArrow: <ArrowPrevSlick/>
    };

    return (
      <section className="mb-[180px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">Client love us & we love them</h2>
          <Slider {...settings}>
            {Array.from(Array(5), (e, i) => {
              return (
                <div key={i}
                     className="pt-[45px] pb-[30px] px-[30px] rounded-[10px] border border-solid border-gray-light7">
                  <div className="flex justify-between mb-5">
                    <div className="flex">
                      <img src={require('../../assets/images/slide2-human-1.png')} alt="avatar"
                           className="flex-shrink-0 w-[62px] h-[62px] rounded-[31px] mr-4"/>
                      <div>
                        <h4 className="text-lg font-semibold text-black2 mb-1">William Hallen</h4>
                        <img src={require('../../assets/images/star-icon.png')} alt="star-icon"/>
                      </div>
                    </div>
                    <div className="w-[60px] flex-shrink-0">
                      <img src={require('../../assets/images/thumb-products.png')} alt="thumb-img"/>
                    </div>
                  </div>
                  <p className="text-lg text-black2">The standard chunk of Lorem Ipsum used since the 1500s es is
                    reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus amet Bonorum et
                    Malorum</p>
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    )
  }
}