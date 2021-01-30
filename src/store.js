import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { loadStage, saveStage } from './localStorage'


const persistedState = loadStage()
const store = createStore(rootReducer, persistedState)

store.subscribe(()=> {
    saveStage(store.getState())
})




export default store;