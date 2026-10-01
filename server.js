import app from "./server/app.js";
import connectDB from "./config/database.js";

connectDB();

app.listen(3000, () => {
    console.log("Server Running");
})



