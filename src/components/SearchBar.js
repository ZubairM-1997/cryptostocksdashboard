import React, { Component } from 'react';

export default class SearchBar extends Component{
	render(){

		return(
			<input
			type="text"
			onChange={this.props.onChange}
			placeholder="Search Cryptocurrencies"
			></input>
		)
	}
}