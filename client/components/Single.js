import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
	render(){
		// we need index of the post
		// we need to get the post
	
		const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[this.props.params.postId] || [];

		return(
			<div className="single-photo">
		<Photo i={i} post={post} {...this.props} />
		<Comments postComments={postComments} {...this.props}/>
			</div>
			)
	}
});

export default Single;