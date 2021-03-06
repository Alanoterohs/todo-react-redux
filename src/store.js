import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers'

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
    todoReducer,
    compose(  applyMiddleware(thunk),devTools)
)

export default store;