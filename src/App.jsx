import PostList from "components/PostList/PostList";
import Form from "components/Form/Form";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

import { fetchPosts } from "redux/posts-selector";
import { getPost, addPost, deletePost } from "redux/posts-operation";


export const App = () => {

  const items = useSelector(fetchPosts);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getPost())
  }, [dispach]);
  
  const onCreatePost = data => {
    const action = addPost(data);
    dispach(action)
  };

  const onDeletePost = id => {
    const action = deletePost(id);
    dispach(action)
  }

  return (
    <div>
      <Form onCreatePost={onCreatePost}/>
      <PostList items={items} onDeletePost={onDeletePost}/>
    </div>
  );
};
