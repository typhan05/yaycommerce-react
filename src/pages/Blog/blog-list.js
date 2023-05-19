import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import Sidebar from "../../components/Sidebar";
import PreFooter from "../../blocks/pre-footer";
import Pagination from "../../components/Pagination";
import { dataBlog } from "./mockApi";

const dataLists = [
  {
    id: 1,
    image: "img-blog-list-1.jpg",
    tags: [
      {
        name: "Fashion Tips",
      },
      {
        name: "Tutorials",
      },
    ],
    title: "How to Add Conditional Logic to WooCommerce Emails",
    date: "Posted on May 10, 2022",
    time: "9 mins read",
    description:
      "Conditional logic might seem daunting as it sounds. But with the built-in support of YayMail for WooCommerce email templates, it is simple. It allows you to show particular email blocks when the conditions are met. For example, when a specific customer has made a purchase of over $1,000 on your store...",
    link: {
      href: "#/",
      text: "Continue Reading",
    },
  },
  {
    id: 2,
    image: "img-blog-list-2.jpg",
    tags: [
      {
        name: "Fashion Tips",
      },
      {
        name: "Tutorials",
      },
    ],
    title: "How to Add Conditional Logic to WooCommerce Emails",
    date: "Posted on May 10, 2022",
    time: "9 mins read",
    description:
      "Conditional logic might seem daunting as it sounds. But with the built-in support of YayMail for WooCommerce email templates, it is simple. It allows you to show particular email blocks when the conditions are met. For example, when a specific customer has made a purchase of over $1,000 on your store...",
    link: {
      href: "#/",
      text: "Continue Reading",
    },
  },
  {
    id: 3,
    image: "img-blog-list-1.jpg",
    tags: [
      {
        name: "Fashion Tips",
      },
      {
        name: "Tutorials",
      },
    ],
    title: "How to Add Conditional Logic to WooCommerce Emails",
    date: "Posted on May 10, 2022",
    time: "9 mins read",
    description:
      "Conditional logic might seem daunting as it sounds. But with the built-in support of YayMail for WooCommerce email templates, it is simple. It allows you to show particular email blocks when the conditions are met. For example, when a specific customer has made a purchase of over $1,000 on your store...",
    link: {
      href: "#/",
      text: "Continue Reading",
    },
  },
  {
    id: 4,
    image: "img-blog-list-2.jpg",
    tags: [
      {
        name: "Fashion Tips",
      },
      {
        name: "Tutorials",
      },
    ],
    title: "How to Add Conditional Logic to WooCommerce Emails",
    date: "Posted on May 10, 2022",
    time: "9 mins read",
    description:
      "Conditional logic might seem daunting as it sounds. But with the built-in support of YayMail for WooCommerce email templates, it is simple. It allows you to show particular email blocks when the conditions are met. For example, when a specific customer has made a purchase of over $1,000 on your store...",
    link: {
      href: "#/",
      text: "Continue Reading",
    },
  },
];

export default function BlogList() {
  const content = dataLists.map((item) => (
    <div
      key={`blog-item` + item.id}
      className="shadow-[0_1px_3px_rgba(0,0,0,0.15)] rounded-[10px] overflow-hidden lg:mb-10 mb-5 transition-all duration-300 hover:shadow-[0px_9px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative">
        <a href="#/" className="flex rounded-t-xl overflow-hidden">
          <img
            src={require("../../assets/images/" + item.image)}
            alt={item.title}
            className="w-full object-cover transform transition origin-center"
          />
          <div className="group absolute bottom-4 left-4 w-10 h-10 rounded-5">
            <img
              src={require("../../assets/images/img-avt-2.png")}
              alt={`avt-` + item.id}
            />
            <span className="absolute left-[calc(100%+10px)] top-2/4 -translate-y-2/4 z-20 hidden md:block invisible opacity-0 transition-all ease-in-out duration-300 px-[6px] py-1 min-w-max text-xs text-white bg-black2 rounded-sm after:absolute after:w-0 after:h-0 after:top-2/4 after:-left-[5px] after:-translate-y-2/4 after:border-y-[6px] after:border-r-[6px] after:border-y-transparent after:border-r-black2 group-hover:opacity-100 group-hover:visible">
              By YayCommerce
            </span>
          </div>
        </a>
      </div>
      <div className="lg:p-[30px] py-6 px-5 bg-white">
        <div className="mb-3">
          {item.tags.map((tag, i) => {
            return (
              <a
                href="#/"
                className="text-sm text-green rounded-[7px] bg-[rgba(55,126,98,0.07)] py-1 px-2 mr-2"
              >
                {tag.name}
              </a>
            );
          })}
        </div>
        <h3 className="text-2xl font-semibold mb-2">
          <a
            className="group transition-all duration-300 ease-in-out"
            href="#/"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
              {item.title}
            </span>
          </a>
        </h3>
        <div className="flex items-center text-sm mb-3">
          {item.date}{" "}
          <span className="inline-flex w-[3px] h-[3px] bg-black2 rounded-[3px] mx-[15px]"></span>{" "}
          {item.time}
        </div>
        <div className="text-gray mb-4">{item.description}</div>
        <div>
          <a
            href="#/"
            className="inline-block pb-0.5 bg-gradient-line transition-all duration-500 hover:bg-left-bottom"
          >
            Continue Reading
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <BreadCrumb content={dataBlog?.breadcrumbs} />
      <section className="lg:mb-[150px] md:mb-20 mb-10">
        <div className="container mx-auto">
          <h1 className="md:text-4xl text-[28px] font-bold mb-5">Our blog</h1>
          <div className="lg:grid flex lg:grid-cols-12 lg:gap-x-12 flex-col-reverse lg:items-start xl:gap-x-[30px]">
            <div className="lg:col-span-9 lg:mb-0 mb-9 xl:pr-[90px]">
              <div className="md:mb-20 mb-10">{content}</div>
              <Pagination />
            </div>
            <div className="lg:col-span-3 lg:mb-0 mb-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <PreFooter />
    </>
  );
}
