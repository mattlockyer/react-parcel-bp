import React from 'react'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import { Router, navigate } from "@reach/router"
import { appState } from './redux/app'
import { userState } from './redux/user'
//components
import Dialog from './components/Dialog/Dialog'
//routes
// import Home from './routes/Home/Home'
// import About from './routes/About/About'
// import Login from './routes/Login/Login'

import LoadingGif from './img/loading-bubble.gif'
import { overlay } from './theme/Theme.module.scss'

const Loading = () => <div className={overlay}>
	<img src={LoadingGif} />
</div>

const Home = Loadable({ loader: () => import('./routes/Home/Home'), loading: Loading })
const About = Loadable({ loader: () => import('./routes/About/About'), loading: Loading })
const Login = Loadable({ loader: () => import('./routes/Login/Login'), loading: Loading })

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
			{ loading && <Loading />}
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