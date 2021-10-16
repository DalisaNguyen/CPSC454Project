import Login from './containers/Login/Login';
import './containers/Login/Login.css';
import Candidates from "./containers/Candidates/Candidates";
import Voted from './containers/Voted/Voted';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route exact path="/candidates" component={Candidates}/>
              <Route exact path="/voted" component={Voted} />
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
        </header>
      </div>
  );
}

export default App;
