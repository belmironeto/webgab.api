import mongoose from 'mongoose';

export default connectDB = async () => {
  try {
    const conn = await mongoose.connect(PROCESS.ENV.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit;
  }
};
