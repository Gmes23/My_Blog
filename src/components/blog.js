import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class BlogPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }


    render() {
        const { post } = this.props;

        if (!post) {
            return <div> loading ... </div>;
        }

        return (
            <div> 
                <Link to="/"> back to main </Link>
                <h3>{post}</h3>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    // console.log(state);
    // console.log(post);
    // console.log(posts);
    return { post: state.post };
}

export default connect(mapStatetoProps, { fetchPost }) (BlogPost);