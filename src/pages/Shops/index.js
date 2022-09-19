import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import {breadcrumbs, featuredCard} from "./mockApi";
import {options} from "./mockApi";
import Select from "react-select";
import Card from "../../components/Card";
import PreFooter from "../../blocks/pre-footer";
import Pagination from "../../components/Pagination";

export default function Shops() {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: '44px',
      'min-height': '44px',
      borderRadius: '9px',
      borderColor: '#D3DCE5',
      padding: '0 5px',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#5A6D80',
        opacity: 0.5,
      }
    }
  };

  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="md:mb-[120px] mb-20">
        <div className="container mx-auto">
          <div className="relative overflow-hidden flex justify-center flex-col bg-gray-light10 rounded-xl md:min-h-[235px] lg:px-[75px] p-7 mb-7">
            <p className="lg:text-base text-sm font-medium uppercase">Sale upto 40% Off</p>
            <h1 className="lg:text-[40px] text-[28px] font-bold">Category Activewear</h1>
            <img src={require('../../assets/images/img-banner-shop.png')}
                 alt="img-banner-shop"
                 className="hidden md:block object-cover object-center absolute inset-y-0 lg:right-0 -right-1/3"/>
          </div>
          <div className="md:flex justify-between items-center mb-[30px]">
            <p className="md:text-base text-sm text-gray md:mb-0 mb-2">Showing 1 - 20 of 89 results</p>
            <div className="w-[245px]">
              <Select options={options} styles={customStyles} components={{IndicatorSeparator: () => null}} placeholder={'Defaulf sorting'} />
            </div>
          </div>
          <div className="grid lg:gap-x-8 lg:grid-cols-4 md:grid-cols-3 gap-x-5 grid-cols-2 mb-7 border-b border-solid border-gray-light2">
            {
              featuredCard?.lists?.map((item) =>
                <Card key={item.id} content={item} />
              )
            }
          </div>
          <div className="md:flex justify-between items-center">
            <p className="md:text-base text-sm text-gray md:mb-0 mb-2">Showing 1 - 20 of 89 results</p>
            <Pagination />
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}