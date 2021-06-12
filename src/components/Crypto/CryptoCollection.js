import React, { Component } from 'react'
import CryptoItem from "./CryptoItem"
import "./Crypto.css"

export default class MostTraded extends Component {
	render(){
		return (
			<div className="cryptoCollection">
				{
					this.props.cryptoData.map(dataPoint => {
						return <CryptoItem
						cryptoName={dataPoint.name}
						supply={dataPoint.circulating_supply}
						symbol={dataPoint.symbol}
						marketCap={dataPoint.quote.USD.market_cap}
						price={dataPoint.quote.USD.price}
						volume={dataPoint.quote.USD.volume_24h}
						/>
					})
				}

			</div>
		)

	}
}

