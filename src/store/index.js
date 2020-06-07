import Vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'

Vue.use(vuex)

const store = new vuex.Store({
    modules: {
        app
    }
})

export default store
