import styles from "./postlist.module.css";

const PostListItem = ({title, body, id, onDeletePost}) => {
    return (
        <li className={styles.item}>
            <p className={styles.title}>{title}</p>
            <p className={styles.body}>{body}</p>
            <button className={styles.btn} onClick={() => onDeletePost(id)} type="button">X</button>
        </li>
    )
};

export default PostListItem;