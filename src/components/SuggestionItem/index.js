// eslint-disable-next-line
import React from 'react'

import './index.css'

const SuggestionItem = props => {
  const {suggestion} = props

  const handleClick = () => {
    const searchInput = document.querySelector('.search-input')
    if (searchInput) {
      searchInput.value = suggestion.suggestion
    }
  }

  return (
    <li className="suggestion-item" onClick={handleClick}>
      <p className="suggestion">{suggestion.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </li>
  )
}

export default SuggestionItem
