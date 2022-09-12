import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./posts-slice";

const store = configureStore({
    reducer: {
        items: postsReducer
    }
});

export default store;