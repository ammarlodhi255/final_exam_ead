import { useEffect, useState } from 'react';

const Recipes = () => {
    const [recipes, setRecipes] = useState([
        {title: "Black-Pepper", description:"", ingredients:"", instructions:""},
        {title: "Grilled-Chicken", description:"", ingredients:"", instructions:""},
        {title: "Sali-Par-Edu-Indian", description:"", ingredients:"", instructions:""},
    ]);

    useEffect(() => {
        fetch("http://localhost:5000/get-recipes")
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }, []);

    return (
        <div>
            {recipes.map((recipe, index) => (
                <div key={index} className="recipe" style={styles.recipe}>
                    <img src={require(`../recipe-images/${recipe.title}.jpg`)} alt="" />
                    <div style={styles.title}>Title: {recipe.title}</div>
                    <div style={styles.description}>Description: {recipe.description}</div>
                    <div style={styles.ingredients}>Ingredients: {recipe.ingredients}</div>
                    <div style={styles.instructions}>Instructions: {recipe.instructions}</div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    recipe: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    description: {
        marginBottom: '5px',
    },
    ingredients: {
        marginBottom: '5px',
    },
    instructions: {
        marginBottom: '5px',
    },
};

export default Recipes;


