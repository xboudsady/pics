import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  // create a state to store our network request, initial value is empty array, or object
  state = { images: [] };


  // Using the async, await syntax, instead of promise .then()
  // Will pass this down to the <SearchBar /> as a prop
  onSearchSubmit = async (term) => {
    // Use Axios to get data
    // 1st argumet is the path, 2nd arguement is an object
    const response = await unsplash.get('/search/photos', {
      // Parameters for search query -- from our term 'user input' from state props
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
        Found: { this.state.images.length } images
      </div>
    );
    }
};


export default App