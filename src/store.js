import Vue from 'vue'
import Vuex from 'vuex'
const { commit } = Vuex

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    widgets: []
  },
  mutations: {
    setWidgets(state, widgets){
      state.widgets = widgets
    }
  },
  actions: {
    setWidgets(context, widgets){
      context.commit('setWidgets', widgets)
    }
  }
})
