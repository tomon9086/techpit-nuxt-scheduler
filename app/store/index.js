export const state = () => ({
  isLoading: false
})

export const getters = {
  isLoading (state) {
    return state.isLoading
  }
}

export const mutations = {
  setLoadingState (state, isLoading) {
    state.isLoading = !!isLoading
  }
}

export const actions = {
  startLoading (ctx) {
    ctx.commit('setLoadingState', true)
  },
  finishLoading (ctx) {
    ctx.commit('setLoadingState', false)
  }
}
