import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import {breadcrumbs, featuredCard} from "./mockApi";
import {options} from "./mockApi";
import Select from "react-select";
import Card from "../../components/Card";
import PreFooter from "../../blocks/pre-footer";
import Pagination from "../../components/Pagination";

export default function Categories() {
  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="mb-[150px]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-5">Clothing</h1>
          <div className="flex justify-between items-center mb-[30px]">
            <p className="text-gray">Showing 1 - 20 of 89 results</p>
            <div className="w-[245px]">
              <Select options={options} defaultValue={options[0]} components={{IndicatorSeparator: () => null}} />
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