import React, { PropTypes } from 'react';
import {
  IndexRoute,
  Link,
  Route,
  Router,
  browserHistory,
} from 'react-router';


function Layout({ children }) {
  return (
    <div>
      <h1>Website. Honestly.</h1>
      <div>{children}</div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};


function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/somewhere">Go somewhere?</Link>
    </div>
  );
}


function NotFoundPage() {
  return (
    <div>
      <h1>Nothing here...</h1>
      <Link to="/">Go home?</Link>
    </div>
  );
}


export default function routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  );
}
