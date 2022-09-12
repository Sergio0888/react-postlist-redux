import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const getPosts = () => {
    const data = instance.get("/", {
        params: {
            _page: 1,
            _limit: 10
        }
    })
    return data;
};

export const addPosts = (elem) => {
    const data = instance.post("/", elem);
    return data;
};

export const deletePosts = (id) => {
    const data = instance.delete(`/${id}`);
    return data;
};