import React, {useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import BreadCrumb from "../../components/Breadcrumb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {FreeMode, Navigation, Thumbs} from "swiper";
import Tabs from "../../components/Tabs";
import FeaturedCardSlider from "../../blocks/featured-card-slider";
import Select from "react-select";
import Count from "../../components/Count";

const breadcrumbs = [
  {
    'id': 1,
    'text': 'Home',
    'link': '/yaycommerce-react'
  },
  {
    'id': 2,
    'text': 'Wonmen Fashion',
    'link': '/yaycommerce-react/products'
  },
  {
    'id': 3,
    'text': 'Hot dresses',
    'link': '/yaycommerce-react/products'
  },
  {
    'id': 4,
    'text': 'ZARA romper dress pink size XS - $12',
    'link': ''
  },
]

const data = [
  {
    heading: "Item 1",
    body: "Hi from item 1"
  },
  {
    heading: "Item 2",
    body: "Hi from item 2"
  },
  {
    heading: "Item 3",
    body: "Hi from item 3"
  }
];

const featuredCard = {
  'title': 'Related products',
  'lists': [
    {
      'id': '1',
      'sale': {
        'number': 'HOT',
        'color': 'pink',
      },
      'image': 'img-product-1.png',
      'rate': 4,
      'comment': '21',
      'tag': 'Music',
      'title': 'Album',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '2',
      'sale': {
        'number': '12%',
        'color': 'orange',
      },
      'image': 'img-product-2.png',
      'rate': 3,
      'comment': '453',
      'tag': 'Accessories',
      'title': 'Beanie',
      'price': 'USD$18.00',
      'price_old': 'USD$20.00',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '3',
      'sale': '',
      'image': 'img-product-3.png',
      'rate': 5,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Beanie with Logo',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '4',
      'sale': {
        'number': 'NEW',
        'color': 'green-light',
      },
      'image': 'img-product-4.png',
      'rate': 4,
      'rate_haft': true,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Belt',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '5',
      'sale': '',
      'image': 'img-product-2.png',
      'rate': 5,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Album',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '6',
      'sale': {
        'number': 'NEW',
        'color': 'green-light',
      },
      'image': 'img-product-4.png',
      'rate': 4,
      'rate_haft': true,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Belt',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '7',
      'sale': '',
      'image': 'img-product-3.png',
      'rate': 5,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Beanie with Logo',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '8',
      'sale': {
        'number': 'NEW',
        'color': 'green-light',
      },
      'image': 'img-product-4.png',
      'rate': 4,
      'rate_haft': true,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Belt',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '9',
      'sale': {
        'number': 'NEW',
        'color': 'green-light',
      },
      'image': 'img-product-4.png',
      'rate': 4,
      'rate_haft': true,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Belt',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '10',
      'sale': '',
      'image': 'img-product-2.png',
      'rate': 5,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Album',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '11',
      'sale': {
        'number': 'NEW',
        'color': 'green-light',
      },
      'image': 'img-product-4.png',
      'rate': 4,
      'rate_haft': true,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Belt',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
    {
      'id': '12',
      'sale': '',
      'image': 'img-product-2.png',
      'rate': 5,
      'comment': '21',
      'tag': 'Accessories',
      'title': 'Album',
      'price': 'USD$15.00',
      'price_old': '',
      'button': {
        'text': 'Add to card',
        'classes': '',
      }
    },
  ]
};

const sliderProducts = [
  {
    'id': '1',
    'img': 'img-product-01.png'
  },
  {
    'id': '2',
    'img': 'img-product-02.png'
  },
  {
    'id': '3',
    'img': 'img-product-03.png'
  },
  {
    'id': '4',
    'img': 'img-product-04.png'
  },
  {
    'id': '5',
    'img': 'img-product-05.png'
  },
];

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

export default function Products() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mx-auto py-20">
      <BreadCrumb content={breadcrumbs}/>
      <div className="grid grid-cols-2 gap-4 mb-[90px]">
        <div className="max-w-[612px]">
          <Swiper
            spaceBetween={0}
            thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Thumbs]}
            className="mb-[10px]"
          >
            {sliderProducts.map((item) =>
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center w-full h-[612px] bg-gray-light5 rounded-[7px]">
                  <img src={require('../../assets/images/' + item.img)}
                       alt={item.img}
                       className="object-cover object-center"/>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-thumbnail"
          >
            {sliderProducts.map((item) =>
              <SwiperSlide key={item.id}>
                <div className="flex items-center justify-center cursor-pointer w-24 h-24 bg-gray-light5 rounded-[7px]">
                  <img src={require('../../assets/images/' + item.img)}
                       alt={item.img}
                       className="max-w-[54px] mx-auto"/>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div>
          <h2 className="text-[30px] text-black2 font-bold mb-4">ZARA romper dress pink size XS - $12</h2>
          <div className="flex items-center mb-5">
            <p className="text-2xl text-black2 font-medium mr-[14px]"><span
              className="text-xl text-gray line-through mr-1">$129.50</span>$90.65</p>
            <p className="bg-orange rounded-lg text-sm text-white px-2 py-[2px]">-30%</p>
            <p className="h-[18px] w-[1px] bg-gray-light9 mx-5"></p>
            <p className="mr-[7px]">
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
            <p className="text-base text-gray leading-[25px]">4.7 of 579 reviews</p>
          </div>
          <div className="mb-10">
            <p className="text-base text-black2">The short skirt with the round neck has a cotton double-layered, sexy
              figure, off-shoulder design, and
              flared long sleeves with pink and white stripes pattern. Committed 100% soft cotton yarn, bring you a
              comfortable wearing feeling.</p>
          </div>
          <div className="max-w-[490px]">
            <div className="mb-6">
              <label className="inline-block text-base text-black2 font-medium mb-2">Size</label>
              <Select options={options} components={{IndicatorSeparator: () => null}} placeholder={'Select your size'}/>
            </div>
            <div>
              <label className="inline-block text-base text-black2 font-medium mb-2">Color</label>
              <Select options={options} components={{IndicatorSeparator: () => null}}
                      placeholder={'Select favorite color'}/>
            </div>
            <div className="flex mt-[30px]">
              <div className="w-[153px] flex-shrink-0">
                <Count number={1}/>
              </div>
              <a href="#/"
                 className="ml-7 flex-1 inline-flex justify-center rounded-xl text-lg font-semibold py-[13px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">Add
                to Cart</a>
            </div>
            <div className="text-base text-black2 my-9">
              <p className="mb-2"><span className="font-medium">SKU:</span> KUMO42568</p>
              <p><span className="font-medium">Category:</span> <a
                className='group transition-all duration-300 ease-in-out' href='#/'>
                    <span
                      className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
                      Hot Dresses
                    </span>
              </a>, <a className='group transition-all duration-300 ease-in-out' href='#/'>
                    <span
                      className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
                      Women
                    </span>
              </a>, <a className='group transition-all duration-300 ease-in-out' href='#/'>
                    <span
                      className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
                      Clothing
                    </span>
              </a></p>
            </div>
            <div className="mb-7">
              <a href="#/"
                 className="font-medium text-gray px-3 py-2 mr-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2">Hat</a>
              <a href="#/"
                 className="font-medium text-gray px-3 py-2 mr-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2">Women</a>
              <a href="#/"
                 className="font-medium text-gray px-3 py-2 mr-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2">Orange</a>
              <a href="#/"
                 className="font-medium text-gray px-3 py-2 mr-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2">Cotton</a>
              <a href="#/"
                 className="font-medium text-gray px-3 py-2 mr-[10px] rounded-[7px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.05)] hover:bg-gray-light3 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:text-black2">Sticker</a>
            </div>
            <p><a href="#/" className="flex items-center text-gray text-base hover:text-black2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                fill="none"
                viewBox="0 0 22 18"
                className="mr-2"
              >
                <path
                  fill="currentColor"
                  d="M19.403 3.277l-.862.508.862-.508zm-16.806 0l.862.508-.862-.508zM3.882 9.43l-.728.685.728-.685zm14.236 0l.728.685-.728-.685zM9.023 1.964l-.582.813.582-.813zm3.954 0l.582.813-.582-.813zM9.543 15.45l-.729.685.729-.685zm.728-.685l-5.66-6.021-1.457 1.37 5.66 6.02 1.457-1.369zm7.118-6.021l-5.66 6.021 1.457 1.37 5.66-6.021-1.457-1.37zm-12.778 0c-1.543-1.641-2.076-3.39-1.152-4.96L1.736 2.77c-1.59 2.699-.385 5.426 1.418 7.344l1.457-1.37zm13.93-4.96c.924 1.57.391 3.319-1.152 4.96l1.457 1.37c1.803-1.918 3.008-4.645 1.418-7.344l-1.723 1.015zm-15.082 0C4.06 2.764 4.864 2.22 5.684 2.056c.824-.164 1.79.03 2.757.722L9.605 1.15C8.26.187 6.74-.195 5.291.094 3.84.384 2.586 1.326 1.736 2.77l1.723 1.015zm10.1-1.007c.967-.693 1.933-.886 2.757-.722.82.165 1.623.708 2.225 1.73l1.723-1.015C19.414 1.326 18.16.385 16.71.094c-1.448-.29-2.969.093-4.314 1.056l1.164 1.627zm-1.621 1.43c.297-.315.9-.914 1.621-1.43L12.395 1.15a13.797 13.797 0 00-1.911 1.683l1.454 1.374zM8.44 2.777a11.795 11.795 0 011.621 1.43l1.454-1.374a13.798 13.798 0 00-1.91-1.683L8.44 2.777zm2.043.056a.708.708 0 011.032 0l-1.454 1.374a1.292 1.292 0 001.876 0l-1.454-1.374zm-1.67 13.302a3 3 0 004.372 0l-1.457-1.37a1 1 0 01-1.458 0l-1.457 1.37z"
                ></path>
              </svg>
              Add to wishlist</a></p>
          </div>
        </div>
      </div>
      <div className="mb-[90px]">
        <Tabs data={data}/>
      </div>
      <FeaturedCardSlider content={featuredCard}/>
    </div>
  );
}