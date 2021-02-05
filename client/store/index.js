import $socket from './../plugins/socket-instance'

export const state = () => ({
    feeds: '',
})
export const  mutations = {
    SOCKET_FEEDS(state, payload) {
        state.feeds = payload
    },
}
export const actions = {
    nuxtServerInit({ commit, dispatch }, { req }) {},
    joinRoom({}, roomName) {
        $socket.emit('joinRoom', roomName)
    }
}
