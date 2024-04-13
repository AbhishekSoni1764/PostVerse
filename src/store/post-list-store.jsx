/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const postItems = createContext({
    postList: [],
    addPost: () => { },
    fetching: false,
    deletePost: () => { },
});


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts
    }
    return newPostList
}


const PostItemsProvider = ({ children }) => {

    // TESTING

    // const DEFAULT_LIST = [
    //     // {
    //     //     id: 1,
    //     //     title: "I Am Learning React",
    //     //     body: "I am Learing react by doing projects.",
    //     //     reactions: "24",
    //     //     userId: "user123",
    //     //     tags: ["react", "lovingIt", "consistent"],
    //     // },
    //     // {
    //     //     id: 2,
    //     //     title: "I Am Learning NEXT",
    //     //     body: "I am Learing NEXt by doing projects.",
    //     //     reactions: "12",
    //     //     userId: "user1",
    //     //     tags: ["react", "lovingIt", "consistent"],
    //     // },
    // ]

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post,
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    }
    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            },
        });
    };
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
        <postItems.Provider value={{ postList, addPost, fetching, deletePost }}>
            {children}
        </postItems.Provider>
    )
}

export default PostItemsProvider;