import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import RecentArtistTable from './RecentArtistTable';
import FeaturedArtistTable from './FeaturedArtistTable';
import update from './update.json';

class Home extends Component {
  constructor(props) {
    super();
    this.state = { ...this.props };
    this.state.heading = "Music Library";
    this.state.subHeading = "Select an Artist:";
  }
  render() {
    return (
      <div id="main-container" align="center">
        <h1 id="heading">{ this.state.heading }</h1>
        <h2 id="sub-heading">{ this.state.subHeading }</h2>
        <div id="new-container" className="content-container">
          <RecentArtistTable />
          <FeaturedArtistTable />
        </div>
        <div id="featured-container" className="content-container">
        </div>
      </div>
    );
  }
}

export default Home;
