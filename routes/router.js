const express = require('express')
const router = express.Router()
const connection = require('../database/db')

router.get('/home', (req, res) => {
    res.send({ "message": "this is my home page" })
})


router.get('/databases', async (req, res) => {
    let sql = 'CREATE DATABASE subhash'
    connection.query(sql, (er, data) => {
        if (er) {
            console.log('database exist already');
            res.send('database exist already')
        };
        // console.log(data);
        res.send("database created")
    })
})


//Create Tables;
router.get('/tables', async (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT,name VARCHAR(255),email VARCHAR(255),password VARCHAR(255),PRIMARY KEY (id))';
    connection.query(sql, (er, data) => {
        if (er) {
            console.log('table exist already');
            res.send('Table exists already')
        };
        console.log('Table created');
        res.send("Table created")

    })
})

router.get('/getAll', (req, res) => {
    connection.query("select * from employee_table", function (err, result) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})


router.get('/get/:getByid', (req, res) => {
    const id = req.params.getByid
    connection.query("SELECT * FROM employee_table WHERE id=?", id, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(result);
            res.send(result)
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    connection.query("DELETE FROM employee_table where id = ?", [id], function (err, result) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(result);
            res.send({ "message": "successful deleted" })
        }
    })
})

router.put('/update/:id', (req, res) => {
    const id = req.params.id
    connection.query("UPDATE employee_table SET name =?, occupation =?, age =? WHERE id = ?", [req.body.name, req.body.occupation, req.body.age, id], function (err, result) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(result);
            res.send({ "message": "successful update" })

        }
    })
})


router.post('/create', (req, res) => {
    console.log(req.body);
    connection.query("insert into employee_table set ?", req.body, function (err, result) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        else {
            console.log(result);
            res.send({ "message": "successful data created" })
        }
    })
})


module.exports = router