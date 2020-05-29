import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { loadData } from '../../redux/data'

import { setDialog } from '../../redux/app'
import { logout } from '../../redux/user'
import { root, logoutButton } from './Mod.module.scss'

export default function Home(props) {

	const { dataState: { data } } = props

	console.log(data)

	const dispatch = useDispatch()

	// onMount
	useEffect(() => {
		dispatch(loadData(true))
	}, [])

	return (
		<div className={root}>
			<h1>
				<span>Home</span>
				<span onClick={() => navigate('/about')}>&nbsp;About</span>
			</h1>
			<h2>Home</h2>
			{
				data.map(({ owner: { display_name }, answer_id}) => <p key={answer_id}>
					{ display_name }
				</p>)
			}
		</div>
	)
}