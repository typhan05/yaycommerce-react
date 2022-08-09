import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

function ArrowPrevSlick(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 mt-[-80px] !h-[50px] !w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] !bg-white hover:!bg-gray-light2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-7 w-14 text-black2" aria-hidden="true" />
    </div>
  );
}

function ArrowNextSlick(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 mt-[-80px] !h-[50px] !w-[50px] rounded-[25px] shadow-[0_10px_25px_rgba(55,126,98,0.05)] !bg-white hover:!bg-gray-light2`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRightIcon className="h-7 w-14 text-black2" aria-hidden="true" />
    </div>
  );
}

export default class FeaturedCardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ArrowNextSlick />,
      prevArrow: <ArrowPrevSlick />
    };
    const itemSlider = this.props.content.lists.map((item) =>
      <div key={item.id} className="group relative pb-8">
        <a href="#/"
           className="relative flex justify-center items-center mb-3 h-80 bg-gray-light5 ease-in-out duration-300 rounded-xl overflow-hidden group-hover:bg-[rgba(90,109,128,0.1)] sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
          <span className={`bg-${item.sale.color} absolute top-3.5 left-3.5 rounded-lg text-sm text-white px-2 py-[1px]`}>{item.sale.number}</span>
          <img src={require('../../assets/images/' + item.image)}
               alt={item.title}
               className="object-center"/>
        </a>
        <p className="text-gray text-sm mb-[5px]">{item.tag}</p>
        <p className="flex items-center text-sm text-gray mb-2">
          <span className="mr-2">
          <img src={require('../../assets/images/star-icon.png')} alt="star-icon"/>
          </span>{`(${item.comment})`}
        </p>
        <h3 className="text-md leading-4 text-black2 font-medium mb-2">
          <a href="#/" className="link link-underline link-underline-black">{item.title}</a>
        </h3>
        <p className="text-md leading-5 text-black2 font-semibold"><span className="text-gray line-through">{item.price_old}</span> {item.price}</p>
        <div className="mt-4">
          <a href="#/" className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
        </div>
      </div>
    )
    return (
      <section className="mb-[120px]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">{this.props.content.title}</h2>
          <Slider {...settings}>
            {itemSlider}
          </Slider>
        </div>
      </section>
    );
  }
}