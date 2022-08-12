const express = require('express');
const router = express.Router();

const { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } = require('../controllers/people')

// // //*GET request
// router.get('/', getPeople )

// // //* Post ex (javascript https request) 
// router.post('/', createPerson)

// router.post('/postman', createPersonPostman)

// // //*PUT method
// router.put('/:id', updatePerson)

// // //* Delete method
// router.delete('/:id', deletePerson)

// //* another way to set routes
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;