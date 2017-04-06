import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './pages/user/App';
import Home from './pages/user/Home';
import NewArticle from './pages/admin/NewArticle';
import LoginView from './pages/user/LoginView';
import Admin from './pages/admin/Admin';

export default(
  <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/articles" component={NewArticle} />
      <Route path="/login" component={LoginView} />
      <Route path="/admin" component={Admin} />
        <Route path="/admin" component={App}>
              <IndexRoute component={Admin} />
              <Route path="/articles" component={NewArticle} />
        </Route>
  </Route>
);
