import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import Article from "../../components/Article";
import PreFooter from "../../blocks/pre-footer";
import Pagination from "../../components/Pagination";
import {dataBlog} from "./mockApi"

export default function BlogThreeColNoSidebar() {
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
            <div className="lg:col-span-12 lg:mb-0 mb-9">
              <div className="grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-4 md:mb-20 mb-10">
                {content}
              </div>
              <div className="flex justify-center">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  )
}