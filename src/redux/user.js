import { getReducer, getState } from '../util/redux-util'
import { get, set } from '../util/local-storage'
import { setLoading } from './app'
//default state
const defaultState = {
	name: '',
	loading: false,
	isLoggedIn: false,
}
const type = 'userReducer'
export const userReducer = getReducer(type, defaultState)
export const userState = getState(type)
/********************************
Functions
********************************/
export const mount = () => async (dispatch, getState) => {
	console.log('REDUX: user mount')
	const name = await get('user')
	if (name === undefined) {
		dispatch(setLoading(false))
	} else {
		dispatch(hydrateAccount(name))
	}
}
export const login = (name) => async (dispatch, getState) => {
	await set('user', name)
	dispatch(hydrateAccount(name))
}
export const logout = () => async (dispatch, getState) => {
	console.log('logout')
	await set('user', null)
	window.location = '/'
}
const hydrateAccount = (name) => async (dispatch, getState) => {
	dispatch({ type, name, isLoggedIn: true })
	dispatch(setLoading(false))
}