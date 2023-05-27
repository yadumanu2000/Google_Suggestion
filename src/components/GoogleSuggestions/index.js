// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    }
  }

  handleInputChange = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchValue} = this.state

    const filteredSuggestions = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="google-suggestions-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchValue}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.map(suggestion => (
            <SuggestionItem key={suggestion.id} suggestion={suggestion} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
