import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routing/Routes';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </Router>
    </Container>
  );
}
export default App;
