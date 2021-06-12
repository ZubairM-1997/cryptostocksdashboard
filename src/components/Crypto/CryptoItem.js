import React, { Component } from 'react'

 const CryptoItem = (props) => {
	 console.log(props)
	return (
		<div className="cryptoItem">
			<h3>{props.cryptoName}</h3>
			<ul>
				<li>Symbol: {props.symbol}</li>
				<li>Circulating Supply: {props.supply}</li>
				<li>Market Cap: $ {props.marketCap}</li>
				<li>Price: $ {props.price}</li>
				<li>Volume: $ {props.volume}</li>
			</ul>
		</div>

	)
 }

 export default CryptoItem;