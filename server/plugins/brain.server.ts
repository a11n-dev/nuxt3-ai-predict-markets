// AI
import brain from "brain.js";

export default defineNitroPlugin(() => {
  // Create neural network
  const net = new brain.recurrent.LSTM();
  return {
    provide: {
      net,
    },
  };
});
