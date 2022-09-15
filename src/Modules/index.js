import {createStore} from 'vuex';
import mainModules from './questions/index.js'

const store =createStore({
    modules:{
        questions:mainModules
    }
})

export default store;