let { people } = require("../data");

const getPeople = (req, res) => {
        res.status(200).json({ status: 'success', data: people });
}

const createPerson = (req, res) => {
        const { name } = req.body;
        if (!name) {
                return res.status(400).json({ success: false, msg: "Please enter your name" });
        }
        res.status(201).json({ success: true, person: name });
}

const createPersonPostman = (req, res) => {
        const { name } = req.body;
        if (!name) {
                return res.status(400).json({ success: false, msg: "Please enter your name" });
        }
        res.status(201).json({ success: true, data: [...people, name] });
}

const updatePerson = (req, res) => {
        const { id } = req.params;
        const { name } = req.body;

        const person = people.find((p) => p.id === Number(id));

        if (!person) {
                return res.status(404).json({ success: false, message: `no person with id ${id}` });
        }
        const newPeople = people.map((p) => {
                if (p.id === Number(id)) {
                        p.name = name
                }
                return p;
        });
        // console.log(person);
        res.status(200).json({ success: true, data: newPeople });
}

const deletePerson = (req, res) => {
        const person = people.find((p) => p.id === Number(req.params.id));

        if (!person) {
                return res.status(404).json({ success: false, message: `no person with id ${req.params.id}` });
        }

        const newPeople = people.filter((p) => p.id !== Number(req.params.id))
        return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
        getPeople, createPerson, createPersonPostman, updatePerson, deletePerson
}