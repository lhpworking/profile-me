import React from 'react'

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div>ProductDetail {params.slug}</div>
  )
}
