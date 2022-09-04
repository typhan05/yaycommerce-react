import React from 'react';

export default function Introduce(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} style={{ backgroundImage: `url(${require('../../assets/images/'+item.bg+'')})` }}
         className="md:py-10 py-4 md:px-12 px-5 rounded-[10px] bg-gray-light2 bg-right-bottom bg-no-repeat md:bg-contain bg-[length:350px]">
      <div className="md:max-w-sm max-w-[220px]">
        <h2 className="md:text-4xl text-[21px] font-bold mb-2">{item.title}</h2>
        <p className="text-gray md:text-base text-sm">{item.description}</p>
        <div className="md:mt-8 mt-5">
          <a href="#/"
             className="inline-flex justify-center rounded-xl md:text-md text-sm font-semibold py-[10px] md:px-6 px-5 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{item.button.text}</a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="md:mb-[150px] mb-[70px]">
      <div className="container mx-auto grid gap-x-8 md:gap-y-0 gap-y-5 md:grid-cols-2 items-center">
        {content}
      </div>
    </section>
  )
}