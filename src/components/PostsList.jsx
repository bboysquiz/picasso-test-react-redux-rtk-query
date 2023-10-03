import React from 'react'
import { Link } from "react-router-dom";


const PostsList = () => {
    const post = {
        id: 0,
        title: 'title',
        body: 'body',
    }
  return (
    <ul>
        <li>
            <div className="post-id">{post.id}</div>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
            <Link to={`/posts/${post.id}`}>Просмотр</Link>
        </li>
    </ul>
  )
}

export default PostsList