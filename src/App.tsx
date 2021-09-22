import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Views
import Login from './components/Views/Auth/Login'

// UI Components
import Navbar from './components/UI/Navbar/Navbar'
import Snippets from "./components/Views/Snippets/Snippets";

function App() {
  return (
    <Router>
            <>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/snippets" component={Snippets} />
                </Switch>
              </div>
            </>
          </Router>
  );
}

export default App;
