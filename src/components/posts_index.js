import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('good time to call action creator')
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}


export default PostsIndex;
