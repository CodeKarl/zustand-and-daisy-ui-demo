import React from 'react'
import Card from './Card'

function DataFetchingWithZustand() {
  const tags = [
    { name: 'Zustand', color: 'primary' },
    { name: 'DaisyUI', color: 'secondary' },
  ]

  const data = null;

  return (
    <Card tags={tags}>
      <h1 className='text-center'>Data Fetching With Zustand</h1>
      <p className='text-center'>
        This is a card that fetches data from an API using Zustand and shows a loading state while fetching data.
      </p>
      <div>
        <p>Here is the data:</p>
        <pre>{JSON.stringify(data)}</pre>
      </div>
      <div className='flex gap-4 justify-center'>
        <button className='btn btn-primary'>{data ? 'Re-fetch Data' : 'Fetch Data'}</button>
        <button className='btn btn-secondary' disabled={!data}>Clear Data</button>
      </div>
    </Card>
  )
}

export default DataFetchingWithZustand