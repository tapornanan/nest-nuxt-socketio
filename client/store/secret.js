export const state = () => ({
    secretMessage: ''
})
  
export const mutations = {
    SOCKET_SECRET(state, payload) {
        state.secretMessage = payload
    }
}
  
export const actions = {
    testAction() {
        alert('called')
    }
}
  
export const getters = {}
