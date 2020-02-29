import React from 'react'
import { connect } from 'react-redux'
import { Router, navigate } from "@reach/router"
import { appState } from './redux/app'
import { userState } from './redux/user'
//components
import Dialog from './components/Dialog/Dialog'
//routes
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Login from './routes/Login/Login'

import LoadingGif from './img/loading-bubble.gif'
import { overlay } from './theme/Theme.module.scss'

export default connect(
	(state) => ({
		appState: appState(state),
		userState: userState(state),
	})
)(function App(props) {

	const {
		appState: { dialog, loading },
		userState: { isLoggedIn }
	} = props

	if (window.location.pathname.indexOf('login') === -1 && !isLoggedIn) {
		navigate('/login')
	}

	return (
		<div>
			{ loading && <div className={overlay}>
				<img src={LoadingGif} />
			</div>}
			{ dialog && <div className={overlay}>
				<Dialog {...dialog} />
			</div>}
			<Router>
				<Home {...props} path="/" />
				<About {...props} path="/about" />
				<Login {...props} path="/login" />
			</Router>
		</div>
	)
})