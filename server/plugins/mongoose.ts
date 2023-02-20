import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();

  try {
    // Connect to mongodb
    // await mongoose.connect(config.mgdbUri);
    mongoose.connect('mongodb+srv://admin:ifS9WvZyWBzavpzv@cluster-ai.hthbfjo.mongodb.net/ai');
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
});
