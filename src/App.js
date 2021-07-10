import { Switch, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './Routes';
import 'rsuite/dist/styles/rsuite-dark.css';
import Navigation from './components/navigation';
import ErrorBoundary from './components/error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Navigation />
        <Suspense fallback={<h2>Loadin Page...</h2>}>
          <Switch>
            {routes.map((route) => (
              <Route
                exact
                path={route.path}
                key={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
