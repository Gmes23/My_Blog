import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        const { post } = this.props;

        if (post.length > 0){
        var re = /.*BlogPost\s+(.*)\s+EndBlog.*/;
        var blogDescription = post.match(re)
            console.log(blogDescription);
            var markdown = blogDescription;
        
        }
        // var markdown = 'function here() { return this } if (!wrwer){wefwef} if (!post) { retrun }';
        // console.log(post);

        if (!post) {
            return <div> loading ... </div>;
        }

        return (
            <div>
                <div className="fullpage-left-container">
                    <pre className="prettyprint lang-js code-Blocks">
                        {markdown}
                    </pre>
                </div>
                <div className="fullpage-right-container">
                    <div className="blog-navigation-bar">
                        <Link className="back-button-gm" to="/">
                            Back
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="blog-title-container">
                        <h1> Eloquent Javascript </h1>
                        <h4> by Gerardo Mestanza </h4>
                    </div>
                    <div className="blog-text-container">
                        <p>{post}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStatetoProps, { fetchPost }) (PostsShow);