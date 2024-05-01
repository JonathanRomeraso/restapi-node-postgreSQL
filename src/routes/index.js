const{ Router } =  require('express');
const router = Router();

const{ getUsers, createUsers, getUsersbyId, deleteuser, updateUser } = require('../controllers/index.controller')

router.get("/users", getUsers);
router.get("/users/:id", getUsersbyId);
router.post("/users", createUsers);
router.delete("/users/:id", deleteuser);
router.put("/users/:id", updateUser);

module.exports = router;
