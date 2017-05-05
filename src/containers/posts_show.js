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
            var blogDescription = post.match(/BlogPost\s*([^]*)\s*EndBlog/)[1];
            var bestAnswers = post.match(/bestSolutions\s*([^]*)\s*endSolutions/)[1];
            var title = this.props.params.id.replace(/_/g, " ");
        }
      
        if (!post) {
            return <div> loading ... </div>;
        }

        return (
            <div>
                <div className="fullpage-right-container">
                    <pre className="prettyprint lang-js code-Blocks">
                        {bestAnswers}
                    </pre>
                </div>
                <div className="fullpage-left-container">
                    <div className="blog-navigation-bar">
                        <Link className="back-button-gm" to="/">
                        <i className="fa fa-long-arrow-left back-arrow-icon" aria-hidden="true"></i>
                            Back
                        </Link>
                    </div>
                    <div className="blog-title-container">
                        <h1> {title} </h1>
                        <h4> by Gerardo Mestanza </h4>
                    </div>
                    <div className="blog-text-container">
                        <p>{blogDescription}</p>
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