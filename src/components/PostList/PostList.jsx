import PostListItem from "./PostListItem";

import styles from "./postlist.module.css";

const PostList = ({items, onDeletePost}) => {

    const elements = items.map(({title, body, id}) => (
        <PostListItem
        key={id}
        title={title}
        body={body}
        id={id}
        onDeletePost={onDeletePost}
        />
));

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

export default PostList;