// //!EXPRESS js

const express = require('express')
const app = express();
// const path = require('path');
// // app.get('/', (req, res) => {
// //         console.log("User hit the reference");
// //         res.status(200).send("Welcome");
// // })

// // app.get('/about', (req, res) => {
// //         res.status(200).send("welcome to about page");
// // })

// // setup static and middleware
// // //* in public folder, all static imgs, js file and css file are available;
// app.use(express.static('./public'));



// // //* we can add this in static (public folder) since it is static
// // app.get('/', (req, res) => {
// //         res.sendFile(path.resolve(__dirname, './content/first.txt'))
// // });

// app.all('*', (req, res) => {
//         res.status(404).send("<h1>Page not found</h1>");
// })

// app.listen('5000',() => {
//         console.log("Port started");
// })

// //!JSON

// const { people } = require('./data');
// app.get('/',(req,res) => {
//         res.json(people);
// })

// app.listen('5000',() => {
//         console.log("Port started");
// })

// //!Param and query

const {products} = require('./data');
app.get('/',(req,res) => {
        res.send("<h1>Home page <a href='/api/products' > Products</a> </h1>");
})

app.get('/api/products',(req,res) => {
        const newProducts = products.map((product) =>   {
                const {id,name} = product
                return {id,name}
        })
        res.json(newProducts);
})

app.get('/api/products/:id', (req, res) => {
        const {id} = req.params;

        const singleProduct = products.find((product) => (
                product.id === Number(id)
        ))
        if (!singleProduct) {
                return res.status(404).send('Product does not exist');
        }
        res.json(singleProduct);
})

app.get('/api/products/:id/reviews/:reviewId', (req, res) => {
        console.log(req.params);
        res.send("hello world")
})

app.get('/api/v1/query',(req, res) => {
        // console.log(req.query);
        const {search, limit} = req.query
        let sortedProducts = [...products]

        if (search) {
                sortedProducts = sortedProducts.filter((product) =>{
                        return product.name.startsWith(search);
                })
        }
        if (limit) {
                sortedProducts = sortedProducts.slice(0, limit)
        }
        if (sortedProducts.length < 1) {
                return res.status(200).json({success: true, data:[]})
        }
        res.status(200).json(sortedProducts);
})

app.listen(5000, () => {
        console.log("port started");
})