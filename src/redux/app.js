import { getReducer, getState, UPDATE } from '../util/redux-util'
//default state
const defaultState = {
	mounted: false,
	loading: true,
	dialog: null,
}
export const appReducer = getReducer(defaultState)
export const appState = getState('appReducer', defaultState)
//functions
export const mount = (val) => async (dispatch, getState) => {
	console.log('APP MOUNT')
	dispatch({ type: UPDATE, mounted: val })
}
export const setLoading = (loading) => async (dispatch, getState) => {
	dispatch({ type: UPDATE, loading })
}
export const setDialog = (dialog) => async (dispatch, getState) => {
	if (dialog) {
		return new Promise((resolve) => {
			dispatch({ type: UPDATE, dialog })
			dialog.callback = (...args) => resolve(...args)
		})
	} else {
		dispatch({ type: UPDATE, dialog: null })
	}
}