import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function ListItem({ text }) {
  return (
    <div className="flex flex-row items-center mt-4 space-x-6">
      <div>
        <BsFillArrowRightCircleFill fill="#ffd188" size={24} />
      </div>
      <p className="text-white">{text}</p>
    </div>
  )
}