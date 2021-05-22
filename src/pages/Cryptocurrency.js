import React, { Component } from 'react'
import axios from 'axios';


class Cryptocurrency extends Component {

	componentDidMount(){
		this.fetchData()

	}

	async fetchData(){
		const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
		const ApiKey = "976f1416-c7c4-4c71-8c2d-f5f0eb19d670"
		const qString =  "&start=1limit=5&convert=USD"
		try {
			let response = await axios.get(url + qString, {
				headers: {
					'X-CMC_PRO_API_KEY': ApiKey
				}
			})
			console.log(response)
		} catch(err) {
			console.log(err)
		}
	}

	render(){
		return (
			<div className='cryptocurrency'>

				<h1>Cryptocurrencies</h1>
			</div>
		)
	}

}

export default Cryptocurrency
