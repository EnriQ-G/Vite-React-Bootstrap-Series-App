import React, { useState } from 'react'

function WatchList ({ movie, addToFavorites }) {
  const [liked, setLiked] = useState(false)

  function handleClick () {
    setLiked(!liked)
    addToFavorites(movie)
  }

  return (
    <button onClick={handleClick}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}

export default WatchList
