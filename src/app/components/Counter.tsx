'use client'

import React from 'react'
import { useStore } from '../store'
import Card from './Card'

function Counter() {
  const { decreaseCount, increaseCount, resetCount, count } = useStore(state => state)

  const hasDisabledReset = count === 0
  const tags = [
    { name: 'Zustand', color: 'primary' },
    { name: 'DaisyUI', color: 'secondary' },
  ]

  return (
    <Card tags={tags}>
      <h1 className='text-center'>Counter</h1>
      <p className='text-center'>{count}</p>
      <div className='flex gap-2 justify-center'>
        <button type="button" className='btn btn-circle btn-error' onClick={decreaseCount}>-</button>
        <button type="button" className='btn btn-warning' disabled={hasDisabledReset} onClick={resetCount}>Reset</button>
        <button type="button" className='btn btn-circle btn-success' onClick={increaseCount}>+</button>
      </div>
    </Card>
  )
}

export default Counter