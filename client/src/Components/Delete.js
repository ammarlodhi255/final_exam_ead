const Delete = () => {
    return (
        <div className="Delete Form">
            <form action="http://localhost:5000/delete-recipe" method="post">
                <label>
                    Title:
                    <input type="text" name="title" placeholder="Enter Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
                
                <input type="submit" value="Delete Recipe"/>
            </form>
        </div>
    );
}
 
export default Delete;