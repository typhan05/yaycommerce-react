import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class FeaturedCardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const itemSlider = this.props.content.sliders.map((item) =>
      <div className="group relative">
        <div
          className="relative flex justify-center items-center mb-3 h-80 bg-gray-light5 rounded-xl overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
          <img src={require('../../assets/images/' + item.image)}
               alt={item.title}
               className="object-center"/>
        </div>
        <p className="text-gray text-sm mb-2">{item.tag}</p>
        <h3 className="text-md leading-4 text-black2 font-medium mb-2">
          <a href="#/">
            <span className="absolute inset-0"></span>
            {item.title}
          </a>
        </h3>
        <p className="text-md leading-5 text-black2 font-semibold">{item.price}</p>
        <div className="mt-4">
          <a href="#/" className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
        </div>
      </div>
    )
    return (
      <section className="mb-[150px]">
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