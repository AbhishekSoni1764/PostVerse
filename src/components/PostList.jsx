import { useContext } from "react";
import Post from "./Post";
import { postItems } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
    const { postList, deletePost } = useContext(postItems)
    return (
        <div className="postlist-container">
            {postList.length === 0 && <WelcomeMessage />}
            {postList.map((post) => <Post key={post.id} post={post} deletePost={deletePost} />)}
        </div>
    )
}