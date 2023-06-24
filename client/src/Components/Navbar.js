import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <a style={styles.link} href="/show-recipes">Show Recipes</a>
            <a style={styles.link} href="/add-recipe">Add Recipe</a>
            <a style={styles.link} href="/edit-recipe">Edit Recipe</a>
            <a style={styles.link} href="/view-recipe">View Recipe</a>
        </nav>
    );
}

export default Navbar;

const styles = {
    navbar: {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    link: {
        color: '#333',
        textDecoration: 'none',
        margin: '0 10px',
        fontSize: '18px',
        fontWeight: 'bold',
    },
};
