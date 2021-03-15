const express = require ('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');
const urls = require('./config/url')


const app = express();
dotenv.config();

app.use(cors({
    origin: `${urls.clientURL}`, // allow the server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true //allow session cookie from browser to pass through
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(gameRoutes);
app.use('/user', userRoutes);

// Connecting mongoDB Database
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Succesfully connected!')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})