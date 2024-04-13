import { useContext } from "react";
import Post from "./Post";
import { postItems } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
    const { postList, deletePost, fetching } = useContext(postItems)

    return (
        <div className="postlist-container">
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post) => <Post key={post.id} post={post} deletePost={deletePost} />)}
        </div>
    )
}