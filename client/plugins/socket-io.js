import Vue from 'vue'
import VueSocketIOExt from 'vue-socket.io-extended'
import $socket from './socket-instance';

export default ({ store }) => {
  Vue.use(VueSocketIOExt, $socket, { store })
}
