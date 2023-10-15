import styles from "./style.module.css"

const Button = ({ text }) => {
    return (
        <button className={styles.btn} type="button">{text}</button>
    );
};

export default Button;