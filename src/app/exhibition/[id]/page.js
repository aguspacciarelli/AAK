'use client;'
import React from 'react'

const page = ({ params }) => {
    const { id } = params
  return (
    <div>
      <p>hola {id}</p>
    </div>
  )
}

export default page