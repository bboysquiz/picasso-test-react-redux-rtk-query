import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
    const { postId } = useParams();
    const post = {
        id: 0,
        title: 'title',
        body: 'body',
    }
    return (
        <div>
            <div className="post-id">{post.id}</div>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
            <Link to="/">Назад</Link>
        </div>
    )
}

export default PostDetails