import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <div className="navbar-gm">
                    <div className="logo-gm-container">
                        <h1 className="logo-gm no-margin">GM</h1>
                    </div>
                    <div className="logo-description">
                        <h1 className="no-margin gm-decription-header"> Gerardo Mestanza - Portfolio </h1>
                    </div>
                </div>
                <div className="right-container-mainpage">
                    <div className="right-container-top-section">
                        <p> blog </p>
                    </div>
                    <div className="right-container-bottom-section">
                        <p>instagram or portfolio </p>
                    </div>
                </div>
                <div className="billboard-mainpage">
                    <span className="span-line-small" />
                    <div className="billboard-display-events">
                        <h1 className="billboard-text"> Gerardo Mestanza
                                    <br />
                            Software Engineer
                                    <br />
                            Creative Design
                                </h1>
                    </div>
                    <div className="billboard-link-to">
                        <span className="span-line-on-text">
                        </span>
                            <Link to='/about'> View Projects </Link>
                    </div>

                </div>
                <div className="footer-mainpage">
                    <div className="email-container">
                        <p className="email-gm"> Gerardomestanza23@gmail.com </p>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                <i className="fa fa-linkedin fa-lg social-icons" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-github fa-lg social-icons" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-instagram fa-lg social-icons" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
