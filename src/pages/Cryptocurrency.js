import React, { Component } from 'react'
import CryptoCollection from '../components/Crypto/CryptoCollection'

class Cryptocurrency extends Component {

	state = {
		cryptoData: []
	}
	componentDidMount(){
		this.fetchData()
		console.log(this.state)
	}

	setCryptoDataState = (cryptoDataArray) => {
		this.setState({
			cryptoData: cryptoDataArray
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
			console.log(arrayData)
			this.setCryptoDataState(arrayData)
		}).then(() => {
			console.log(this.state)
		})

	}

	render(){
		return (
			<div className='cryptocurrency'>
				<CryptoCollection cryptoData={this.state.cryptoData}/>
			</div>
		)
	}

}

export default Cryptocurrency
