import { useState } from "react";
import styles from "./form.module.css"

const Form = ({onCreatePost}) => {

    const [state, setState] = useState({
        title: "",
        body: ""
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        const {title, body} = state;
        onCreatePost({
            title,
            body,
            userId: 1
        })
        return setState({
            title: "",
            body: ""
        })
    };

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setState({
            ...state,
            [name]: value
        })
    };

    const {title, body} = state;

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.text} htmlFor="">Title</label>
            <input 
            className={styles.title}
            onChange={onChange}
            type="text" 
            name="title"
            value={title} />

            <label className={styles.text} htmlFor="">Body</label>
            <input 
            className={styles.body}
            onChange={onChange}
            type="text" 
            name="body"
            value={body} />

            <button className={styles.btn} type="submit">Add</button>
        </form>
    )
};

export default Form;