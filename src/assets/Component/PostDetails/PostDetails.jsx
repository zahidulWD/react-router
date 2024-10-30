import { useLoaderData,useNavigate } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const {id,title,body} = post;

    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details about:</h3>
            <h3>Post ID:{id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;