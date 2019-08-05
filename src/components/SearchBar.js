import React from 'react';

class SearchBar extends React.Component {

  // Method called when text is changed in search field
  // Event object as parameter
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* This callback will be invoke each time a user types */}
            {/* Ommits the onInputChange() parentheses to not call when component is rendered */}
            <input type="text" onChange={this.onInputChange} /> 
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;