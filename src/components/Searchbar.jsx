import React, { useState } from 'react'

const SearchBar = ({ handleSearch, handleSearchSeries }) => {
  const [search, setSearch] = useState('')
  const [searchSeries, setSearchSeries] = useState('')
  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder='Search'
        name='search'
        value={search}
        onChange={(event) => {
          setSearch(event.target.value)
          setSearchSeries(event.target.value)
        }}

      />
      <button
        className='search-button' onClick={() => {
          handleSearch(search)
          handleSearchSeries(searchSeries)
        }}
      >
        Buscar
      </button>

    </div>
  )
}

export default SearchBar
