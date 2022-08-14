import React from 'react';
import Card from "../../components/Card";

export default function ProductHot(props) {
  const content = props.content.lists.map((item) =>
    <Card key={item.id} content={item} />
  )
  return (
    <section className="mb-[100px]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center">{props.content.title}</h2>
        <p className="mb-10 text-sm text-gray text-center">{props.content.tags}</p>
        <div className="grid gap-x-8 grid-cols-4">
          {content}
        </div>
      </div>
    </section>
  )
}