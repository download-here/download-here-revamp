import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ArtistCategory extends Component {
  constructor(props) {
    super(props);
    const params = { ...props};
  }
  render() {
  	console.log(this.props);
    return (
      <div>
        <h1>{ this.params.artist }</h1>
      </div>
    );
  }
}

export default ArtistCategory;
