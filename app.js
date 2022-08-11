const express = require('express');
const app = express();

const middleware = module.require('./middleware');
const authorize = module.require('./authorize');
// //* res => middleware => res

// //* express ka apna he
// app.use(express.static('./public'))

// //*jo khud bbnae wo custom he 
// //* morgan library bh he

// app.get('/', middleware, (req, res) => {
//         res.send("Home");
// })

// app.get('/about', middleware,(req, res) => {
//         res.send("about");
// });

// //* instead of passing middleware to every get request we do this
app.use([middleware, authorize])
// //* we can use multiple middlewares in it by passing in list

// //*if we want to apply middleware specific url we pass path
// //* it will apply to every url starting with the api
// app.use('/api',middleware)

app.get('/', (req, res) => {
        res.send("Home");
})

app.get('/api/items',(req, res) => {
        console.log(req.user);
        res.send("Items");
})


app.listen(5000,()=>{
        console.log("listening on port");
})

