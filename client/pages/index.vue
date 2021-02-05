<template>
  <div>
    <h4>Input room name and join the room.</h4>
    <input type="text" v-model="roomName" placeholder="input roomName to join">
    <button type="button" @click="onJoinRoom">Join room</button>
    <h4>Output from room you join.</h4>
    <div class="room-message">
      {{ secretMessage }}
    </div>
    <br>
    <br>
    <h4>This is the global event from server</h4>
    <p>{{ feeds }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      roomName: null
    }
  },
  methods: {
    onJoinRoom() {
      this.$store.dispatch('joinRoom', this.roomName)
      this.roomName = null;
    }
  },
  computed: {
    ...mapState({
      feeds: state => state.feeds,
      secretMessage: state => state.secretMessage,
    })
  }
}
</script>

<style>
  .room-message {
    height: 300px;
    border: 2px solid #555;
    padding: 20px;
    margin: 20px;
  }
</style>