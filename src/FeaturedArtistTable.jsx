import React from 'react';
import ReactDOM from 'react-dom';
import TableContainer from './TableContainer';
import update from './update';

class FeaturedArtistTable extends React.Component{
	constructor(props) {
		super();
		this.state = { ...props };
		this.state.containerName = 'featured';
		this.state.headerText = 'Featured Artist:';
		this.state.list = update['featured'];
	}
	render() {
		return(<TableContainer { ...this.state }/>);
	}
}

export default FeaturedArtistTable;