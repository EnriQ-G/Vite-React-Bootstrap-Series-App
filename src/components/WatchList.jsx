import React, { useState } from 'react'

const WatchList = ({ series }) => {
  const [watchlist, setWatchlist] = useState([])
  const addToWatchlist = () => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, series])
  }

  return (
    <button onClick={addToWatchlist}>
      {watchlist.includes(series) ? 'Added to Watchlist' : 'Add to Watchlist'}
    </button>
  )
}

export default WatchList
