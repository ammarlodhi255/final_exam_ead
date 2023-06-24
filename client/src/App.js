import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './Components/Recipes';
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />

        <Routes>
          <Route exact path='/show-recipes' element={<Recipes/>} />
          <Route exact path='/add-recipe' element={<Add/>} />
          <Route exact path='/edit-recipe' element={<Edit/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
