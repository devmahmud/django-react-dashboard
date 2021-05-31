import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
