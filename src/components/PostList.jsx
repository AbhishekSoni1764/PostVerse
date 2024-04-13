import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postItems } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
    const { postList, deletePost, addInitialPosts } = useContext(postItems)
    const [fetching, setFetching] = useState(false);

    //comment this useeffect to use local data
    useEffect(() => {
        setFetching(true)

        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://dummyjson.com/posts", { signal })
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
                setFetching(false)
            })

        return () => {
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="postlist-container">
            {fetching && <LoadingSpinner />}
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post) => <Post key={post.id} post={post} deletePost={deletePost} />)}
        </div>
    )
}