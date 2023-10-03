import { useParams, Link } from "react-router-dom";
import { useGetPostQuery } from "../api";

const PostDetails = () => {
    const { postId } = useParams();
    const { data: post } = useGetPostQuery(postId);

    return (
        <div>
            {post ? (
                <div className="post__container">
                    <div className="post-id">{post.id}</div>
                    <div className="post-title">{post.title}</div>
                    <div className="post-body">{post.body}</div>
                </div>
            ) : (
                <p className='loading'>Loading...</p>
            )}


            <Link to="/">Назад</Link>
        </div>
    )
}

export default PostDetails