import $socket from './../plugins/socket-instance'

export const state = () => ({
    feeds: '',
    secretMessage: ''
})
export const  mutations = {
    SOCKET_FEEDS(state, payload) {
        state.feeds = payload
    },
    SOCKET_SECRET_MESSAGE(state, payload) {
        state.secretMessage = payload;
    }
}
export const actions = {
    nuxtServerInit({ commit, dispatch }, { req }) {},
    joinRoom({}, roomName) {
        $socket.emit('joinRoom', roomName)
    }
}
