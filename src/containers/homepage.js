import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import { Motion, spring, TransitionMotion } from 'react-motion';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = { index : 0 };
        this.blogPostImages = ['./img/placeholder1.jpg', './img/placeholder2.jpg', './img/placeholder3.png'];
    }

    changeBlogPicForwards() {
        let i = this.state.index;
        if (i == this.blogPostImages.length - 1) {
             i = 0; 
          } else {
            i = i + 1; 
        }
        this.setState({index: i});
        console.log(this.state.index)
    }

    changeBlogPicBackwards() {
        let i = this.state.index;
        if (i == 0) {
            i = this.blogPostImages.length - 1; 
        } else {
            i = i - 1;
        }
        this.setState({index: i});
    }


    render() {
        var blogCurrentPic = this.blogPostImages[this.state.index];

        return (
      
            <div>
                <div className="navbar-gm">
                    <div className="logo-gm-container">
                        <h1 className="logo-gm no-margin">GM</h1>
                    </div>
                    <div className="logo-description">
                        <h1 className="no-margin gm-description-header"> Gerardo Mestanza - Portfolio </h1>
                    </div>
                </div>
                <div className="right-container-mainpage">
                    <div className="right-container-top-section">
                        <h1 className="no-margin title-section-right-container"> Blog </h1>
                        <div className="top-section-actions">
                            <Motion key={this.state.index} defaultStyle={{ x:0 }} style={{ x: spring(1) }}>
                                {({ x }) =>
                                    <div className="image-holder">
                                        <img className="blog-pictures" src={blogCurrentPic} style={{
                                            transform: `scale(${x}, ${x})`,
                                            opacity: `${x}`
                                        }} />
                                    </div>
                                }
                            </Motion>
                            <div className="blog-name">
                                <div className="left-arrow-action arrow-icons">
                                    <i onClick={(e) => this.changeBlogPicForwards(e)} className="fa fa-arrow-circle-o-left fa-2x" aria-hidden="true"></i>
                                </div>
                                <div className="right-arrow-action arrow-icons">
                                    <i onClick={(e) => this.changeBlogPicBackwards(e)} className="fa fa-arrow-circle-o-right fa-2x" aria-hidden="true"></i>
                                </div>
                                <p> Basic Mathematical Operations</p>
                                <p> Javascript </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-container-bottom-section">
                        <div className="bottom-section-actions">
                            <h1 className="center-text bottom-right-container-title"> Works </h1>
                             <div className="image-holder">
                                <img className="blog-pictures" src="./img/placeholder.jpg" />
                             </div>
                        </div>
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
                        <p className="email-gm"> GERARDOMESTANZA23@GMAIL.COM </p>
                    </div>
                    <div className="social-links">
                        <ul>
                            <li>
                                 <Link to="/"><i className="fa fa-linkedin fa-lg social-icons" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-github fa-lg social-icons" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-instagram fa-lg social-icons" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
