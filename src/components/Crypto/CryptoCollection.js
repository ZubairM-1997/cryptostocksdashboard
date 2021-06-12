import React, { Component } from 'react'
import CryptoItem from "./CryptoItem"
import "./Crypto.css"

export default class MostTraded extends Component {

	constructor(props){
		super(props)
		this.state = {
			diffX: 0,
			diffY: 0,
			dragging: false,
			styles: {}
		}

		this._dragStart = this._dragStart.bind(this);
		this._dragging = this._dragging.bind(this);
		this._dragEnd = this._dragEnd.bind(this)
	}

	_dragStart(e){
		this.setState({
			diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
			diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
			dragging: true
		})
	}

	_dragging(e){
		if (this.state.dragging){
			let left = e.screenX - this.state.diffX
			let top = e.screenY - this.state.diffY
			this.setState({
				styles: {
					left: left,
					top: top
				}
			})

		}

	}

	_dragEnd(){
		this.setState({
			dragging: false
		})
	}

	render(){
		return (
			<div className="cryptoCollection" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
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

