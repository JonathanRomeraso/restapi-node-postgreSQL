const{ Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    database:'firstapi',
    port:'65432',
    user:'postgres',
    password:'12345',
});

const getUsers =async(req, res)=>{
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const createUsers =async(req, res)=>{
    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
            message:'User Added Succesfully',
            body:{
                user:{name, email}
            }
    })
}

const getUsersbyId = async(req, res)=>{
    const id =  req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}
const updateUser = async(req, res)=>{
    const id =  req.params.id;
    const {name, email} =  req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json(`User ${id} updated succesfully`);
}



const deleteuser = async(req, res)=>{
    const id =  req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted succesfully`);
    
}

module.exports={
    getUsers, createUsers, getUsersbyId, deleteuser, updateUser
}