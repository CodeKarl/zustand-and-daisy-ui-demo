'use client'

import React from 'react'
import { useStore } from '../store'

function Counter() {
  const currentCount = useStore((state: any) => state.count)
  const increaseCount = useStore((state: any) => state.increaseCount)
  const decreaseCount = useStore((state: any) => state.decreaseCount)
  const resetCount = useStore((state: any) => state.resetCount)

  const hasDisabledReset = currentCount === 0

  return (
    <div className='card relative flex flex-col gap-4 justify-center shadow-xl bg-base-100 border border-white px-16 pt-4 pb-16 rounded-lg'>
      <h1 className='text-center'>Counter</h1>
      <p className='text-center'>{currentCount}</p>
      <div className='flex gap-2'>
        <button type="button" className='btn btn-circle btn-error' onClick={decreaseCount}>-</button>
        <button type="button" className='btn btn-warning' disabled={hasDisabledReset} onClick={resetCount}>Reset</button>
        <button type="button" className='btn btn-circle btn-success' onClick={increaseCount}>+</button>
      </div>
      <div className='absolute bottom-0 right-0 flex gap-2 p-2'>
        <div className="badge badge-primary">Zustand</div>
        <div className="badge badge-secondary">DaisyUI</div>
      </div>
    </div>
  )
}

export default Counter