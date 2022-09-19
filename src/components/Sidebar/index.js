import React, {Component} from 'react';

const categories = [
  {
    id: 1,
    title: 'Lifestyle',
    number: 98,
  },
  {
    id: 2,
    title: 'Shopping',
    number: 54,
    isActive: true
  },
  {
    id: 3,
    number: 78,
    title: 'Travels'
  },
  {
    id: 4,
    number: 0,
    title: 'Hobbies'
  },
  {
    id: 5,
    number: 23,
    title: 'Fashion'
  },
]

const trendPosts = [
  {
    id: 1,
    image: 'img-trending-1.png',
    title: 'The Best Street Style From Brooklyn’s 2022',
    date: 'May 10, 2022'
  },
  {
    id: 2,
    image: 'img-trending-2.png',
    title: 'Given Set was without from god divide rule Hath',
    date: 'May 10, 2022'
  },
  {
    id: 3,
    image: 'img-trending-3.png',
    title: 'Looking for “standard style” for modern women of May 2022',
    date: 'May 10, 2022'
  },
  {
    id: 4,
    image: 'img-trending-4.png',
    title: 'Third darkness and second dry greater',
    date: 'May 10, 2022'
  },
  {
    id: 5,
    image: 'img-trending-5.png',
    title: 'Get To Know: Rachel Corsie',
    date: 'May 10, 2022'
  },
]

const tags = [
  {
    id: 1,
    title: 'Art'
  },
  {
    id: 2,
    title: 'Women'
  },
  {
    id: 3,
    title: 'Office'
  },
  {
    id: 4,
    title: 'Photography'
  },
  {
    id: 5,
    title: 'Stripes'
  },
  {
    id: 6,
    title: 'Accessories'
  },
  {
    id: 7,
    title: 'Fashion Tips'
  },
  {
    id: 8,
    title: 'Life Style'
  },
  {
    id: 9,
    title: 'Vintage'
  },
]

class Sidebar extends Component {
  render() {
    return (
      <div className="sticky left-0 top-0">
        <form className="mb-10">
          <div className="flex items-center relative mx-auto w-full">
            <input
              className="pl-5 pr-12 py-3 w-full text-base text-black2 border border-transparent bg-white rounded-[10px] h-[50px] shadow-[0_1px_3px_rgba(0,0,0,0.12)] placeholder:text-gray placeholder:opacity-50 focus:outline-none focus:border-black2 focus:shadow-[0_5px_25px_rgba(0,0,0,0.07)]"
              type="search" name="search" placeholder="Search" tabIndex="0"/>
            <button type="submit" className="absolute right-[4px] top-[14px] text-gray mr-4 hover:text-black2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <ellipse cx="9.622" cy="9.417" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2" rx="8.622" ry="8.417"></ellipse>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15.62 15.709L19 19"></path>
              </svg>
            </button>
          </div>
        </form>
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-5">Categories</h3>
          <ul>
            {
              categories.map((item, i) => {
                return (
                  <li key={`cat-` + i} className="last:mb-0 mb-[10px]">
                    <a href="#/"
                       className={`flex justify-between items-center px-[15px] py-[10px] rounded-[10px] hover:bg-gray-light14 ${item.isActive ? `bg-gray-light2` : `bg-gray-light13`}`}>{item.title}
                      <span
                        className="rounded-[40px] px-[10px] py-1 text-gray text-sm bg-white">{item.number}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-5">Trending posts</h3>
          <div>
            {
              trendPosts.map((item) => {
                return (
                  <div key={`trend-`+item.id} className="flex group last:mb-0 mb-5">
                    <div className="w-[92px] flex-shrink-0 mr-[15px] rounded-[9px] overflow-hidden transform transition duration-500 group-hover:opacity-75">
                      <a href="#/">
                        <img src={require('../../assets/images/'+item.image)}
                             alt='img-about'
                             className="object-cover object-center"/>
                      </a>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="text-gray mb-1">{item.date}</p>
                      <h4 className="font-medium">
                        <a className="group transition-all duration-300 ease-in-out" href="#/">
                                <span
                                  className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">{item.title}
                                </span>
                        </a>
                      </h4>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div>
            {
              tags.map((item) => {
                return (
                  <a key={`tag-`+item.id} href="#/" className="relative inline-flex mr-[10px] my-[5px] py-2 px-3 bg-white rounded-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.05)] text-gray text-sm font-medium transition-all duration-300 ease-in-out translate-y-0 hover:text-black2 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] hover:bg-gray-light3">{item.title}</a>
                )
              })
            }
          </div>
        </div>
        <div className="mb-10">
          <a href="#/">
            <img src={require('../../assets/images/img-banner-ads.jpg')}
                 alt='img-about'
                 className="object-cover object-center"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;