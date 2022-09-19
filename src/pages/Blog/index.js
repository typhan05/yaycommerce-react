import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import Article from "../../components/Article";
import Sidebar from "../../components/Sidebar";
import PreFooter from "../../blocks/pre-footer";
import Pagination from "../../components/Pagination";
import {dataBlog} from "./mockApi"

export default function BlogTwoCol() {
  const content = dataBlog?.blogLists.map((item) =>
    <Article content={item}/>
  )

  return (
    <>
      <section className="lg:py-10 pt-10">
        <div className="container mx-auto text-center">
          <h1 className="md:text-4xl text-[28px] font-bold -mb-5">Blog</h1>
          <BreadCrumb content={dataBlog?.breadcrumbs}/>
        </div>
      </section>
      <section className="lg:mb-[150px] md:mb-20 mb-10">
        <div className="container mx-auto">
          <div className="lg:grid flex lg:grid-cols-12 lg:gap-x-12 flex-col-reverse lg:items-start xl:gap-x-[30px]">
            <div className="lg:col-span-9 lg:mb-0 mb-9 xl:pr-[90px]">
              <div className="grid md:grid-cols-2 md:gap-8 grid-cols-1 gap-5 md:mb-20 mb-10">
                {content}
              </div>
              <div className="flex justify-center">
                <Pagination />
              </div>
            </div>
            <div className="lg:col-span-3 lg:mb-0 mb-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  )
}