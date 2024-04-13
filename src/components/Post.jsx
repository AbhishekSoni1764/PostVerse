/* eslint-disable react/prop-types */
export default function Post({ post, deletePost }) {
    return (
        <div className="card" style={{ width: "25rem", marginBottom: "40px", height: "479px" }}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                X
            </span>
            <div className="card-body box-container">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <div>{post.tags.map(item => <span className="badge text-bg-primary tag-box" key={item}>{item}</span>)}</div>
                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted by {post.reactions} people.
                </div>
            </div>
        </div>
    )
}