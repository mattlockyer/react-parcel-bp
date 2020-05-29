import React, { useEffect } from 'react'
import { connect, dispatch, useDispatch } from 'react-redux'
import { Router, navigate } from "@reach/router"
import { appState, mount } from './redux/app'
import { userState } from './redux/user'
import { dataState } from './redux/data'
//routes
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Login from './routes/Login/Login'
//components
import Dialog from './components/Dialog/Dialog'
//bring in both states here
//can also use connect in route components when data is specific to those routes
const App = (props) => {

	const {
		appState: { dialog, loading, mounted },
	} = props

	const dispatch = useDispatch()

	// onMount
	useEffect(() => {
		dispatch(mount(true))
	}, [])

	return (
		<div>
			<Router>
				<Home {...props} path="/" />
				<About {...props} path="/about" />
				<Login {...props} path="/login" />
			</Router>
		</div>
	)
}

export default connect(
	(state) => ({
		appState: appState(state),
		userState: userState(state),
		dataState: dataState(state),
	})
)(App)