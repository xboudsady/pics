import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    // This is a function from the parent component <App />
    // We then pass in our state propertie
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        {/* Add onSbumit props to handle form submission 'Note' Omit the () to preven call on render */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* Update the value of search, based on change in user input in text field */}
            <input 
              type="text" 
              value={ this.state.term } 
              onChange={ (e) => this.setState({ term: e.target.value }) } 
            /> 
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;