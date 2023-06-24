const path = require("node:path");
const express = require("express");
const { connectToDB, getDB } = require("./db");

const app = express()
app.use(express.urlencoded( { extended: false }))

let db;

connectToDB((err) => {
    if (!err) {
        app.listen(5000, () => {
            console.log('Server listening on port 5000');
        });
        db = getDB();
    } else {
        console.log('There was a error connecting to DB', JSON.stringify(err))
    }
})

// Routes

app.get("/get-recipes", (req, res) => {
    console.log("Here")
    db.collection('recipes')
        .find()
        .forEach(recipe => recipes.push(recipe))
        .then(() => {
            res.status(200).json(recipes);
        }).catch((err) => {
            res.status(500);
            console.log(err);
        })
})

app.post("/add-recipe", (req, res) => {
    const recipe = req.body;

    const { title, description, ingredients, instructions, filename } = req.body;

    if (!title || !description || !ingredients || !instructions || !filename) {
      alert('Please fill in all required fields.');
      return;
    } else {
        db.collection('recipes')
        .insertOne(req.body)
        .then((result) => {
            res.status(200).send(`"Recipe added successfully" ${result}`)
        }).catch((err) => {
            res.status(500).send(`Error: ${err}`)
        })
    }
})

app.post("/delete-recipe", (req, res) => {
    const recipeToDelete = req.body.title;
    db.collection('recipes')
     .deleteOne(recipeToDelete)
     .then((result) => {
        res.status(200).send(`"Recipe deleted successfully" ${result}`)
     }).catch((err) => {
        res.status(500).send(`Error: ${err}`)
     })
})

app.post("/edit-recipe", (req, res) => {
    const recipeName = req.body.title;
    db.collection('recipes')
     .updateOne(
        {title: recipeName}, {$set: {
            "description": req.body.description,
            "ingredients": req.body.ingredients,
            "instructions": req.body.instructions,
            "filename": req.body.filename
        }})
        .then((err, result) => {
            res.send((err == null) ? { msg: ' '} : { msg: err })
        })
})

app.get("/view-recipe", (req, res) => {
    db.collection('recipes')
    .findOne({ title: req.body.title })
    .then((err, result) => {
        if (err) throw err;
        res.status(200).json(result);
    })
})