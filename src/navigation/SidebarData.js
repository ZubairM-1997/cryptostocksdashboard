import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'

export const SideBarData = [
	{
		title: 'Cryptocurrency',
		path: '/cryptocurrency',
		icon: <BiIcons.BiBitcoin />,
		className: 'nav-text'
	},
	{
		title: 'Stocks',
		path: '/stocks',
		icon: <AiIcons.AiOutlineStock />,
		className: 'nav-text'
	},
	{
		title: 'Metals',
		path: '/metals',
		icon: <GiIcons.GiGoldStack />,
		className: 'nav-text'
	},
	{
		title: 'News',
		path: '/news',
		icon: <BiIcons.BiNews />,
		className: 'nav-text'
	},
]