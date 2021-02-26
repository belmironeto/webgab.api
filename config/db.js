import mongoose from 'mongoose';

export default connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://prodsystem:gab102030@prodgab.01ykq.mongodb.net/prod_system',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit;
  }
};
