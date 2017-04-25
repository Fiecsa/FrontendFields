import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './pages/user/App';
import Home from './pages/user/Home';
import NewArticle from './pages/admin/NewArticle';
import LoginView from './pages/user/LoginView';
import Admin from './pages/admin/Admin';
import NewDistrict from './pages/admin/NewDistrict';
import NewTag from './pages/admin/NewTag';
import ChangeTag from './pages/admin/ChangeTag';
import ChangeDistrict from './pages/admin/ChangeDistrict';

export default(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/articles" component={NewArticle} />
            <Route path="/login" component={LoginView} />
            <Route path="/admin" component={Admin} />
            <Route path="articles" component={NewArticle} />
            <Route path="district" component={NewDistrict}/>
            <Route path="tag" component={NewTag}/>
            <Route path="edit_tag/:id" component={ChangeTag}/>
            <Route path="edit_district/:id" component={ChangeDistrict}/>
        </Route>
    </Router>
);
