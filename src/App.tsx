import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar'

function App() {
  return (
    <Router>
            <>
              <Navbar />
              <div className="container">
              </div>
            </>
          </Router>
  );
}

export default App;
