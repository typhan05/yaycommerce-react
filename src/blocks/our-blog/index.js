import React from 'react';

export default function OurBlog(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} className="bg-white">
      <a href="#/" className="flex rounded-lg mb-4 w-full">
        <img src={require('../../assets/images/' + item.image)}
             alt={item.title}
             className="object-cover w-full object-center"/>
      </a>
      <div className="text-center">
        <p className="text-sm text-gray mb-1">{item.date}</p>
        <h3 className="text-lg font-semibold text-black2"><a href="#/"
                                                             className="link link-underline link-underline-black">{item.title}</a>
        </h3>
      </div>
    </div>
  )
  return (
    <section className="mb-[150px]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-black2 text-center font-bold mb-9">{props.content.title}</h2>
        <div className="grid grid-cols-3 gap-8 mb-10">
          {content}
        </div>
        <div className="text-center">
          <button type="button"
                  className="font-semibold text-black2 hover:text-white border-2 border-black2 hover:bg-black2 rounded-xl px-5 py-2.5 text-center">View
            More
          </button>
        </div>
      </div>
    </section>
  )
}