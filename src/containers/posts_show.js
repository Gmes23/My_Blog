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
        var markdown = 'function here() { return this }';
        console.log(post);

        if (!post) {
            return <div> loading ... </div>;
        }

        return (
            <div> 
                {/*<Link to="/"> back to main </Link>
                <p>{post}</p>*/}
                <div className="fullpage-left-container">
                    <h1> code here </h1>
                  <pre className="prettyprint lang-js">
                          
                      
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
                        <p>Lorem Ipsum is simply dummy text of the printing
                             and typesetting industry. Lorem Ipsum has been 
                             the industry's standard dummy text ever since the 
                             1500s, when an unknown printer took a galley of type
                              and scrambled it to make a type specimen book. It has 
                              survived not only five centuries, but also the leap into 
                              electronic typesetting, remaining essentially unchanged. 
                              It was popularised in the 1960s with the release of Letraset
                               sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions
                                 Lorem Ipsum.
                                 
                           
                                 </p>
                                 
                    </div>

                </div>
                {/*<button
                 className="btn btn-danger pull-xs-right"
                 onClick={this.onDeleteClick.bind(this)}>
                    delete post
                </button>
                <h3>{post.data}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>*/}
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStatetoProps, { fetchPost }) (PostsShow);