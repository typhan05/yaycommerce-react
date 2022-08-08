import React from 'react';

export default function Introduce(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} style={{ backgroundImage: `url(${require('../../assets/images/'+item.bg+'')})` }}
         className="py-10 px-12 rounded-[10px] bg-gray-light2 mb-[150px]">
      <div className="max-w-sm">
        <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
        <p>{item.description}</p>
        <div className="mt-8">
          <a href="#/"
             className="inline-flex justify-center rounded-lg text-sm py-3 px-4 bg-blue shadow-lg shadow-blue-500 text-white hover:opacity-95">{item.button.text}</a>
        </div>
      </div>
    </div>
  )

  return (
    <section>
      <div className="container mx-auto grid gap-x-8 grid-cols-2 items-center">
        {content}
      </div>
    </section>
  )
}