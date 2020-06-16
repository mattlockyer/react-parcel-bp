import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { mount, login } from '../redux/user'


export default function Login(props) {

	const { userState } = props

	const [name, setName] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		console.log('mount')
		dispatch(mount(true))
	}, [])

	if (userState.resuming) {
        return <div>
			<h1>Resuming {userState.name}</h1>
		</div>
	}

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => dispatch(login(name))}>Sign In</button>
		</div>
	)
}