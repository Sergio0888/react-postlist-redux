import { createSlice } from "@reduxjs/toolkit";
import { addPost, deletePost, getPost } from "./posts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [getPost.pending]: (store) => {
            store.loading = true
            store.error = null
        },
        [getPost.fulfilled]: (store, {payload}) => {
            store.loading = false
            store.items = payload
        },
        [getPost.rejected]: (store, {payload}) => {
            store.loading = false
            store.error = payload
        },
        [addPost.pending]: (store) => {
            store.loading = true
            store.error = null
        },
        [addPost.fulfilled]: (store, {payload}) => {
            store.loading = false
            store.items.push(payload) 
        },
        [addPost.rejected]: (store, {payload}) => {
            store.loading = false
            store.error = payload
        },
        [deletePost.pending]: (store) => {
            store.loading = true
            store.error = null
        },
        [deletePost.fulfilled]: (store, {payload}) => {
            store.loading = false
            store.items = store.items.filter(item => item.id !== payload)
        },
        [deletePost.rejected]: (store, {payload}) => {
            store.loading = false
            store.error = payload
        }
    }
});

export default postsSlice.reducer;