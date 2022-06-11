import Navbar from "./Navbar";
import './App.css';
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import Notfound from "./Notfound";
import Welcome from "./Welcome";
import Coin from "./Coin";

function App() {
  return (
      <Router>
          <div className="App">
            <Navbar />
            <div className="content">
                <Switch>
                    <Route exact path="/vote">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/activity/:id">
                        <Details />
                    </Route>
                    <Route exact path="/">
                        <Welcome/>
                    </Route>
                    <Route path="/coin">
                        <Coin/>
                    </Route>
                    <Route path="*">
                        <Notfound></Notfound>
                    </Route>
                </Switch>
            </div>
          </div>
      </Router>
  );
}

export default App;
