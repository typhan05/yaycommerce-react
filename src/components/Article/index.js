import React from "react";

export default function Article(props) {
  return (
    <div key={props.content.id} className="bg-white">
  <a href="#/" className="flex rounded-lg mb-4 w-full overflow-hidden">
    <img src={require('../../assets/images/' + props.content.image)}
         alt={props.content.title}
         className="object-cover w-full object-center transform transition duration-500 hover:scale-110"/>
  </a>
  <div className="text-center">
    <p className="text-sm text-gray mb-1">{props.content.date}</p>
    <h3 className="text-lg font-semibold text-black2">
      <a className='group transition-all duration-300 ease-in-out' href='#/'>
            <span
              className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
              {props.content.title}
            </span>
      </a>
    </h3>
  </div>
</div>
  )
}