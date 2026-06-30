const Post = ({data}) => {
    return (
        <div className="post-card">
            <h3 className="post-title">{data.title}</h3>
            <p className="post-body">{data.body}</p>
        </div>
    );
}

export default Post