import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import {breadcrumbs, featuredCard, options} from "./mockApi";
import Select from "react-select";
import Card from "../../components/Card";
import PreFooter from "../../blocks/pre-footer";

export default function Search() {
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
      }
    }
  };

  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="mb-[100px]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-5">Search results for: "dresses women"</h1>
          <div className="flex justify-between items-center mb-[30px]">
            <div className="w-[245px]">
              <Select options={options} styles={customStyles} components={{IndicatorSeparator: () => null}} placeholder={'Defaulf sorting'} />
            </div>
            <p className="text-gray">Showing 1 - 20 of 89 results</p>
          </div>
          <div className="grid grid-cols-4 gap-8">
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