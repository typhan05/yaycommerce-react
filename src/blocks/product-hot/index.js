import React from 'react';

export default function ProductHot(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} className="group relative pb-8 mb-5">
      <a href="#/"
         className="relative flex justify-center items-center mb-3 h-80 bg-gray-light5 ease-in-out duration-300 rounded-xl overflow-hidden group-hover:bg-[rgba(90,109,128,0.1)] sm:aspect-w-2 sm:aspect-h-1 sm:h-80 lg:aspect-w-1 lg:aspect-h-1">
        <span className={`bg-${item.sale.color} absolute top-3.5 left-3.5 rounded-lg text-sm text-white px-2 py-[1px]`}>{item.sale.number}</span>
        <img src={require('../../assets/images/' + item.image)}
             alt={item.title}
             className="object-center"/>
      </a>
      <p className="text-gray text-sm mb-[5px]">{item.tag}</p>
      <p className="flex items-center text-sm text-gray mb-2">
          <span className="mr-2">
          <img src={require('../../assets/images/star-icon.png')} alt="star-icon"/>
          </span>{`(${item.comment})`}
      </p>
      <h3 className="text-md leading-4 text-black2 font-medium mb-2">
        <a href="#/" className="link link-underline link-underline-black">{item.title}</a>
      </h3>
      <p className="text-md leading-5 text-black2 font-semibold"><span className="text-gray line-through">{item.price_old}</span> {item.price}</p>
      <div className="mt-4">
        <a href="#/" className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
      </div>
    </div>
  )
  return (
    <section className="mb-[100px]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center">{props.content.title}</h2>
        <p className="mb-10 text-sm text-gray text-center">{props.content.tags}</p>
        <div className="grid gap-x-8 grid-cols-4">
          {content}
        </div>
      </div>
    </section>
  )
}