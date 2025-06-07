import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            dbName: " BfsSchoolMgtSystem",
            // useCreateIndex: true,   
            // useFindAndModify: false,
             
        })
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
}
