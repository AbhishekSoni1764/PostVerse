/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const postItems = createContext({
    postList: [],
    addPost: () => { },
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

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userId,
                tags: tags,
            }
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

    return (
        <postItems.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </postItems.Provider>
    )
}

export default PostItemsProvider;