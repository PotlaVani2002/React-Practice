import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: '' // Initialize errorMsg in the state
    };
  }
//Invalid url shows error message
//   componentDidMount() {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts1')
//       .then(response => {
//         console.log(response);
//         this.setState({ posts: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//         this.setState({ errorMsg: 'Error retrieving data' });
//       });
//   }

//Displaying posts with valid post url from jsonplaceholder
componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: 'Error retrieving data' });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of Posts</h1>
        {posts.length ? (
          posts.map(post => <div key={post.id}>{post.title}</div>)
        ) : (
          <p>No posts available</p>
        )}
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    );
  }
}

export default PostList;
