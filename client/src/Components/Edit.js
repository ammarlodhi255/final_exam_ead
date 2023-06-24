import "./add_edit.css";
import { useState } from 'react'

const Edit = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [file, setFile] = useState('');
    
    return (
        <div className="Edit Form">
            <h1> Edit Recipe </h1>
            <form action="http://localhost:5000/edit-recipe" method="post">
                <label>
                    Title:
                    <input type="text" name="title" placeholder="Enter Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>
                    Description:
                    <textarea type="text" name="description" placeholder="Enter Recipe Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <label>
                    Ingredients:
                    <textarea type="text" name="ingredients" placeholder="Enter Recipe Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                </label>
                <label>
                    Instructions:
                    <textarea type="text" name="instructions" placeholder="Enter Recipe Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>
                </label>

                <input type="file" name="filename" />

                <input type="submit" value="Edit Recipe"/>
            </form>
        </div>
    );
}
 
export default Edit;