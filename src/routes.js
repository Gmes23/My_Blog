import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homepage';
import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="blog/:id" component={PostsShow} />
    </Route>      
);