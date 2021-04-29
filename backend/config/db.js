import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB Connected: ${connect.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error: %{error.message}`.red.underline.bold);
    process.exit(1); // exit with false
  }
};

export default connectDB;
