import React from "react";

export default function Card(props) {
  return (
    <div className="group relative md:pb-[50px] pb-[30px]">
      <a href="#/"
         className="relative flex justify-center items-center mb-3 p-5 md:h-[337px] h-[158px] bg-gray-light5 ease-in-out duration-300 rounded-xl overflow-hidden hover:bg-[rgba(90,109,128,0.1)] sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
        <span className={`bg-${props.content.sale.color} absolute top-3.5 left-3.5 rounded-lg text-sm text-white px-2 py-[1px]`}>{props.content.sale.number}</span>
        <img src={require('../../assets/images/' + props.content.image)}
             alt={props.content.title}
             className="object-center md:max-h-full max-h-[120px]"/>
      </a>
      <p className="text-gray text-sm mb-[5px]">{props.content.tag}</p>
      <p className="flex items-center text-sm text-gray mb-2">
          <span className="-ml-[1px] mr-1 flex">
            {Array.from(Array(props.content.rate), (e, i) => {
              return (
                <svg
                  key={`select-`+i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                  viewBox="0 0 14 12"
                  className="mr-[2px]"
                >
                  <path
                    fill="#FFAC70"
                    d="M6.596.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.376.489.69.489h3.301c.703 0 .995.877.427 1.28l-2.671 1.893c-.254.18-.36.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792l-2.67-1.894a.74.74 0 00-.854 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.263-.792L1.158 5.322c-.569-.403-.277-1.28.426-1.28h3.302a.724.724 0 00.69-.49L6.596.49z"
                  ></path>
                </svg>
              )
            })}
            {Array.from(Array(5), (e, i) => {
              if(i >= props.content.rate && !props.content.rate_haft) {
                return (
                  <svg
                    key={`no_select-`+i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    fill="none"
                    viewBox="0 0 14 12"
                    className="mr-[2px]"
                  >
                    <path
                      fill="#D3DCE5"
                      d="M6.596.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.376.489.69.489h3.301c.703 0 .995.877.427 1.28l-2.671 1.893c-.254.18-.36.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792l-2.67-1.894a.74.74 0 00-.854 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.263-.792L1.158 5.322c-.569-.403-.277-1.28.426-1.28h3.302a.724.724 0 00.69-.49L6.596.49z"
                    ></path>
                  </svg>
                )
              }
              return false
            })}
            {props.content.rate_haft && props.content.rate <= 5 &&
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="13"
                 height="12"
                 fill="none"
                 viewBox="0 0 13 12"
                 className="mr-[2px]"
            >
              <path
                fill="#FFAC70"
                d="M5.69.49c.216-.653 1.154-.653 1.37 0l1.01 3.063c.097.291.373.489.685.489h3.274c.697 0 .987.877.423 1.28L9.803 7.215a.701.701 0 00-.261.792l1.012 3.063c.215.652-.544 1.195-1.107.792l-2.65-1.894a.729.729 0 00-.845 0l-2.649 1.894c-.563.403-1.322-.14-1.107-.792l1.012-3.063a.701.701 0 00-.261-.792L.297 5.322c-.563-.403-.273-1.28.424-1.28h3.274a.718.718 0 00.684-.49L5.691.49z"
              ></path>
              <mask
                id="mask0_2993_656"
                style={{ maskType: "alpha" }}
                width="13"
                height="12"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#FFAC70"
                  d="M5.739.49c.217-.653 1.162-.653 1.38 0l1.02 3.063c.097.291.375.489.69.489h3.301c.703 0 .995.877.427 1.28L9.886 7.215c-.255.18-.361.5-.264.792l1.02 3.063c.218.652-.547 1.195-1.116.792L6.855 9.968a.74.74 0 00-.853 0l-2.67 1.894c-.57.403-1.334-.14-1.117-.792l1.02-3.063a.698.698 0 00-.264-.792L.301 5.322c-.57-.403-.277-1.28.426-1.28h3.301a.724.724 0 00.69-.49L5.738.49z"
                ></path>
              </mask>
              <g mask="url(#mask0_2993_656)">
                <path fill="#D3DCE5" d="M8.471 -2H17.747999999999998V14H8.471z"></path>
              </g>
            </svg>
            }
          </span>{`(${props.content.comment})`}
      </p>
      <h3 className="md:text-md text-sm leading-4 font-medium mb-2">
        <a className='group transition-all duration-300 ease-in-out' href='#/'>
          <span
            className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
            {props.content.title}
          </span>
        </a>
      </h3>
      <p className="md:text-md text-sm leading-5 font-semibold"><span className="text-gray line-through">{props.content.price_old}</span> {props.content.price}</p>
      <div className="mt-4">
        <a href="#/" className="inline-flex justify-center rounded-xl md:text-md text-sm font-semibold py-[10px] md:px-6 px-5 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]">{props.content.button.text}</a>
      </div>
    </div>
  );
}
