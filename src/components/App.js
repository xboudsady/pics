import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import config from '../config';

const accessKey = config.access_key;
const secretKey = config.secret_key;


class App extends React.Component {
  // create a state to store our network request, initial value is empty array, or object
  state = { images: [] };


  // Using the async, await syntax, instead of promise .then()
  // Will pass this down to the <SearchBar /> as a prop
  onSearchSubmit = async (term) => {
    // Use Axios to get data
    // 1st argumet is the path, 2nd arguement is an object
    const response = await axios.get(' https://api.unsplash.com/search/photos', {
      // Parameters for search query -- from our term 'user input' from state props
      params: { query: term },
      // Header Object
      headers: {
        Authorization: 'Client-ID ' + accessKey
      }
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