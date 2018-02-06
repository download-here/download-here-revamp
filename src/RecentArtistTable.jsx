import React from 'react';
import ReactDOM from 'react-dom';
import TableContainer from './TableContainer';
import update from './update';

class RecentArtistTable extends React.Component{
	constructor(props) {
		super();
		this.state = { ...props };
		this.state.containerName = 'recent';
		this.state.headerText = 'Recently Added!';
		this.state.list = update['recent'];
	}
	render() {
		return(<TableContainer { ...this.state }/>);
	}
}
export default RecentArtistTable;