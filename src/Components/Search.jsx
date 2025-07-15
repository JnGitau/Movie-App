import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">{searchTerm}
    <div>
      <img src='./search.svg' alt="search"></img>
      <input 
      type="text"
      placeholder='Search through thosands of movies'
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
    
    </div>
  )
}

export default Search;