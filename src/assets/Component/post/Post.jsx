import { Link, useNavigate } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    };

    return (
        <div className="post">
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;
