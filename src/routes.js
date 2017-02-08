import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/user/App';
import Home from './pages/user/Home';
import NewArticle from './pages/user/NewArticle';
import LoginView from './pages/user/LoginView';

export default(
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/articles/new" component={NewArticle} />
      <Route path="/login" component={LoginView} />
  </Route>
);
