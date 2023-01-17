import { io } from "socket.io-client";

const socketOptions = {
  rejectUnauthorized: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: 15,
}

export default defineNuxtPlugin(() => {
  const socket = io('/', socketOptions);
  
  return {
    provide: {
      socket,
    },
  };
});
