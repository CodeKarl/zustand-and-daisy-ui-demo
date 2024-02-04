import React from 'react'

interface CardProps {
  children: React.ReactNode
  tags: string[]
}

function Card({ children, tags }: CardProps) {
  return (
    <div className='card relative flex flex-col gap-4 justify-center shadow-xl bg-base-100 border border-white px-16 pt-4 pb-16 rounded-lg'>
      {children}
      <div className='absolute bottom-0 right-0 flex gap-2 p-2'>
        {tags.map((name) => (
          <div key={name} className='badge badge-primary'>{name}</div>
        ))}

      </div>
    </div>
  )
}

export default Card