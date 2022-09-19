import React from 'react';
import Article from "../../components/Article";

export default function OurBlog(props) {
  const content = props.content.lists.map((item) =>
    <Article key={`blog-item`+item.id} content={item} />
  )
  return (
    <section className="md:mb-[150px] mb-[70px]">
      <div className="container mx-auto">
        <h2 className="md:text-4xl text-[28px] text-center font-bold md:mb-9 mb-5">{props.content.title}</h2>
        <div className="grid lg:grid-cols-3 lg:gap-8 md:grid-cols-3 grid-cols-1 gap-5 md:mb-10 mb-5">
          {content}
        </div>
        <div className="text-center">
          <button type="button"
                  className="font-semibold hover:text-white border-2 border-black2 hover:bg-black2 rounded-xl px-5 py-2.5 text-center md:text-base text-sm">View
            More
          </button>
        </div>
      </div>
    </section>
  )
}