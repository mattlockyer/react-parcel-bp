import { getReducer, getState } from '../util/redux-util'
import { setLoading } from './app'
//default state
const defaultState = {
	data: []
}
const type = 'dataReducer'
export const dataReducer = getReducer(type, defaultState)
export const dataState = getState(type)

//functions

export const loadData = () => async (dispatch, getState) => {
    const { data } = getState().dataReducer
    const { loading } = getState().appReducer
    
    console.log(data, loading)

    await dispatch(setLoading(true)) // wait until appReducer state has loading = true
    const { loading: loading2 } = getState().appReducer
    console.log(loading2) // should be true


    const res = await fetch(`https://api.stackexchange.com/2.2/${'answers'}?order=desc&sort=activity&site=stackoverflow`)
        .catch((e) => console.log(e))
    const json = await res.json().catch((e) => console.log(e))

    console.log(json)

    dispatch({ type, data: json.items })

}
