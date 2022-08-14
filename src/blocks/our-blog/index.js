import React from 'react';

export default function OurBlog(props) {
  const content = props.content.lists.map((item) =>
    <div key={item.id} className="bg-white">
      <a href="#/" className="flex rounded-lg mb-4 w-full overflow-hidden">
        <img src={require('../../assets/images/' + item.image)}
             alt={item.title}
             className="object-cover w-full object-center transform transition duration-500 hover:scale-110"/>
      </a>
      <div className="text-center">
        <p className="text-sm text-gray mb-1">{item.date}</p>
        <h3 className="text-lg font-semibold text-black2">
          <a className='group transition-all duration-300 ease-in-out' href='#/'>
            <span
              className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
              {item.title}
            </span>
          </a>
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