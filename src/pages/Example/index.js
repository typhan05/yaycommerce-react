import React from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import PreFooter from "../../blocks/pre-footer";

const breadcrumbs = [
  {
    'id': 1,
    'text': 'Home',
    'link': '/yaycommerce-react'
  },
  {
    'id': 2,
    'text': 'Example',
    'link': ''
  },
]

export default function Example() {
  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <PreFooter />
    </>
  )
}