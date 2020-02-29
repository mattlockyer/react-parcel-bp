import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { setDialog } from '../../redux/app'
import { logout } from '../../redux/user'
import { root, logoutButton } from './Mod.module.scss'

export default function Home(props) {

	const { userState: { name } } = props

	const dispatch = useDispatch()

	return (
		<div className={root}>
			<h1>
				<span>Home</span>
				<span onClick={() => navigate('/about')}>&nbsp;About</span>
			</h1>
			<h2>Home</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className={logoutButton}>
				<i className="fas fa-sign-out-alt" onClick={async() => {
					const {ok} = await dispatch(setDialog({
						title: 'Sign out?',
						content: 'Are you sure you want to sign out?'
					}))
					if (ok) {
						dispatch(logout())
					}
				}}></i>
			</div>
		</div>
	)
}