import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import PreFooter from "../../blocks/pre-footer";
import Article from "../../components/Article";

const breadcrumbs = [
  {
    'id': 1,
    'text': 'Home',
    'link': '/yaycommerce-react'
  },
  {
    'id': 2,
    'text': 'Blog',
    'link': '/blog-2-column'
  },
  {
    'id': 3,
    'text': 'Looking for "standard style" for modern women of May, 2022',
    'link': ''
  },
]

const tagsLink = [
  {
    name: 'Fashion Tips'
  },
  {
    name: 'Tutorials'
  }
]

const tags = [
  {
    id: 1,
    title: 'Life Style'
  },
  {
    id: 2,
    title: 'Office'
  },
  {
    id: 3,
    title: 'Photography'
  },
  {
    id: 4,
    title: 'Accessories'
  },
  {
    id: 5,
    title: 'Fashion Tips'
  },
]

const relatedPosts = [
  {
    "id": "1",
    "image": "img-our-blog-1.jpg",
    "date": "May 10, 2022",
    "title": "To dress well, modern men need to have the following 8 savings items"
  },
  {
    "id": "2",
    "image": "img-our-blog-2.jpg",
    "date": "May 8, 2022",
    "title": "Sneakers that ruled the NBA in season 2022-2023"
  },
  {
    "id": "3",
    "image": "img-our-blog-3.jpg",
    "date": "May 8, 2022",
    "title": "Looking for \"standard style\" for modern women of May, 2022"
  },
  {
    "id": "4",
    "image": "img-our-blog-2.jpg",
    "date": "May 8, 2022",
    "title": "Sneakers that ruled the NBA in season 2022-2023"
  },
]

export default function BlogListNoSidebar() {
  const content = relatedPosts.map((item) =>
    <Article content={item}/>
  )

  return (
    <>
      <section className="lg:mb-[150px] lg:pt-[50px] pt-10 md:mb-20 mb-10">
        <div className="container mx-auto">
          <div className="lg:grid flex lg:grid-cols-12 lg:gap-x-12 flex-col-reverse lg:items-start xl:gap-x-[30px] lg:mb-[130px] mb-[60px] ml-auto mr-auto max-w-[960px]">
            <div className="lg:col-span-12 lg:mb-0 lg:mt-0 mt-5 mb-9">
              <div className="text-center">
                <div className="mb-[15px]">
                  {tagsLink.map((tag, i) => {
                    return (
                      <a href="#/"
                         className="text-sm text-green rounded-[7px] bg-[rgba(55,126,98,0.07)] py-1 px-2 mr-2">{tag.name}</a>
                    )
                  })}
                </div>
                <h1 className="md:text-4xl text-[28px] font-bold -mb-5 max-w-[800px] ml-auto mr-auto">Looking for "standard style" for modern women of
                  May, 2022</h1>
                <BreadCrumb content={breadcrumbs} styleProp={`!px-0`}/>
              </div>
              <div className="mb-[30px] md:pb-10 pb-5 border-b border-gray-light2">
                <img src={require('../../assets/images/img-detail-1.jpg')} alt="post-img-detail"
                     className="rounded-xl mb-[30px]"/>
                <div className="md:flex justify-between items-center lg:mb-10 mb-6">
                  <div className="flex items-center md:mb-0 mb-5">
                    <div
                      className="flex w-[50px] h-[50px] flex-shrink-0 mr-3 rounded-[25px] overflow-hidden border border-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <img src={require('../../assets/images/img-avt-2.png')} className="w-full h-full object-cover"
                           alt="avt-img"/>
                    </div>
                    <div>
                      <h3 className="font-semibold">YayCommerce</h3>
                      <div className="flex items-center text-sm text-gray">Posted on May 10, 2022 <span
                        className="inline-flex w-[3px] h-[3px] bg-black2 rounded-[3px] mx-[15px]"></span> 9 mins read
                      </div>
                    </div>
                  </div>
                  <ul className="flex">
                    <li className="ml-[10px]">
                      <a href="#/"
                         className="flex items-center justify-center w-10 h-10 rounded-[20px] text-gray transition-all duration-300 hover:text-green hover:bg-[rgba(55,126,98,0.1)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="20"
                          fill="none"
                          viewBox="0 0 10 20"
                        >
                          <path
                            fill="currentColor"
                            d="M2.5 6.667H0V10h2.5v10h4.167V10h3L10 6.667H6.667V5.25c0-.75.166-1.083.916-1.083H10V0H6.833C3.833 0 2.5 1.333 2.5 3.833v2.834z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="ml-[10px]">
                      <a href="#/"
                         className="flex items-center justify-center w-10 h-10 rounded-[20px] text-gray transition-all duration-300 hover:text-green hover:bg-[rgba(55,126,98,0.1)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="15"
                          fill="none"
                          viewBox="0 0 18 15"
                        >
                          <path
                            fill="currentColor"
                            d="M18 1.776c-.67.3-1.383.5-2.126.597A3.748 3.748 0 0017.497.282c-.713.436-1.5.744-2.34.916A3.655 3.655 0 0012.462 0c-2.043 0-3.688 1.7-3.688 3.786 0 .3.025.588.085.863C5.792 4.495 3.077 2.987 1.253.69a3.885 3.885 0 00-.505 1.913c0 1.31.658 2.473 1.64 3.145A3.575 3.575 0 01.72 5.282v.042C.72 7.164 2 8.69 3.677 9.043c-.3.084-.628.124-.968.124-.236 0-.475-.014-.699-.064.479 1.498 1.835 2.6 3.449 2.636A7.298 7.298 0 010 13.302 10.2 10.2 0 005.661 15c6.79 0 10.503-5.77 10.503-10.77 0-.167-.006-.329-.014-.49A7.47 7.47 0 0018 1.777z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li className="ml-[10px]">
                      <a href="#/"
                         className="flex items-center justify-center w-10 h-10 rounded-[20px] text-gray transition-all duration-300 hover:text-green hover:bg-[rgba(55,126,98,0.1)]">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15.7875 0.684C15.3495 0.24 14.7675 0 14.1435 0C13.5195 0 12.9375 0.24 12.4995 0.684L8.4495 4.734C7.5435 5.64 7.5435 7.116 8.4495 8.022L8.6055 8.178L8.1735 8.61L8.0175 8.454C7.5795 8.016 6.9915 7.77 6.3735 7.77C5.7555 7.77 5.1675 8.01 4.7295 8.454L0.6795 12.504C-0.2265 13.41 -0.2265 14.886 0.6795 15.792L2.2095 17.322C2.6535 17.76 3.2355 18 3.8595 18C4.4835 18 5.0655 17.76 5.5035 17.316L9.5535 13.266C10.4595 12.36 10.4595 10.884 9.5535 9.978L9.3975 9.822L9.8295 9.39L9.9855 9.546C10.4235 9.984 11.0115 10.224 11.6295 10.224C12.2535 10.224 12.8355 9.984 13.2735 9.54L17.3235 5.49C18.2295 4.584 18.2295 3.108 17.3235 2.202L15.7875 0.684ZM8.3355 12.054L4.2855 16.104C4.0575 16.332 3.6555 16.332 3.4275 16.104L1.8975 14.574C1.6635 14.34 1.6635 13.95 1.8975 13.716L5.9475 9.666C6.0615 9.552 6.2175 9.486 6.3795 9.486C6.5415 9.486 6.6915 9.552 6.8115 9.666L6.9675 9.822L6.1875 10.602L7.3995 11.814L8.1795 11.034L8.3355 11.19C8.5695 11.43 8.5695 11.82 8.3355 12.054ZM16.1055 4.284L12.0555 8.334C11.8275 8.562 11.4255 8.562 11.1975 8.334L11.0415 8.178L12.2415 6.978L11.0235 5.76L9.8235 6.96L9.6675 6.804C9.4335 6.564 9.4335 6.18 9.6675 5.946L13.7175 1.896C13.8315 1.782 13.9875 1.716 14.1495 1.716C14.3115 1.716 14.4675 1.782 14.5815 1.896L16.1115 3.426C16.3395 3.666 16.3395 4.05 16.1055 4.284Z"
                            fill="currentColor"/>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="mb-5">Curabitur at fermentum purus. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Mauris
                  non nisl interdum, citudin ne que sed, posuere elit. Vivamus ac tincidunt sapien aenean nec aliquet
                  enim lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <p className="mb-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. <strong>It was popularised in the 1960s with the release</strong> of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                <ul className="list-disc list-inside mb-5">
                  <li>There are many variations of passages of Lorem</li>
                  <li>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</li>
                  <li> If you are going to use a passage of Lorem Ipsum</li>
                </ul>
                <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="grid grid-cols-2 gap-x-[30px] lg:mt-[30px] lg:mb-[50px] mb-5">
                  <div>
                    <img src={require('../../assets/images/img-detail-2.jpg')} alt="post-img-detail"
                         className="rounded-xl mb-3"/>
                    <p className="text-sm text-gray">The photo are for illustrative purposes only</p>
                  </div>
                  <div>
                    <img src={require('../../assets/images/img-detail-3.jpg')} alt="post-img-detail"
                         className="rounded-xl mb-3"/>
                    <p className="text-sm text-gray">The photo are for illustrative purposes only</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-5">Where does it come from?</h3>
                <p className="mb-5">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                  up one of the
                  more obscure Latin words, consectetur, from a Lorem Ipsum passage, going through the cites of the word
                  in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                  and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in
                  45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first
                  line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <p className="mb-5">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                  reproduced in their exact original form, accompanied by English versions from the 1914 translation by
                  H. Rackham.</p>
                <br/>
                <h3 className="text-2xl font-semibold mb-5">Where can I get some?</h3>
                <p className="mb-5">There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words which don't look even
                  slightly believable. </p>
                <p className="mb-5">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                  anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                  tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. </p>
                <p className="mb-5">The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                  or non-characteristic words etc.</p>
                <br/>
                <h3 className="text-2xl font-semibold mb-5">Why do we use it?</h3>
                <p className="mb-5">It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.</p>
                <p className="mb-5">Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).</p>
                <p className="mb-5"><strong className="text-lg">The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                  it look like readable English:</strong></p>
                <p className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries, <a
                    href="#/" className="underline hover:no-underline">but also the leap into electronic typesetting</a>,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages.</p>
                <p className="mb-5">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                <div className="mb-[30px]">
                  <img src={require('../../assets/images/img-detail-4.jpg')} alt="post-img-detail"
                       className="rounded-xl mb-3"/>
                  <p className="text-sm text-gray">The photo are for illustrative purposes only</p>
                </div>
                <p className="mb-5"><strong className="text-lg">Letraset sheets containing lorem ipsum quis passages
                  text ever since the 1500s.</strong></p>
                <p className="mb-5">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. It has survived not only five centuries, but also the leap into electronic
                  typesetting...
                </p>
                <p className="mb-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="mb-5">
                  But also the leap into electronic typesetting, remaining essentially unchange. It was popular in the
                  1960s with the release. More recently with desktop publishing software like Aldus est ut PageMaker
                  including versions of Lorem Ipsum. Letraset sheets containing Lorem Ipsum quis passages text ever
                  since the 1500s.
                </p>
                <div className="mb-[30px]">
                  <img src={require('../../assets/images/img-detail-5.jpg')} alt="post-img-detail"
                       className="rounded-xl mb-3"/>
                  <p className="text-sm text-gray">The photo are for illustrative purposes only</p>
                </div>
                <h3 className="text-2xl font-semibold mb-5">What is Lorem Ipsum?</h3>
                <p>Ac turpis egestas integer eget aliquet nibh praesent tristique. Tempor orci dapibus ultrices in
                  iaculis nunc sed augue lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus.
                  Auctor urna nunc id cursus metus aliquam eleifend. Diam maecenas ultricies mi eget mauris pharetra et
                  ultrices neque. Id consectetur purus ut faucibus. Lacus sed turpis tincidunt id aliquet. Et tortor
                  consequat id porta nibh. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Lorem ipsum
                  dolor sit amet consectetur. Duis ut diam quam nulla. Commodo viverra maecenas accumsan lacus. Urna
                  porttitor rhoncus dolor purus non enim praesent elementum facilisis. Lacus vestibulum sed arcu non
                  odio euismod lacinia at. Auctor elit sed vulputate mi sit amet. Eu turpis egestas pretium aenean
                  pharetra magna ac placerat.</p>
                <ul className="list-disc list-inside mb-5">
                  <li>Sed libero enim sed faucibus omarens nuos anet sumis ae nut.</li>
                  <li>Elit duis tristique sollicitin nibh sit amet commodo.</li>
                  <li> Diam sollicitudin tempor id eu nisl ornare arcu odio ut sem nulla pharetra.</li>
                  <li>Netus et malesuada fames ac turpisegest asuis anet dolores umea.</li>
                  <li>Elit duis nibh maecenas suis diam nisl omarens nuos anet sumis ae nut.</li>
                </ul>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                  et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Sapien pellentesque habitant
                  morbi tristique senectus et. Fames ac turpis egestas integer eget aliquet nibh praesent. </p>
                <p className="mb-5">In ante metus dictum at tempor commodo ullamcorper a lacus. Dis parturient montes
                  nascetur ridiculus mus. In ornare quam viverra orci sagittis. Nisl tincidunt eget nullam non nisi est
                  sit. Tempor commodo ullamcorper a lacus. Facilisi nullam vehicula ipsum a arcu. Arcu non sodales neque
                  sodales ut etiam sit. Sem fringilla ut morbi tincidunt augue interdum velit. Mauris vitae ultricies
                  leo integer malesuada nunc vel risus commodo. Eget nunc scelerisque viverra mauris in aliquam sem
                  fringilla ut. Etiam non quam lacus suspendisse faucibus interdum.</p>
              </div>
              <div className="flex justify-between items-center lg:mb-[70px] mb-10">
                <div>
                  {
                    tags.map((item) => {
                      return (
                        <a key={`tag-` + item.id} href="#/"
                           className="relative inline-flex mr-[10px] my-[5px] py-2 px-3 bg-white rounded-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.05)] text-gray text-sm font-medium transition-all duration-300 ease-in-out translate-y-0 hover:text-black2 hover:shadow-[0_7px_25px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] hover:bg-gray-light3">{item.title}</a>
                      )
                    })
                  }
                </div>
                <ul>
                  <li className="group relative">
                  <span
                    className="flex items-center justify-center cursor-pointer h-10 w-10 rounded-[20px] bg-white group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        d="M6.057 8.806l7.89-3.944m0 10.274l-7.89-3.944m.285-1.193a2.671 2.671 0 11-5.342 0 2.671 2.671 0 015.342 0zM19.005 3.67a2.671 2.671 0 11-5.343 0 2.671 2.671 0 015.343 0zm0 12.658a2.671 2.671 0 11-5.343 0 2.671 2.671 0 015.343 0z"
                      ></path>
                    </svg>
                  </span>
                    <div
                      className="absolute lg:left-full lg:right-[auto] right-0 lg:top-0 top-full text-gray lg:pl-[15px] pt-[15px] pointer-events-none group-hover:pointer-events-auto">
                      <div
                        className="min-w-[225px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden rounded-[10px] bg-white opacity-0 translate-y-5 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="py-[5px] border-b border-gray-light9">
                          <a href="#/"
                             className="flex items-center transition-all duration-300 hover:text-black2 hover:bg-gray-light11 px-[14px] py-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="18"
                              fill="none"
                              viewBox="0 0 19 18"
                              className="mr-[10px]"
                            >
                              <path
                                fill="currentColor"
                                d="M15.787.684A2.286 2.286 0 0014.143 0c-.623 0-1.206.24-1.644.684l-4.05 4.05a2.329 2.329 0 000 3.288l.156.156-.431.432-.156-.156a2.32 2.32 0 00-3.289 0l-4.05 4.05a2.329 2.329 0 000 3.288l1.53 1.53A2.329 2.329 0 003.86 18c.625 0 1.207-.24 1.644-.684l4.05-4.05a2.329 2.329 0 000-3.288l-.155-.156.431-.432.156.156a2.315 2.315 0 001.645.678c.623 0 1.205-.24 1.643-.684l4.05-4.05a2.329 2.329 0 000-3.288L15.787.684zm-7.452 11.37l-4.05 4.05a.624.624 0 01-.857 0l-1.53-1.53a.612.612 0 010-.858l4.05-4.05a.613.613 0 01.431-.18c.163 0 .313.066.433.18l.155.156-.78.78L7.4 11.814l.78-.78.156.156a.62.62 0 010 .864zm7.77-7.77l-4.05 4.05a.624.624 0 01-.857 0l-.157-.156 1.2-1.2-1.217-1.218-1.2 1.2-.156-.156a.612.612 0 010-.858l4.05-4.05a.613.613 0 01.431-.18c.163 0 .319.066.433.18l1.53 1.53a.618.618 0 01-.006.858z"
                              ></path>
                            </svg>
                            Copy link
                          </a>
                        </div>
                        <ul className="py-[5px]">
                          <li>
                            <a href="#/"
                               className="flex items-center transition-all duration-300 hover:text-black2 hover:bg-gray-light11 px-[14px] py-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="15"
                                fill="none"
                                viewBox="0 0 18 15"
                                className="mr-[10px]"
                              >
                                <path
                                  fill="currentColor"
                                  d="M18 1.776c-.67.3-1.383.5-2.126.597A3.748 3.748 0 0017.497.282c-.713.436-1.5.744-2.34.916A3.655 3.655 0 0012.462 0c-2.043 0-3.688 1.7-3.688 3.786 0 .3.025.588.085.863C5.792 4.495 3.077 2.987 1.253.69a3.885 3.885 0 00-.505 1.913c0 1.31.658 2.473 1.64 3.145A3.575 3.575 0 01.72 5.282v.042C.72 7.164 2 8.69 3.677 9.043c-.3.084-.628.124-.968.124-.236 0-.475-.014-.699-.064.479 1.498 1.835 2.6 3.449 2.636A7.298 7.298 0 010 13.302 10.2 10.2 0 005.661 15c6.79 0 10.503-5.77 10.503-10.77 0-.167-.006-.329-.014-.49A7.47 7.47 0 0018 1.777z"
                                ></path>
                              </svg>
                              Share on Twitter
                            </a>
                          </li>
                          <li>
                            <a href="#/"
                               className="flex items-center transition-all duration-300 hover:text-black2 hover:bg-gray-light11 px-[14px] py-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 18 18"
                                className="mr-[10px]"
                              >
                                <g clipPath="url(#clip0_3155_35381)">
                                  <path
                                    fill="currentColor"
                                    d="M18 9a9 9 0 10-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.407V9h2.496l-.399 2.602h-2.097v6.289C14.71 17.216 18 13.492 18 9z"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3155_35381">
                                    <path fill="#fff" d="M0 0H18V18H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                              Share on Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#/"
                               className="flex items-center transition-all duration-300 hover:text-black2 hover:bg-gray-light11 px-[14px] py-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 18 18"
                                className="mr-[10px]"
                              >
                                <g clipPath="url(#clip0_3155_35385)">
                                  <path
                                    fill="currentColor"
                                    d="M16.668 0H1.328C.595 0 0 .58 0 1.297V16.7C0 17.416.594 18 1.329 18h15.339c.734 0 1.332-.584 1.332-1.297V1.297C18 .58 17.402 0 16.668 0zM5.34 15.339H2.668V6.746H5.34v8.593zM4.004 5.576A1.548 1.548 0 114 2.48a1.548 1.548 0 01.005 3.096zm11.335 9.763H12.67v-4.177c0-.995-.017-2.278-1.388-2.278-1.389 0-1.6 1.086-1.6 2.208v4.247H7.017V6.746h2.56v1.175h.035c.355-.675 1.227-1.389 2.524-1.389 2.704 0 3.203 1.779 3.203 4.092v4.715z"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_3155_35385">
                                    <path fill="#fff" d="M0 0H18V18H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                              Share on LinkedIn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-light16 lg:p-10 px-5 py-6">
                <div className="md:flex md:items-center">
                  <div
                    className="flex lg:w-[72px] lg:h-[72px] w-[50px] h-[50px] md:mb-0 mb-2 flex-shrink-0 lg:mr-5 mr-3 lg:rounded-[36px] rounded-[25px] overflow-hidden border border-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                    <img src={require('../../assets/images/img-avt-2.png')} className="w-full h-full object-cover"
                         alt="avt-img"/>
                  </div>
                  <div>
                    <p className="text-xs text-gray mb-1">WRITTEN BY</p>
                    <h3 className="text-lg font-semibold mb-2">YayCommerce</h3>
                    <div>Thuy Nguyen is an online marketeer and
                      professional blogger. When not creating content for YayCommerce, she can most often be found at
                      some cafés in town, reading Graphic Guides, or enjoying a good laugh with The Big Bang Theory.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between lg:mt-[70px] mt-10">
                <a href="#/" className="group inline-flex items-center">
                  <div className="relative flex-shrink-0 md:w-[95px] md:h-[auto] w-10 h-10 mr-[15px] md:rounded-[9px] rounded-[20px] md:bg-transparent bg-gray-light2 overflow-hidden before:absolute before:inset-0 before:z-20 before:bg-[rgba(0,0,0,0.2)] group-hover:before:bg-[rgba(0,0,0,0.5)]">
                    <img src={require('../../assets/images/img-post-prev.png')} alt="post-img-prev" className="md:block hidden" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      fill="none"
                      viewBox="0 0 28 20"
                      className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-40"
                    >
                      <g filter="url(#filter0_d_3155_34708)">
                        <path
                          fill="#fff"
                          d="M3.41 9l-.53.53L2.35 9l.53-.53.53.53zm21-.75a.75.75 0 010 1.5v-1.5zM9.88 16.53l-7-7 1.06-1.06 7 7-1.06 1.06zm-7-8.06l7-7 1.06 1.06-7 7-1.06-1.06zm.53-.22h21v1.5h-21v-1.5z"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_3155_34708"
                          width="26.811"
                          height="19.061"
                          x="0.35"
                          y="0.47"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3155_34708"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3155_34708"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-sm md:max-w-[240px] md:block hidden">
                    <p className="mb-1 text-gray">Previous post</p>
                    <h3 className="font-semibold"><a href="#/">Given Set was without from god divide rule Hath</a></h3>
                  </div>
                </a>
                <a href="#/" className="group inline-flex items-center">
                  <div className="text-sm max-w-[240px] md:block hidden text-right">
                    <p className="mb-1 text-gray">Next post</p>
                    <h3 className="font-semibold"><a href="#/">Given Set was without from god divide rule Hath</a></h3>
                  </div>
                  <div className="relative flex-shrink-0 md:w-[95px] md:h-[auto] w-10 h-10 ml-[15px] md:rounded-[9px] rounded-[20px] md:bg-transparent bg-gray-light2 overflow-hidden before:absolute before:inset-0 before:z-20 before:bg-[rgba(0,0,0,0.2)] group-hover:before:bg-[rgba(0,0,0,0.5)]">
                    <img src={require('../../assets/images/img-post-next.png')} alt="post-img-next" className="md:block hidden" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      fill="none"
                      viewBox="0 0 28 20"
                      className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-40"
                    >
                      <g filter="url(#filter0_d_3155_34695)">
                        <path
                          fill="#fff"
                          d="M24 9l.53-.53.53.53-.53.53L24 9zM3 9.75a.75.75 0 010-1.5v1.5zm14.53-8.28l7 7-1.06 1.06-7-7 1.06-1.06zm7 8.06l-7 7-1.06-1.06 7-7 1.06 1.06zm-.53.22H3v-1.5h21v1.5z"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_3155_34695"
                          width="26.811"
                          height="19.061"
                          x="0.25"
                          y="0.47"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          ></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3155_34695"
                          ></feBlend>
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3155_34695"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-4xl text-[28px] font-bold lg:mb-8 mb-5">Related posts</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 md:gap-6 grid-cols-1 gap-4 md:mb-20 mb-10">
              {content}
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  )
}