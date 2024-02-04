'use client'

import React from 'react'
import { useStore } from '../store'

function Counter() {
  const currentCount = useStore((state: any) => state.count)
  const increaseCount = useStore((state: any) => state.increaseCount)
  const decreaseCount = useStore((state: any) => state.decreaseCount)
  const resetCount = useStore((state: any) => state.resetCount)

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {currentCount}</p>
      <div className='flex gap-2'>
        <button type="button" onClick={increaseCount}>+</button>
        <button type="button" onClick={resetCount}>Reset</button>
        <button type="button" onClick={decreaseCount}>-</button>
      </div>
    </div>
  )
}

export default Counter