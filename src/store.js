import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import marsImage from './MarsImage/MarsImageReducer'

const combined = combineReducers({ marsImage })

export default createStore(combined, applyMiddleware(thunk))
