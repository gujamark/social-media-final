import { Switch, Route } from 'react-router-dom';
import { routes } from './Routes';
import 'rsuite/dist/styles/rsuite-dark.css';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} key={route.path}>
            {route.component}
          </Route>
        ))}
        <Route path={routes.path} component={routes.component} />
      </Switch>
    </div>
  );
}

export default App;
