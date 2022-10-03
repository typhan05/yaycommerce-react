import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import {breadcrumbs, featuredCard, options} from "./mockApi";
import Select from "react-select";
import Card from "../../components/Card";
import PreFooter from "../../blocks/pre-footer";

export default function Search() {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      height: '44px',
      'min-height': '44px',
      borderRadius: '9px',
      borderColor: state.isFocused
        ? '#122940'
        : '#D3DCE5',
      '&:hover': {
        borderColor: state.isFocused
          ? '#122940'
          : '#D3DCE5',
      },
      padding: '0 5px',
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: '#5A6D80',
        opacity: 0.5,
      }
    },
    option: (base, { isFocused }) => {
      return {
        ...base,
        backgroundColor: isFocused ? '#F2F2F2' : '#FFFFFF',
        color: '#122940'
      };
    }
  };

  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="md:mb-[100px] mb-20">
        <div className="container mx-auto">
          <h1 className="md:text-4xl text-[28px] font-bold mb-5">Search results for: "dresses women"</h1>
          <div className="md:flex justify-between items-center mb-[30px]">
            <div className="w-[245px] md:mb-0 mb-2">
              <Select options={options} styles={customStyles} components={{IndicatorSeparator: () => null}} placeholder={'Defaulf sorting'} />
            </div>
            <p className="md:text-base text-sm text-gray md:mb-0 mb-2">Showing 1 - 20 of 89 results</p>
          </div>
          <div className="grid lg:gap-x-8 lg:grid-cols-4 md:grid-cols-3 gap-x-5 grid-cols-2">
            {
              featuredCard?.lists?.map((item) =>
                <Card key={item.id} content={item} />
              )
            }
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}