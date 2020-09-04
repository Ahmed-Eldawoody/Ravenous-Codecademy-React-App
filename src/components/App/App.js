import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/Yelp';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  /* These parameters represent the three pieces of information weâll
   send to the Yelp API in the next project. -- part:3
   this method for the letsgo button */
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses=>{
      this.setState({
        businesses: businesses
      })
    })
  };


  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;