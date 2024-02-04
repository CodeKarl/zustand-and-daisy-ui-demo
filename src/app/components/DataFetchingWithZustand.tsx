'use client'

import React from 'react'
import Card from './Card'
import { useStore } from '../store';

function DataFetchingWithZustand() {
  const { data, isLoading, error, fetchData, clearData } = useStore(state => state)

  const tags = ['Zustand', 'DaisyUI']

  return (
    <Card tags={tags}>
      <h1 className='text-center'>Data Fetching With Zustand</h1>
      <p className='text-center'>
        This is a card that fetches data from an API using Zustand and shows a loading state while fetching data.
      </p>
      <div>
        {isLoading ? (
          <div className='flex flex-col justify-center gap-4 items-center'>
            <div className="skeleton w-full h-32"></div>
            <span className="loading loading-spinner text-primary text-center"></span>
          </div>
        ) : (
          <>
            <p>Here is the data:</p>
            <pre className='text-pretty max-w-[5vw]'>{JSON.stringify(data)}</pre>
          </>
        )}
      </div>
      <div className='flex gap-4 justify-center'>
        <button onClick={fetchData} className='btn btn-primary'>{data ? 'Re-fetch Data' : 'Fetch Data'}</button>
        <button onClick={clearData} className='btn btn-secondary' disabled={!data}>Clear Data</button>
      </div>
    </Card>
  )
}

export default DataFetchingWithZustand