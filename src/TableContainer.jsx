import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class TableContainer extends React.Component {
	constructor(props) {
		super();
		this.state = { ...props };
	}
	makeTD(artist){
		console.log(artist);
		const listenStyle = {
			textDecoration: "underline"
		}
		const rows = artist.map((a) =>
			<tr>
				<td class="artist">
					<Link to={`/artistCategory/${a.location}`} artist={a.location}>{a.displayName} >> <span style={listenStyle}>Listen</span></Link>
				</td>
			</tr>
		);
		return(
			<div>{rows}</div>
		);
	}
	render() {
		let mDiv = `${this.state.containerName}-container`;
		let tr = `${this.state.containerName}-header`;
		return(
			<div id={mDiv} className="content-container">
				<table className="artist-list">
					<tr>
						<th id={tr} className="header">{ this.state.headerText }</th>
					</tr>
					{this.makeTD(this.props.list)}
				</table>
			</div>
		);
	}
}

export default TableContainer;