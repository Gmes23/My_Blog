import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';



export default class HomePage extends Component {

    render() {
        return (
            <div>
                <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                 <li>
                    <Link to="/blog"> Blog </Link>
                </li>
                 <li>
                    <Link to="/about"> About </Link>
                </li>
                 <li>
                    <Link to="/contact"> Contact </Link>
                </li>
                </ul>
                <h1> Gerardo Mestanza </h1>
                <h2> Software Engineer </h2>
                
            </div>
        )
    }
}
