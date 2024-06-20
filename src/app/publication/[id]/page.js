'use client;'
import React from 'react'
import Image from 'next/image'

const page = ({ params }) => {
    const { id,  img, title } = params
  return (
    <div>
      <p>hola {id}
        {title}
      </p>
      <Image src={img} alt={title} width={137} height={183}/>
    </div>
  )
}

export default page