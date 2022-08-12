const express = require('express');
const app = express();
let {people} = require("./data");


// //*Static assests
app.use(express.static("./methods-public"))

// //* parse form data
app.use(express.urlencoded({extended: false}));
// //*Parse JSON data
app.use(express.json());

// //*GET request
app.get('/api/people',(req,res) => {
        res.status(200).json({status:'success',data: people});
})

// app.get('*',(req,res) => {
//         res.send("Not found")
// })


// //* POST req (form ex)
// app.post("/login",(req,res) => {
//         const {name} = req.body;
//         if (name) {
//                 return res.status(200).send(`Welcome ${name}`);
//         }
//         res.status(401).send("Please enter your name");
// })

// //* Post ex (javascript https request) 
app.post('/api/people', (req, res) => {
        const {name} = req.body;
        if (!name) {
                return res.status(400).json({success: false, msg : "Please enter your name"});
        }
        res.status(201).json({success: true, person: name});
})

app.post('/api/postman/people',(req,res) => {
        const {name} = req.body;
        if (!name) {
                return res.status(400).json({success: false, msg : "Please enter your name"});        
        }
        res.status(201).json({success: true, data: [...people,name]});
})

// //*PUT method
app.put('/api/people/:id',(req,res)=> {
        const {id} = req.params;
        const {name} = req.body;

        const person = people.find((p) => p.id === Number(id));

        if (!person) {
                return res.status(404).json({success: false, message: `no person with id ${id}`});
        }
        const newPeople = people.map((p) => {
                if (p.id === Number(id)) {  
                        p.name = name
                }
                return p;
        });
        // console.log(person);
        res.status(200).json({success: true, data : newPeople});
})

// //* Delete method
app.delete('/api/people/:id',(req,res) => {
        const person = people.find((p) => p.id === Number(req.params.id));

        if (!person) {
                return res.status(404).json({ success: false, message: `no person with id ${req.params.id}` });
        }

        const newPeople = people.filter((p) => p.id !== Number(req.params.id))
        return res.status(200).json({success: true, data: newPeople});
})

app.listen(5000,()=> {
        console.log('listening on port');
})