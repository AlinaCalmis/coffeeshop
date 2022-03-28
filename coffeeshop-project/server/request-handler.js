const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

// const client = new pg.Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "password",
//     database: "coffee_shop"
// })

const pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "coffee_shop"
})

// module.exports = pool;

exports.getDrinks = (req, res) => {
    const query = pool.query('Select * from menu where type_global = $1', ['drink'], (error, result) => { 
       try {
            res.send(result.rows);
       } catch (error) {
            res.status(500).send(error);
       }
    });
};

exports.getDrink = (req, res) => {
    console.log(req.params.id);
    const query = pool.query('Select * from menu where type_global = $1 and prod_id = $2 ', ['drink', req.params.id], (error, result) => { 
       try {
           res.send(result.rows);
       } catch (error) {
            res.status(500).send(error);
       }
    });
};

exports.getDrinksSorted = (req, res) => {
    // console.log(req.params)
    const query = pool.query('Select * from menu where subtype = $1', [req.params.sort], (error, result) => {
        try {
            console.log(result.rows);
            res.send(result.rows);
        } catch (error) {
             res.status(500).send(error);
        }
    });
};

exports.getDrinksSearch = (req, res) => {
    console.log(req.params);
    const query = pool.query('Select * from menu where lower(prod_name) like $1 ', ['%' + req.params.search + '%'], (error, result) => {
        try {
            console.log(result.rows);
            res.send(result.rows);
        } catch (error) {
            console.log(error);
             res.status(500).send(error);
        }
    });
}

exports.updateLikes = (req, res) => {
    console.log(req.params);
    const query = pool.query(`
        Update menu 
        Set likes = likes+1
        Where prod_id = $1 `, [req.params.id], (error, result) => { 
       try {
           res.send(result.rows);
       } catch (error) {
            res.status(500).send(error);
       }
    });
};

exports.updateDislikes = (req, res) => {
    console.log(req.params);
    const query = pool.query(`
        Update menu 
        Set dislikes = dislikes+1
        Where prod_id = $1 `, [req.params.id], (error, result) => { 
       try {
           res.send(result.rows);
       } catch (error) {
            res.status(500).send(error);
       }
    });
};

exports.addComments = (req, res) => {
    console.log("Adding comment", req.query.name);
    const query = pool.query(`
        Insert into comment_prod(prod_id, username, comment_text) values ($1, $2, $3)`, [req.params.id, req.query.name, req.query.comment], (error, result) => {
            try {
                res.send(result.rows);
            } catch (error) {
                res.status(500).send(error);
            }
        })
}

exports.getComments = (req, res) => {
    console.log(req.params);
    const query = pool.query(`
        Select * from comment_prod where prod_id = $1`, [req.params.id], (error, result) => { 
       try {
           console.log(result.rows);
           res.send(result.rows);
       } catch (error) {
            res.status(500).send(error);
       }
    });
    
};
