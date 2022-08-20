import React from "react";
import {Tab, Tabs as TabsComponent, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Select from "react-select";
import Pagination from "../Pagination";

const review_options = [
  {value: 'recent', label: 'Recent reviews'},
  {value: 'latest', label: 'Latest reviews'},
  {value: 'yesterday', label: 'Yesterday reviews'}
];

const star_options = [
  {value: '5-star', label: 'Show 5 star only'},
  {value: '4-star', label: 'Show 4 star only'},
  {value: '3-star', label: 'Show 3 star only'}
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: '40px',
    'min-height': '40px',
    borderRadius: '7px',
    borderColor: '#D3DCE5',
    padding: '0 5px'
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#5A6D80',
    }
  }
};

const Tabs = ({data}) => (
  <TabsComponent>
    <TabList>
      {data.map(({heading, number}, i) => (
        <Tab key={i}>{heading} {number && <span className="text-sm bg-gray-light2 px-2 py-[2px] ml-1 rounded-[50px]">{number}</span>}</Tab>
      ))}
    </TabList>
    <TabPanel>
      <div className="pt-5 pb-20 border-b border-solid border-gray-light2">
        <p className="mb-3"><strong className="block text-lg font-semibold">Overview:</strong>Short skirt with round
          neck has cotton
          double-layered, sexy figure, off-shoulder design, long-sleeve design, flared sleeves with pink and white
          stripes pattern.</p>
        <ul className="mb-8 list-inside list-disc">
          <li>100% soft cotton.</li>
          <li>A mini dress with a voluminous, tiered style.</li>
          <li>Comes with an inner layer camisole.</li>
          <li>Perfect for wearing on its own or in layered looks.</li>
          <li>Body: 100% Cotton</li>
          <li>Inner: 100% Polyester</li>
          <li>Model wears: UK 10/ EU 38/ US 6</li>
          <li>Made in Italy</li>
        </ul>
        <p className="mb-8"><strong className="block text-lg font-semibold">Washing instructions:</strong>Machine wash,
          no ironing, don’t dry clean, don’t tumble dry and turn it upside down when drying to avoid color fading.</p>

        <p className="mb-8"><strong className="block text-lg font-semibold">Warranty & customer care:</strong>-
          Committed to product quality and design similar to the picture.<br/> - Guaranteed to be returned within 5 days
          and item must be new and unused<br/>- Product is defective due to shipping and manufacturer</p>

        <p><small className="text-sm">Please note: The images shown may include colors that are not available.</small>
        </p>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="pt-5 pb-20 border-b border-solid border-gray-light2">
        <p className="mb-7">Round neck dress 85cm long, dear customers. The material of the product is soft and
          beautiful, and the nose
          is pretty standard, only a little extra. The 2-layer dress is super beautiful, with no wrinkles, no ruffles.
          The shop's women's goods are free-size, women's height m65 52kg in weight, it's beautiful. Designed with the
          same color as the photo: Female: height m65, weight 48kg, please wear it well. </p>
        <div className="max-w-[560px] mb-7">
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Product ID</strong> #83518358539</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Material</strong> 100% Cotton</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Color</strong> Pink, white, red, black</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Size</strong> Freesize</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Jacket length</strong> 114 cm</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Weight</strong> 450 gr</p>
          <p className="flex mb-2"><strong className="font-medium w-40 mr-10">Other info</strong> -</p>
        </div>
        <p>Guarantee product as photo, return products in 7 days, fast service, quality is number 1.<br/>
          If you have any questions, don't hesitate to reach out to our team.</p>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="pt-5 pb-20 border-b border-solid border-gray-light2">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-5">Customer reviews</h3>
            <div className="grid grid-cols-2 gap-[14px] mb-[47px] max-w-[480px]">
              <Select options={review_options} defaultValue={review_options[0]} styles={customStyles} components={{IndicatorSeparator: () => null}}/>
              <Select options={star_options} defaultValue={star_options[0]} styles={customStyles} components={{IndicatorSeparator: () => null}}/>
            </div>
            <div className="mb-10">
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/image-avt.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">Julian Schofield</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/img-avt-1.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">Amy Hu</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/img-avt-2.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">Toronto Martin</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/img-avt-3.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">Kate</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/img-avt-4.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">May Katallia</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
              <div className="mb-[30px] pb-[18px] border-b border-solid border-gray-light2">
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="w-[44px] h-[44px] rounded-[22px] flex-shrink-0 mr-3">
                      <img src={require('../../assets/images/img-avt-5.png')}
                           alt={'avt-img'}
                           className="object-center"/>
                    </div>
                    <div className="mb-5">
                      <h3 className="font-semibold">John Mark</h3>
                      <div className="flex">
                        {Array.from(Array(5), (e, i) => {
                          return (
                            <svg
                              key={`select-` + i}
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
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray text-md">May 19, 2022 - 19:30</p>
                </div>
                <div>
                  <p>Delivery is quite fast, ok, good seam, quality of shirt is suitable for price range, fabric quality, I have to wear it to know because this is my first purchase, quite satisfied :")))</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Average score</h3>
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  {Array.from(Array(5), (e, i) => {
                    return (
                      <svg
                        key={'rate-'+i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="18"
                        fill="none"
                        viewBox="0 0 20 18"
                        className="mr-1"
                      >
                        <path
                          fill="#FFAC70"
                          d="M8.536.734c.323-.979 1.73-.979 2.053 0l1.517 4.595c.145.437.56.733 1.027.733h4.91c1.046 0 1.48 1.317.635 1.921l-3.973 2.84c-.378.27-.537.75-.392 1.187l1.518 4.595c.323.979-.815 1.792-1.661 1.187l-3.973-2.84c-.378-.27-.89-.27-1.269 0l-3.973 2.84c-.846.605-1.984-.208-1.66-1.187l1.517-4.595a1.052 1.052 0 00-.392-1.187L.447 7.983c-.846-.604-.411-1.92.634-1.92h4.911c.468 0 .882-.297 1.027-.734L8.536.734z"
                        ></path>
                      </svg>
                    )
                  })}
                </div>
                <p>4.7 out of 5</p>
              </div>
            </div>
            <div className="mb-[26px]">
              <p className="text-sm mb-[10px]">Your ratings:</p>
              <div className="flex items-center">
                {Array.from(Array(5), (e, i) => {
                  return (
                    <svg
                      key={'rate'+i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="30"
                      fill="none"
                      viewBox="0 0 31 30"
                      className="mr-2"
                    >
                      <path
                        fill="#D3DCE5"
                        d="M13.836 1.223c.524-1.63 2.804-1.63 3.328 0l2.46 7.658c.234.73.905 1.223 1.663 1.223h7.96c1.695 0 2.4 2.194 1.029 3.201l-6.44 4.734c-.614.45-.87 1.249-.636 1.978l2.46 7.659c.524 1.63-1.32 2.986-2.692 1.978l-6.44-4.733a1.733 1.733 0 00-2.056 0l-6.44 4.733c-1.371 1.008-3.216-.348-2.692-1.978l2.46-7.66a1.78 1.78 0 00-.635-1.977l-6.44-4.734c-1.371-1.007-.667-3.2 1.028-3.2h7.96c.758 0 1.43-.494 1.664-1.224l2.46-7.658z"
                      ></path>
                    </svg>
                  )
                })}
              </div>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-8">
                <div className="mb-7">
                  <label htmlFor="full-name" className="block mb-2 text-sm font-medium">Full Name</label>
                  <input type="text" id="full-name"
                         className="bg-white border border-gray-light9 placeholder:text-gray text-sm rounded-xl p-[14px] block w-full"
                         placeholder="Enter your fullname" required />
                </div>
                <div className="mb-7">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <input type="email" id="email"
                         className="bg-white border border-gray-light9 placeholder:text-gray text-sm rounded-xl p-[14px] block w-full"
                         placeholder="Enter your email" required />
                </div>
              </div>
              <div className="mb-7">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Review</label>
                <textarea id="message" rows="4"
                          className="bg-white border border-gray-light9 placeholder:text-gray text-sm rounded-xl p-[14px] block w-full"
                          placeholder="Write your review..."></textarea>
              </div>
              <div>
                <a href="#/"
                   className="inline-flex justify-center rounded-xl text-md font-semibold py-[10px] px-6 text-white bg-black2 border-2 border-solid border-black2 hover:bg-white hover:text-black2">Submit Review</a>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-5 pb-[50px]">
          <Pagination />
        </div>
      </div>
    </TabPanel>
  </TabsComponent>
);

export default Tabs;
