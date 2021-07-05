import { Switch, Route } from 'react-router-dom';
import { Button, ButtonToolbar } from 'rsuite';
import './App.css';

import routes from './Routes';

import 'rsuite/dist/styles/rsuite-dark.css';

function App() {
  return (
    <div className="App">
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
