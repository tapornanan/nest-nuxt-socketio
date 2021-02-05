import io from 'socket.io-client';

export default io(
  'http://localhost:3000',
  {
    transports: ['websocket'],
    rejectUnauthorized: false,
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
    path: '/socket.io',
  }
)
