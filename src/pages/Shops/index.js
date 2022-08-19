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
  };

  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="mb-[120px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden flex justify-center flex-col bg-gray-light10 rounded-xl min-h-[235px] px-[75px] mb-7">
            <p className="font-medium uppercase">Sale upto 40% Off</p>
            <h1 className="text-[40px] font-bold">Category Activewear</h1>
            <img src={require('../../assets/images/img-banner-shop.png')}
                 alt="img-banner-shop"
                 className="object-cover object-center absolute inset-y-0 right-0"/>
          </div>
          <div className="flex justify-between items-center mb-[30px]">
            <p className="text-gray">Showing 1 - 20 of 89 results</p>
            <div className="w-[245px]">
              <Select options={options} styles={customStyles} components={{IndicatorSeparator: () => null}} placeholder={'Defaulf sorting'} />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 pb-5 mb-7 border-b border-solid border-gray-light2">
            {
              featuredCard?.lists?.map((item) =>
                <Card key={item.id} content={item} />
              )
            }
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray">Showing 1 - 20 of 89 results</p>
            <Pagination />
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}