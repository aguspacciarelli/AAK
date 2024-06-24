'use client;'
import React from 'react'
import Image from 'next/image'
import Card from '@/app/components/Card/Card'
import CardDetails from '@/app/components/CardDetails/CardDetails'

const page = ({ params }) => {
    const { id } = params
  return (
    <CardDetails id={id}/>
  )
}

export default page