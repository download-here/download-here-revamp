import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ArtistCategory from './ArtistCategory';

const Main = () => {
	return(
		<main>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route path='artistcategory/:artist' component={ArtistCategory} />
			</Switch>
		</main>
	);
}

export default Main;