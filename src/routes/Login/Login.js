import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { mount, login } from '../../redux/user'
import { root } from './Mod.module.scss'

export default function Login(props) {

	const { userState } = props
	
	if (userState.isLoggedIn) {
        navigate(`/`)
	}

	const [name, setName] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(mount(true))
	}, [])

	if (userState.resuming) {
        return <div className={root}>
			<h1>Resuming {userState.name}</h1>
		</div>
	}

	return (
		<div className={root}>
			<h1>Login</h1>
			<input 
				placeholder="Name" type="text" 
				value={name}
				onChange={(e) => setName(e.target.value)} 
				onKeyDown={({ key }) => {
					if (key === 'Enter') {
						dispatch(login(name))
						setName('')
					}
				}}
			/>
			<button 
				onClick={() => {
					dispatch(login(name))
					setName('')
				}
			}>Login</button>
		</div>
	)
}