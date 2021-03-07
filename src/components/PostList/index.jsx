import React from 'react';
import PropTypes from 'prop-types';

function PostList(props) {
  const { posts } = props;
  return (
    <ul>
      {posts.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
