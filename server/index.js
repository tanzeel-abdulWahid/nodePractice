import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.urlencoded({ limit:"30mb",extended: true }));
app.use(bodyParser.json({limit:"30mb"}));
app.use(cors());

app.use('/posts',postRoutes)
const PORT = process.env.PORT || 3000;


const CONNECTION_URL = 'mongodb+srv://tanzeel:tanzeel123@cluster0.tenvu47.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL)
.then(() => {
        app.listen(PORT, () => {
                console.log(`Listening on port ${PORT}`);
        })
})
.catch((err) => console.log(err))
