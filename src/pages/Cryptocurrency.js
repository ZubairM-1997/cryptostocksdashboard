import React, { Component } from 'react'
import CryptoCollection from '../components/Crypto/CryptoCollection'
import SearchBar from '../components/SearchBar'

class Cryptocurrency extends Component {

	state = {
		cryptoData: [],
		cryptoNames: [],
		searchCrypto: '',
	}
	componentDidMount(){
		this.fetchData()
		console.log('Component mounted to DOM' , {
			state: this.state
		})
	}

	setCryptoDataState = (cryptoDataArray) => {
		this.setState({
			cryptoData: cryptoDataArray
		})
		console.log('Cryptocurrencies are now fetched as array of objects ' , {
			state: this.state
		})
	}

	setCryptoNamesState = (cryptoDataArray) => {
		let cryptoNamesArray = cryptoDataArray.map(crypto => ({
			key: crypto.name,
			text: crypto.symbol,
			value: crypto.quote.USD.price,
			image: {avatar: false}
		}))
		this.setState({
			cryptoNames: cryptoNamesArray
		})
		console.log('Cryptocurrencies are now correctly formatted to be displayed on page ' , {
			state: this.state
		})
	}

	fetchData(){
		const url = 'http://localhost:5000/cryptocurrency/cryptoData'
		const response = fetch(url, {
			headers: {
				'Content-Type': 'application/json',
			}
		})
		response.then((resp) => resp.json())
		.then((data) => {
			let arrayData = data.data
			this.setCryptoDataState(arrayData)
			this.setCryptoNamesState(arrayData)
		}).then(() => {
			console.log(this.state)
		})

	}

	onChange = (event) => {
		this.setState({
			searchCrypto: event.target.value
		})

		console.log('Search Filter working as expected', {
			state: this.state
		})
	}

	render(){
		return (
			<div className='cryptocurrency'>
				<SearchBar  onChange={this.onChange} />
				<CryptoCollection cryptoData={this.state.cryptoData}/>
			</div>
		)
	}

}

export default Cryptocurrency
