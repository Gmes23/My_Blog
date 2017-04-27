import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import HomePage from './containers/homepage';
import PostsShow from './containers/posts_show';
import AboutPage from './containers/about_page';
import ContactPage from './containers/contact_page';
import BlogPage from './containers/blog_page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="blog" component={BlogPage} />
        <Route path="contact" component={ContactPage} />
        <Route path="about" component={AboutPage} />
        <Route path="blog/javascript/:id" component={PostsShow} />
    </Route>      
);