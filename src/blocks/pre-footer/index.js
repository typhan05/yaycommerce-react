import React from 'react';

const icons = [
  {
    "id": "1",
    "icon": "delivery-icon.svg",
    'title': 'Fast delivery',
    'description': 'Free Shipping for order over $49',
  },
  {
    "id": "2",
    "icon": "tracking-icon.svg",
    'title': 'Order tracking',
    'description': 'Check your order status online',
  },
  {
    "id": "3",
    "icon": "refund-icon.svg",
    'title': 'Refunds',
    'description': 'Free 100% money back guarantee',
  },
  {
    "id": "4",
    "icon": "support-icon.svg",
    'title': 'Quality support',
    'description': 'Our team is always feedback 24/7',
  },
]

export default function PreFooter() {
  const content = icons.map((item) =>
    <div key={item.id} className="flex">
      <div className="w-[60px] h-[60px] rounded-[30px] flex items-center justify-center bg-white mr-3">
        <img src={require('../../assets/images/' + item.icon)}
             alt={item.title}
             className="object-center"/>
      </div>
      <div>
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p className="text-gray">{item.description}</p>
      </div>
    </div>
  )
  return (
    <section className="bg-gray-light2 py-10">
      <div className="container mx-auto grid gap-x-5 grid-cols-4">
        {content}
      </div>
    </section>
  )
}