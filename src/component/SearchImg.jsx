import React from 'react'

export default function SearchImg(props) {
    const img = `https://source.unsplash.com/user/erondu/600x300?${props.name}`
  return (
    <>
    <img src={img} alt="any thing" />
    </>
  )
}
