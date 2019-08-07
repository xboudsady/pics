import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import config from '../config';

const accessKey = config.access_key;
const secretKey = config.secret_key;


class App extends React.Component {
  
  // Will pass this down to the <SearchBar /> as a prop
  onSearchSubmit(term) {
    // Use Axios to get data
    // 1st argumet is the path, 2nd arguement is an object
    axios.get(' https://api.unsplash.com/search/photos', {
      // Header Object
      headers: {
        Authorization: 'Client-ID ' + accessKey
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
      </div>
    );
    }
};


export default App