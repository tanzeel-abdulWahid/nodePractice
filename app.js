const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// //*Static assests
app.use(express.static("./methods-public"))

// //* parse form data
app.use(express.urlencoded({extended: false}));
// //*Parse JSON data
app.use(express.json());

app.use('/api/people',people);
app.use('/login',auth);



app.listen(5000, () => {
        console.log('listening on port');
})
