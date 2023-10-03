import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../api";


const PostsList = () => {
    const { data: posts } = useGetPostsQuery(1);

    return (
        <ul>
            {
                posts ? posts.map((post) => (
                    <li key={post.id}>
                        <div className="post-id">{post.id}</div>
                        <div className="post-title">{post.title}</div>
                        <div className="post-body">{post.body}</div>
                        <Link to={`/posts/${post.id}`}>Просмотр</Link>
                    </li>
                )) : null
            }
        </ul>
    )
}

export default PostsList