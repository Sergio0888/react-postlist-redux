import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/posts";

export const getPost = createAsyncThunk(
    "posts/get",
    async(_, {rejectWithValue}) => {
        try {
            const {data} = await api.getPosts();
            return data;
        } 
        catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addPost = createAsyncThunk(
    "posts/add",
    async(payload, {rejectWithValue}) => {
        try {
            const {data} = await api.addPosts(payload);
            return data;
        } 
        catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deletePost = createAsyncThunk(
    "posts/delete",
    async(payload, {rejectWithValue}) => {
        try {
            await api.deletePosts(payload);
            return payload;
        } 
        catch (error) {
            return rejectWithValue(error);
        }
    }
);