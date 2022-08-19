import React from 'react';

export default function Introduce(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} style={{ backgroundImage: `url(${require('../../assets/images/'+item.bg+'')})` }}
         className="py-10 px-12 rounded-[10px] bg-gray-light2">
      <div className="max-w-sm">
        <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
        <p className="text-gray">{item.description}</p>
        <div className="mt-8">
          <a href="#/"
             className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="mb-[150px]">
      <div className="container mx-auto grid gap-x-8 grid-cols-2 items-center">
        {content}
      </div>
    </section>
  )
}