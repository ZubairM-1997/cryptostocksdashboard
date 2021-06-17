import React, { Component } from 'react'
import "./Crypto.css"

 const CryptoItem = (props) => {
	return (
		<div className="cryptoItem">
			<h3 className="cryptoName">
				{props.cryptoName}
			</h3>
			<ul>
				<ul>Circulating Supply: {props.supply} {props.symbol}</ul>
				<ul>Market Cap: $ {props.marketCap}</ul>
				<ul>Price: $ {props.price}</ul>
				<ul>Volume: $ {props.volume}</ul>
			</ul>
		</div>

	)
 }

 export default CryptoItem;