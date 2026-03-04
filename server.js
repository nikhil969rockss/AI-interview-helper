require("dotenv").config();
const app = require("./src/app");
const connectDB = require('./src/config/database')

const PORT = process.env.PORT || 3000;


//connect to DB
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT} http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log('Database connection failed', err)
    process.exit(1)
})


