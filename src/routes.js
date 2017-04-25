import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BlogPost from './components/blog';
import App from './containers/App';
import MainPage from './containers/MainPage'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="blog/:id" component={BlogPost} />
    </Route>      
);
