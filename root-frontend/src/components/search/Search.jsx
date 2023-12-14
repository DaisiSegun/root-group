import React from 'react'
import './Search.scss'
import search from '../../images/search-icon.svg'

function Search() {
  return (
    <div className='search-container'>
      <div className='search-container-2'>
      <input className='search' placeholder='Which service do you need help with ' />

      <div className='search-icon-container'>
       <img className='icon' src={search} />
      </div>
      </div>
    </div>
  )
}

export default Search