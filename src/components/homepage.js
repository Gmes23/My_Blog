import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';



export default class HomePage extends Component {

    render() {
        return (
            <div>
                <h1> Hello world </h1>
            </div>
        )
    }
}
